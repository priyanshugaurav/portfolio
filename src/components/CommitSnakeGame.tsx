import React, { useEffect, useRef, useState, useCallback } from "react";

// Grid configuration
const CELL_SIZE = 13;
const CELL_GAP = 3.5;
const CELL_RADIUS = 2.5;

interface Point {
  x: number;
  y: number;
}

export const CommitSnakeGame: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(24);
  const [isInteractive, setIsInteractive] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [, setForceThemeUpdate] = useState(0);

  // Mutable game state in ref for 60fps / interval loop
  const gameStateRef = useRef({
    cols: 38,
    rows: 10,
    offsetX: 16,
    offsetY: 12,
    snake: [
      { x: 10, y: 5 },
      { x: 9, y: 5 },
      { x: 8, y: 5 },
      { x: 7, y: 5 },
      { x: 6, y: 5 },
    ] as Point[],
    direction: { x: 1, y: 0 } as Point,
    nextDirection: { x: 1, y: 0 } as Point,
    food: { x: 22, y: 5 } as Point,
    interactive: false,
    score: 0,
    trail: [] as { x: number; y: number; opacity: number }[],
    isDarkMode: true,
  });

  // Track Theme Changes (Dark/Light mode)
  useEffect(() => {
    const checkTheme = () => {
      const dark = document.documentElement.classList.contains("dark");
      gameStateRef.current.isDarkMode = dark;
      setForceThemeUpdate((n) => n + 1);
    };

    checkTheme();

    // Observe changes to html class (theme switch)
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // Sync interactive mode to ref
  useEffect(() => {
    gameStateRef.current.interactive = isInteractive;
  }, [isInteractive]);

  // Observer to pause when scrolled off-screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Keyboard controls when user takes over
  useEffect(() => {
    if (!isInteractive) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const { direction } = gameStateRef.current;
      let nextDir: Point | null = null;

      if (e.key === "ArrowUp" || e.key === "w" || e.key === "W") {
        if (direction.y === 0) nextDir = { x: 0, y: -1 };
        e.preventDefault();
      } else if (e.key === "ArrowDown" || e.key === "s" || e.key === "S") {
        if (direction.y === 0) nextDir = { x: 0, y: 1 };
        e.preventDefault();
      } else if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") {
        if (direction.x === 0) nextDir = { x: -1, y: 0 };
        e.preventDefault();
      } else if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") {
        if (direction.x === 0) nextDir = { x: 1, y: 0 };
        e.preventDefault();
      }

      if (nextDir) {
        gameStateRef.current.nextDirection = nextDir;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isInteractive]);

  // Autonomous Pathfinding (BFS shortest path to food)
  const computeNextAiMove = useCallback((): Point => {
    const s = gameStateRef.current;
    const head = s.snake[0];
    const { cols, rows, food } = s;

    // Obstacle grid (snake body excluding tail)
    const blocked = new Set<string>();
    for (let i = 0; i < s.snake.length - 1; i++) {
      blocked.add(`${s.snake[i].x},${s.snake[i].y}`);
    }

    // Neighbors helper
    const getNeighbors = (p: Point): Point[] => {
      const dirs = [
        { x: 1, y: 0 },
        { x: -1, y: 0 },
        { x: 0, y: 1 },
        { x: 0, y: -1 },
      ];
      const valid: Point[] = [];
      for (const d of dirs) {
        const nx = (p.x + d.x + cols) % cols;
        const ny = (p.y + d.y + rows) % rows;
        if (!blocked.has(`${nx},${ny}`)) {
          valid.push({ x: nx, y: ny });
        }
      }
      return valid;
    };

    // BFS to find shortest path to food
    const queue: { point: Point; path: Point[] }[] = [{ point: head, path: [] }];
    const visited = new Set<string>([`${head.x},${head.y}`]);
    let foundPath: Point[] | null = null;

    while (queue.length > 0) {
      const current = queue.shift()!;
      if (current.point.x === food.x && current.point.y === food.y) {
        foundPath = current.path;
        break;
      }

      for (const next of getNeighbors(current.point)) {
        const key = `${next.x},${next.y}`;
        if (!visited.has(key)) {
          visited.add(key);
          queue.push({ point: next, path: [...current.path, next] });
        }
      }
    }

    // If path to food found, return first step
    if (foundPath && foundPath.length > 0) {
      const nextStep = foundPath[0];
      let dx = nextStep.x - head.x;
      let dy = nextStep.y - head.y;
      if (dx > 1) dx = -1;
      if (dx < -1) dx = 1;
      if (dy > 1) dy = -1;
      if (dy < -1) dy = 1;
      return { x: dx, y: dy };
    }

    // Fallback: Pick any safe neighbor
    const safeNeighbors = getNeighbors(head);
    if (safeNeighbors.length > 0) {
      const nextStep = safeNeighbors[0];
      let dx = nextStep.x - head.x;
      let dy = nextStep.y - head.y;
      if (dx > 1) dx = -1;
      if (dx < -1) dx = 1;
      if (dy > 1) dy = -1;
      if (dy < -1) dy = 1;
      return { x: dx, y: dy };
    }

    return s.direction;
  }, []);

  // Main Canvas & Game Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isInView) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let tickTimer: ReturnType<typeof setInterval>;
    let animId: number;

    const handleResize = () => {
      if (!canvas.parentElement) return;
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      // Perfectly center grid horizontally and vertically
      const step = CELL_SIZE + CELL_GAP;
      const availableWidth = Math.floor(rect.width);
      const numCols = Math.max(16, Math.floor((availableWidth - 28) / step));
      const numRows = 10;

      const gridWidth = numCols * step - CELL_GAP;
      const gridHeight = numRows * step - CELL_GAP;

      // Exact pixel-perfect symmetrical offsets
      const offsetX = Math.floor((availableWidth - gridWidth) / 2);
      const offsetY = 14;

      const displayHeight = gridHeight + offsetY * 2;

      canvas.width = availableWidth * dpr;
      canvas.height = displayHeight * dpr;
      canvas.style.width = `${availableWidth}px`;
      canvas.style.height = `${displayHeight}px`;

      ctx.scale(dpr, dpr);

      const s = gameStateRef.current;
      s.cols = numCols;
      s.rows = numRows;
      s.offsetX = offsetX;
      s.offsetY = offsetY;

      // Clamp food and snake inside new bounds
      s.food.x = Math.min(s.food.x, numCols - 1);
      s.food.y = Math.min(s.food.y, numRows - 1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const spawnFood = () => {
      const s = gameStateRef.current;
      const snakeSet = new Set(s.snake.map((p) => `${p.x},${p.y}`));
      const freeCells: Point[] = [];

      for (let r = 0; r < s.rows; r++) {
        for (let c = 0; c < s.cols; c++) {
          if (!snakeSet.has(`${c},${r}`)) {
            freeCells.push({ x: c, y: r });
          }
        }
      }

      if (freeCells.length > 0) {
        s.food = freeCells[Math.floor(Math.random() * freeCells.length)];
      }
    };

    // Game tick (movement)
    const tick = () => {
      const s = gameStateRef.current;

      // Determine move direction
      if (s.interactive) {
        s.direction = s.nextDirection;
      } else {
        s.direction = computeNextAiMove();
      }

      // Move head
      const currentHead = s.snake[0];
      const newHead: Point = {
        x: (currentHead.x + s.direction.x + s.cols) % s.cols,
        y: (currentHead.y + s.direction.y + s.rows) % s.rows,
      };

      // Collision with self
      let collision = false;
      for (let i = 0; i < s.snake.length - 1; i++) {
        if (s.snake[i].x === newHead.x && s.snake[i].y === newHead.y) {
          collision = true;
          break;
        }
      }

      if (collision) {
        // Reset snake
        s.snake = [
          { x: Math.floor(s.cols / 2), y: Math.floor(s.rows / 2) },
          { x: Math.floor(s.cols / 2) - 1, y: Math.floor(s.rows / 2) },
          { x: Math.floor(s.cols / 2) - 2, y: Math.floor(s.rows / 2) },
        ];
        s.direction = { x: 1, y: 0 };
        s.nextDirection = { x: 1, y: 0 };
        s.score = 0;
        setScore(0);
        spawnFood();
        return;
      }

      // Add new head
      s.snake.unshift(newHead);

      // Check food
      if (newHead.x === s.food.x && newHead.y === s.food.y) {
        s.score += 1;
        setScore(s.score);
        setHighScore((prev) => Math.max(prev, s.score));
        spawnFood();
      } else {
        // Remove tail
        s.snake.pop();
      }
    };

    tickTimer = setInterval(tick, isInteractive ? 110 : 85);

    // Render loop (draws commit cells with dark/light theme support)
    const render = () => {
      const s = gameStateRef.current;
      const step = CELL_SIZE + CELL_GAP;
      const offsetX = s.offsetX;
      const offsetY = s.offsetY;
      const isDarkTheme = s.isDarkMode;

      const canvasWidth = canvas.width / (window.devicePixelRatio || 1);
      const canvasHeight = canvas.height / (window.devicePixelRatio || 1);

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      // Symmetrical Background Fill (Theme Aware)
      ctx.fillStyle = isDarkTheme ? "#09090b" : "#f4f4f5";
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      // Create lookup sets for snake segments
      const snakeMap = new Map<string, number>();
      s.snake.forEach((pt, idx) => {
        snakeMap.set(`${pt.x},${pt.y}`, idx);
      });

      // Draw GitHub Commit Style Grid
      for (let r = 0; r < s.rows; r++) {
        for (let c = 0; c < s.cols; c++) {
          const x = offsetX + c * step;
          const y = offsetY + r * step;
          const key = `${c},${r}`;

          const isFood = s.food.x === c && s.food.y === r;
          const snakeIdx = snakeMap.get(key);

          ctx.beginPath();
          ctx.roundRect(x, y, CELL_SIZE, CELL_SIZE, CELL_RADIUS);

          if (isFood) {
            // Food: Level 4 Active Commit (Bright Pulsing Green)
            ctx.fillStyle = isDarkTheme ? "#34d399" : "#059669";
            ctx.fill();
            // Subtle aura
            ctx.shadowColor = isDarkTheme ? "rgba(52, 211, 153, 0.7)" : "rgba(5, 150, 105, 0.4)";
            ctx.shadowBlur = 6;
            ctx.fill();
            ctx.shadowBlur = 0;
          } else if (snakeIdx !== undefined) {
            // Entire Snake: 100% Solid, High-Contrast Saturated Colors
            if (snakeIdx === 0) {
              // Snake Head: Leading Vivid Emerald
              ctx.fillStyle = isDarkTheme ? "#34d399" : "#047857";
            } else if (snakeIdx <= 4) {
              // Front Body: Bright Emerald
              ctx.fillStyle = isDarkTheme ? "#10b981" : "#059669";
            } else {
              // Rest of Body: Solid High-Contrast Green (Never faded!)
              ctx.fillStyle = isDarkTheme ? "#059669" : "#10b981";
            }
            ctx.fill();
          } else {
            // Empty Commit Box (Level 0 GitHub Square)
            ctx.fillStyle = isDarkTheme ? "rgba(255, 255, 255, 0.07)" : "rgba(0, 0, 0, 0.07)";
            ctx.fill();
          }
        }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      clearInterval(tickTimer);
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, [isInView, isInteractive, computeNextAiMove]);

  return (
    <section ref={containerRef} id="commit-snake" className="mt-12 sm:mt-16">
      <div className="w-full max-w-3xl mx-auto px-6 lg:px-0">
        <div className="rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/40 dark:bg-zinc-900/25 backdrop-blur-sm shadow-xs overflow-hidden font-geist-sans transition-all hover:border-zinc-300 dark:hover:border-zinc-700/80">
          {/* Header Bar */}
          <div className="px-4 py-3 sm:px-5 border-b border-zinc-200/70 dark:border-zinc-800/70 flex flex-wrap items-center justify-between gap-3 bg-zinc-100/50 dark:bg-zinc-900/50 text-xs">
            {/* Title & Live Status */}
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-700 dark:text-zinc-200 font-semibold">
                Commit Snake
              </span>
              <span className="text-zinc-300 dark:text-zinc-700 hidden sm:inline">·</span>
              <span className="font-mono text-[11px] text-zinc-400 dark:text-zinc-500 hidden sm:inline">
                {isInteractive ? "Control Active (WASD / Arrows)" : "Autonomous A* Solver"}
              </span>
            </div>

            {/* Scoreboard & Controls (No Emojis!) */}
            <div className="flex items-center gap-3 ml-auto">
              <div className="font-mono text-[11px] px-2.5 py-0.5 rounded-md bg-zinc-200/70 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-300/60 dark:border-zinc-700/60 flex items-center gap-2 tabular-nums">
                <span>Commits: <strong className="text-zinc-900 dark:text-white">{score}</strong></span>
                <span className="text-zinc-400 dark:text-zinc-600">·</span>
                <span>Best: {highScore}</span>
              </div>

              {/* Take Control Toggle */}
              <button
                onClick={() => setIsInteractive((prev) => !prev)}
                className={`font-mono text-[10.5px] px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                  isInteractive
                    ? "bg-emerald-500 text-white border-emerald-600 shadow-xs"
                    : "bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500"
                }`}
              >
                {isInteractive ? "Release Control" : "Take Control"}
              </button>
            </div>
          </div>

          {/* Canvas Arcade Screen (Perfect Symmetrical Sizing in Both Themes) */}
          <div className="relative w-full bg-zinc-100/60 dark:bg-[#09090b] select-none flex items-center justify-center transition-colors">
            <canvas ref={canvasRef} className="block" />
          </div>
        </div>
      </div>
    </section>
  );
};
