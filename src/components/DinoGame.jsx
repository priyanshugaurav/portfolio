import React, { useEffect, useRef, useState, useCallback } from "react";

const CHARS = ["0","1","0","1","{","}","//","=>","[]","&&","||",";;","*","&",">>","<<","0x","fn","++","--"];
const COLS_COUNT = 80;
const ROWS_COUNT = 60;
const GRAVITY = 1;
const SPREAD  = 0.38; // liquid spread probability

// cell types
const EMPTY  = 0;
const SAND   = 1;
const WALL   = 2;
const WATER  = 3;
const GLITCH = 4;

const CELL_COLORS = {
  [SAND]:   () => `rgba(${180 + Math.random()*30|0},${180 + Math.random()*20|0},${160 + Math.random()*20|0},${0.7+Math.random()*0.3})`,
  [WATER]:  () => `rgba(80,${160+Math.random()*40|0},${220+Math.random()*35|0},${0.5+Math.random()*0.4})`,
  [GLITCH]: () => `rgba(${200+Math.random()*55|0},${Math.random()*80|0},${Math.random()*80|0},${0.8+Math.random()*0.2})`,
  [WALL]:   () => "rgba(255,255,255,0.12)",
};

const MODES = ["wall", "sand", "water", "glitch", "erase"];
const MODE_LABELS = { wall:"▪ WALL", sand:"░ SAND", water:"≈ WATER", glitch:"▓ GLITCH", erase:"✕ ERASE" };
const MODE_HINT   = {
  wall:   "draw solid walls",
  sand:   "pour falling sand",
  water:  "pour liquid that spreads",
  glitch: "corrupted particles that dissolve",
  erase:  "erase anything",
};

