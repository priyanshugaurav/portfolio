import React, { useEffect, useRef } from "react";

const SnakeGame = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const gameState = useRef({}); // store everything here

  const gridSize = 20;
  const speed = 120;

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const ctx = canvas.getContext("2d");

    const cols = Math.floor(container.clientWidth / gridSize);
    const rows = Math.floor(container.clientHeight / gridSize);
    canvas.width = cols * gridSize;
    canvas.height = rows * gridSize;

    // ✅ store state in ref so it persists
    gameState.current = {
      snake: [{ x: 5, y: 5 }],
      apple: { x: 10, y: 10 },
      dx: 1,
      dy: 0,
      cols,
      rows,
      ctx,
      canvas,
    };

    const spawnApple = () => {
      gameState.current.apple = {
        x: Math.floor(Math.random() * cols),
        y: Math.floor(Math.random() * rows),
      };
    };

    const gameLoop = () => {
      const { snake, apple, dx, dy, cols, rows, ctx, canvas } =
        gameState.current;

      const head = snake[0];

      // simple AI
      let ndx = dx, ndy = dy;
      if (head.x < apple.x && dx !== -1) {
        ndx = 1; ndy = 0;
      } else if (head.x > apple.x && dx !== 1) {
        ndx = -1; ndy = 0;
      } else if (head.y < apple.y && dy !== -1) {
        ndx = 0; ndy = 1;
      } else if (head.y > apple.y && dy !== 1) {
        ndx = 0; ndy = -1;
      }

      const newHead = { x: head.x + ndx, y: head.y + ndy };
      gameState.current.dx = ndx;
      gameState.current.dy = ndy;
      snake.unshift(newHead);

      // apple eat
      if (newHead.x === apple.x && newHead.y === apple.y) {
        spawnApple();
      } else {
        snake.pop();
      }

      // collision
      if (
        newHead.x < 0 ||
        newHead.y < 0 ||
        newHead.x >= cols ||
        newHead.y >= rows ||
        snake.slice(1).some((s) => s.x === newHead.x && s.y === newHead.y)
      ) {
        gameState.current.snake = [{ x: 5, y: 5 }];
        gameState.current.dx = 1;
        gameState.current.dy = 0;
        spawnApple();
      }

      // draw
      ctx.fillStyle = "#111";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "lime";
      gameState.current.snake.forEach((s) =>
        ctx.fillRect(s.x * gridSize, s.y * gridSize, gridSize - 2, gridSize - 2)
      );

      ctx.fillStyle = "red";
      ctx.fillRect(
        gameState.current.apple.x * gridSize,
        gameState.current.apple.y * gridSize,
        gridSize - 2,
        gridSize - 2
      );
    };

    const gameInterval = setInterval(gameLoop, speed);

    return () => clearInterval(gameInterval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-[30vh] md:max-w-[61.5%] md:h-[40vh] flex items-center justify-center bg-black mx-auto"
    >
      <canvas ref={canvasRef} className="border border-black"></canvas>
    </div>
  );
};

export default SnakeGame;