export default function ParticleSandbox() {
  const canvasRef   = useRef(null);
  const containerRef= useRef(null);
  const gridRef     = useRef(null);   // Uint8Array flat grid
  const charsRef    = useRef(null);   // string[] for glyph per cell
  const lifeRef     = useRef(null);   // Uint8Array life counter (glitch)
  const rafRef      = useRef(null);
  const drawingRef  = useRef(false);
  const lastCellRef = useRef(null);
  const modeRef     = useRef("wall");
  const brushRef    = useRef(2);      // radius in cells
  const dimsRef     = useRef({ cols: COLS_COUNT, rows: ROWS_COUNT, cw: 8, ch: 8 });

  const [mode,   setMode]   = useState("wall");
  const [cells,  setCells]  = useState(0);
  const [fps,    setFps]    = useState(0);

  // sync mode ref
  useEffect(() => { modeRef.current = mode; }, [mode]);

  // ── init grid ────────────────────────────────────────────────────
  const initGrid = useCallback((cols, rows) => {
    gridRef.current  = new Uint8Array(cols * rows);
    charsRef.current = new Array(cols * rows).fill("");
    lifeRef.current  = new Uint8Array(cols * rows);
  }, []);

  const idx = (col, row) => row * dimsRef.current.cols + col;

  // ── place cells in brush radius ──────────────────────────────────
  const placeBrush = useCallback((col, row) => {
    const { cols, rows } = dimsRef.current;
    const r    = brushRef.current;
    const type = modeRef.current === "erase"  ? EMPTY
               : modeRef.current === "wall"   ? WALL
               : modeRef.current === "sand"   ? SAND
               : modeRef.current === "water"  ? WATER
               : GLITCH;

    for (let dr = -r; dr <= r; dr++) {
      for (let dc = -r; dc <= r; dc++) {
        if (dc*dc + dr*dr > r*r) continue;
        const c = col + dc, rw = row + dr;
        if (c < 0 || c >= cols || rw < 0 || rw >= rows) continue;
        const i = idx(c, rw);
        if (modeRef.current === "erase") {
          gridRef.current[i]  = EMPTY;
          charsRef.current[i] = "";
        } else if (gridRef.current[i] === EMPTY || (type !== WALL && gridRef.current[i] !== WALL)) {
          gridRef.current[i]  = type;
          charsRef.current[i] = CHARS[Math.random() * CHARS.length | 0];
          if (type === GLITCH) lifeRef.current[i] = 80 + Math.random() * 120 | 0;
        }
      }
    }
  }, []);

  // ── simulation step ──────────────────────────────────────────────
  const step = useCallback(() => {
    const { cols, rows } = dimsRef.current;
    const grid  = gridRef.current;
    const life  = lifeRef.current;
    const chars = charsRef.current;
    const moved = new Uint8Array(cols * rows);
    let count   = 0;

    // iterate bottom-up, alternate left/right to avoid bias
    const lr = Math.random() < 0.5;
    for (let r = rows - 2; r >= 0; r--) {
      const start = lr ? 0         : cols - 1;
      const end   = lr ? cols      : -1;
      const step  = lr ? 1         : -1;

      for (let c = start; c !== end; c += step) {
        const i = idx(c, r);
        const t = grid[i];
        if (t === EMPTY || t === WALL || moved[i]) continue;
        count++;

        // GLITCH decay
        if (t === GLITCH) {
          life[i]--;
          if (life[i] <= 0) { grid[i] = EMPTY; chars[i] = ""; continue; }
          // random char flicker
          if (Math.random() < 0.15) chars[i] = CHARS[Math.random() * CHARS.length | 0];
        }

        const below = idx(c, r + 1);
        const bl    = c > 0       ? idx(c - 1, r + 1) : -1;
        const br    = c < cols-1  ? idx(c + 1, r + 1) : -1;
        const left  = c > 0       ? idx(c - 1, r)     : -1;
        const right = c < cols-1  ? idx(c + 1, r)     : -1;

        const tryMove = (to) => {
          if (to < 0 || to >= cols * rows) return false;
          if (grid[to] !== EMPTY) return false;
          grid[to]  = t; chars[to]  = chars[i]; life[to]  = life[i];
          grid[i]   = EMPTY; chars[i]  = ""; life[i]  = 0;
          moved[to] = 1;
          return true;
        };

        // falling
        if (tryMove(below)) continue;

        if (t === SAND || t === GLITCH) {
          // diagonal slide
          const goL = bl !== -1 && grid[bl] === EMPTY;
          const goR = br !== -1 && grid[br] === EMPTY;
          if (goL && goR) { tryMove(Math.random() < 0.5 ? bl : br); }
          else if (goL)   { tryMove(bl); }
          else if (goR)   { tryMove(br); }
        }

        if (t === WATER) {
          // liquid: diag then horizontal spread
          const goL = bl !== -1 && grid[bl] === EMPTY;
          const goR = br !== -1 && grid[br] === EMPTY;
          if (goL && goR) { tryMove(Math.random() < 0.5 ? bl : br); continue; }
          if (goL) { tryMove(bl); continue; }
          if (goR) { tryMove(br); continue; }
          // horizontal spread
          if (Math.random() < SPREAD) {
            const goLh = left  !== -1 && grid[left]  === EMPTY;
            const goRh = right !== -1 && grid[right] === EMPTY;
            if (goLh && goRh) { tryMove(Math.random() < 0.5 ? left : right); }
            else if (goLh)    { tryMove(left); }
            else if (goRh)    { tryMove(right); }
          }
        }
      }
    }

    setCells(count);
  }, []);

  // ── render ───────────────────────────────────────────────────────
  const render = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const { cols, rows, cw, ch } = dimsRef.current;
    const grid  = gridRef.current;
    const chars = charsRef.current;
    const life  = lifeRef.current;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // bg grid dots
    ctx.fillStyle = "rgba(255,255,255,0.025)";
    for (let r = 0; r < rows; r += 4) {
      for (let c = 0; c < cols; c += 4) {
        ctx.fillRect(c * cw + cw/2, r * ch + ch/2, 1, 1);
      }
    }

    ctx.font         = `${Math.min(cw, ch) - 2}px 'JetBrains Mono','Fira Code',monospace`;
    ctx.textAlign    = "center";
    ctx.textBaseline = "middle";

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const i = idx(c, r);
        const t = grid[i];
        if (t === EMPTY) continue;

        const px = c * cw + cw / 2;
        const py = r * ch + ch / 2;

        if (t === WALL) {
          ctx.fillStyle = "rgba(255,255,255,0.1)";
          ctx.fillRect(c * cw, r * ch, cw, ch);
          ctx.fillStyle = "rgba(255,255,255,0.06)";
          ctx.fillRect(c * cw, r * ch, cw, ch);
          continue;
        }

        // glyph for particle types
        const alpha = t === GLITCH ? (life[i] / 200) : 1;
        ctx.globalAlpha = alpha;
        ctx.fillStyle   = CELL_COLORS[t]();
        ctx.fillText(chars[i] || "·", px, py);
        ctx.globalAlpha = 1;
      }
    }
  }, []);

  // ── main loop ────────────────────────────────────────────────────
  useEffect(() => {
    let last = performance.now();
    let frameCount = 0;
    let fpsTimer   = 0;

    const tick = (now) => {
      const dt = now - last; last = now;
      frameCount++;
      fpsTimer += dt;
      if (fpsTimer >= 500) {
        setFps(Math.round(frameCount / fpsTimer * 1000));
        frameCount = 0; fpsTimer = 0;
      }

      step();
      render();
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [step, render]);

  // ── canvas resize ────────────────────────────────────────────────
  useEffect(() => {
    const container = containerRef.current;
    const canvas    = canvasRef.current;
    if (!container || !canvas) return;

    const resize = () => {
      const W = container.offsetWidth;
      const H = container.offsetHeight;
      canvas.width  = W;
      canvas.height = H;
      const cw = Math.floor(W / COLS_COUNT);
      const ch = Math.floor(H / ROWS_COUNT);
      const cols = Math.floor(W / cw);
      const rows = Math.floor(H / ch);
      dimsRef.current = { cols, rows, cw, ch };
      initGrid(cols, rows);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(container);
    resize();
    return () => ro.disconnect();
  }, [initGrid]);

  // ── pointer events ───────────────────────────────────────────────
  const cellFromEvent = useCallback((e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const { cw, ch, cols, rows } = dimsRef.current;
    const scaleX = dimsRef.current.cols * cw / rect.width;
    const scaleY = dimsRef.current.rows * ch / rect.height;
    const x = (e.clientX - rect.left)  * scaleX;
    const y = (e.clientY - rect.top)   * scaleY;
    return {
      col: Math.floor(x / cw),
      row: Math.floor(y / ch),
    };
  }, []);

  const onPointerDown = useCallback((e) => {
    drawingRef.current = true;
    const { col, row } = cellFromEvent(e);
    lastCellRef.current = { col, row };
    placeBrush(col, row);
    e.currentTarget.setPointerCapture(e.pointerId);
  }, [cellFromEvent, placeBrush]);

  const onPointerMove = useCallback((e) => {
    if (!drawingRef.current) return;
    const { col, row } = cellFromEvent(e);
    const last = lastCellRef.current;
    // interpolate between last and current
    if (last) {
      const dx = col - last.col, dy = row - last.row;
      const steps = Math.max(Math.abs(dx), Math.abs(dy), 1);
      for (let s = 0; s <= steps; s++) {
        placeBrush(
          Math.round(last.col + dx * s / steps),
          Math.round(last.row + dy * s / steps)
        );
      }
    }
    lastCellRef.current = { col, row };
  }, [cellFromEvent, placeBrush]);

  const onPointerUp = useCallback(() => {
    drawingRef.current  = false;
    lastCellRef.current = null;
  }, []);

  const clearGrid = () => {
    const { cols, rows } = dimsRef.current;
    initGrid(cols, rows);
  };

  const cycleBrush = () => {
    brushRef.current = brushRef.current >= 5 ? 1 : brushRef.current + 1;
  };

  return (
    <div
      className="w-full border-b-2"
      style={{ borderColor: "var(--border-color)", fontFamily: "'JetBrains Mono','Fira Code',monospace" }}
    >
      {/* Header */}
      <div className="w-full border-b-2 flex justify-center" style={{ borderColor: "var(--border-color)" }}>
        <div
          className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[61.5%] flex items-center justify-between px-4 sm:px-6 md:px-8 py-4 border-x-2"
          style={{ borderColor: "var(--border-color)", color: "var(--text-color)" }}
        >
          <span className="text-xl sm:text-2xl font-bold tracking-tight">Particle Sandbox</span>
          <span className="text-[10px] font-medium tracking-widest uppercase opacity-40">
            {cells} cells · {fps}fps
          </span>
        </div>
      </div>

      {/* Mode toolbar */}
      <div className="flex justify-center border-b-2 bg-[var(--bg-color)]" style={{ borderColor: "var(--border-color)" }}>
        <div
          className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[61.5%] flex flex-wrap items-center gap-2 px-4 py-3 border-x-2"
          style={{ borderColor: "var(--border-color)" }}
        >
          {/* Main Drawing Modes */}
          <div className="flex flex-wrap gap-2">
            {MODES.map(m => (
              <button
                key={m}
                onClick={() => setMode(m)}
                title={MODE_HINT[m]}
                className={`px-3 py-1.5 text-[10px] sm:text-[11px] font-bold tracking-widest uppercase transition-all duration-200 border rounded-sm ${
                  mode === m
                    ? "bg-[var(--text-color)] text-[var(--bg-color)] border-[var(--text-color)] shadow-sm"
                    : "bg-transparent text-[var(--text-color)] border-[var(--border-color)] opacity-60 hover:opacity-100"
                }`}
              >
                {MODE_LABELS[m]}
              </button>
            ))}
          </div>

          <div className="flex-1 min-w-[10px]" />

          {/* Controls */}
          <div className="flex gap-2 ml-auto">
            <button
              onClick={cycleBrush}
              title="cycle brush size"
              className="px-3 py-1.5 text-[10px] sm:text-[11px] font-bold tracking-widest uppercase transition-all duration-200 border rounded-sm bg-transparent text-[var(--text-color)] border-[var(--border-color)] opacity-60 hover:opacity-100 hover:bg-[var(--icon-bg)]"
            >
              ⬤ {brushRef.current}
            </button>
            <button
              onClick={clearGrid}
              className="px-4 py-1.5 text-[10px] sm:text-[11px] font-bold tracking-widest uppercase transition-all duration-200 border rounded-sm bg-transparent text-[#ef4444] border-[var(--border-color)] opacity-60 hover:opacity-100 hover:border-[#ef4444] hover:bg-[#ef4444]/10"
            >
              CLEAR
            </button>
          </div>
        </div>
      </div>

      {/* Canvas */}
      <div className="flex justify-center">
        <div
          className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[61.5%] border-x-2"
          style={{ borderColor: "var(--border-color)" }}
        >
          <div
            ref={containerRef}
            style={{ background: "#0a0a0a", position: "relative", height: "52vh", touchAction: "none" }}
          >
            <canvas
              ref={canvasRef}
              style={{ display: "block", width: "100%", height: "100%", cursor: "crosshair" }}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerLeave={onPointerUp}
            />

            {/* hint overlay — only when grid is empty */}
            {cells === 0 && (
              <div style={{
                position: "absolute", inset: 0, display: "flex",
                flexDirection: "column", alignItems: "center", justifyContent: "center",
                pointerEvents: "none", gap: 12,
              }}>
                <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-white/30">
                  DRAW ON THE CANVAS
                </span>
                <span className="text-[10px] sm:text-xs font-medium tracking-widest uppercase text-white/20">
                  build walls · pour particles · watch them fall
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="w-full min-h-10 border-y-2 flex items-center justify-center"
        style={{
          borderColor: "var(--border-color)",
          backgroundImage: `repeating-linear-gradient(-45deg, var(--cover-dot) 0px, var(--cover-dot) 1px, transparent 1px, transparent 8px)`,
        }}
      >
        <span className="text-[10px] font-bold tracking-[0.15em] uppercase opacity-40" style={{ color: "var(--text-color)" }}>
          {MODE_HINT[mode]}
        </span>
      </div>
    </div>
  );
}