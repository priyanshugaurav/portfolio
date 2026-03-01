import React, { useRef, useEffect, useState } from "react";
import Matter from "matter-js";

const { Engine, Render, Runner, Bodies, Body, Events, Mouse, MouseConstraint, Composite } = Matter;

const SKILLS = [
  "C++", "Rust", "JavaScript", "TypeScript", "Python",
  "React", "Next.js", "Node.js", "Bun", "Fastify",
];

const getPillSize = (label) => ({
  w: Math.max(68, label.length * 11 + 36),
  h: 32,
});

const Cover = ({ setShowLogoVideo }) => {
  const videoRef = useRef(null);
  const coverRef = useRef(null);
  const canvasRef = useRef(null);
  const physicsContainerRef = useRef(null);
  const engineRef = useRef(null);
  const renderRef = useRef(null);
  const runnerRef = useRef(null);

  // Intersection observer for header logo
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowLogoVideo(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    if (coverRef.current) observer.observe(coverRef.current);
    return () => {
      if (coverRef.current) observer.unobserve(coverRef.current);
    };
  }, [setShowLogoVideo]);

  // Matter.js physics
  useEffect(() => {
    const container = physicsContainerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const W = container.offsetWidth;
    const H = container.offsetHeight;
    canvas.width = W;
    canvas.height = H;

    const engine = Engine.create({ gravity: { y: 1.2 } });
    engineRef.current = engine;
    const world = engine.world;

    const render = Render.create({
      canvas,
      engine,
      options: {
        width: W,
        height: H,
        background: "transparent",
        wireframes: false,
      },
    });
    renderRef.current = render;

    // Walls — invisible
    const wallOpts = {
      isStatic: true,
      render: { fillStyle: "transparent", strokeStyle: "transparent" },
    };
    Composite.add(world, [
      Bodies.rectangle(W / 2, H + 25, W * 3, 50, wallOpts),   // floor
      Bodies.rectangle(-25, H / 2, 50, H * 3, wallOpts),       // left
      Bodies.rectangle(W + 25, H / 2, 50, H * 3, wallOpts),    // right
    ]);

    // Spawn pills from top
    const pills = SKILLS.map((label, i) => {
      const { w, h } = getPillSize(label);
      const cols = 5;
      const col = i % cols;
      const x = (W / (cols + 1)) * (col + 1) + (Math.random() - 0.5) * 50;
      const y = -60 - Math.floor(i / cols) * 55 - Math.random() * 25;

      const body = Bodies.rectangle(x, y, w, h, {
        chamfer: { radius: h / 2 },
        restitution: 0.38,
        friction: 0.12,
        frictionAir: 0.016,
        density: 0.002,
        render: { fillStyle: "transparent", strokeStyle: "transparent", lineWidth: 0 },
        label,
      });
      Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.18);
      return body;
    });

    Composite.add(world, pills);

    // Mouse interaction
    const mouse = Mouse.create(canvas);
    const mc = MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: 0.14, render: { visible: false } },
    });
    Composite.add(world, mc);
    render.mouse = mouse;

    // Click to fling
    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const scaleX = W / rect.width;
      const scaleY = H / rect.height;
      const mx = (e.clientX - rect.left) * scaleX;
      const my = (e.clientY - rect.top) * scaleY;
      pills.forEach((b) => {
        const dx = b.position.x - mx;
        const dy = b.position.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const force = 0.065 * (1 - dist / 120);
          Body.applyForce(b, b.position, {
            x: (dx / dist) * force,
            y: (dy / dist) * force - 0.025,
          });
        }
      });
    };
    canvas.addEventListener("click", handleClick);

    // Custom rendering: draw pills on canvas
    Events.on(render, "afterRender", () => {
      const ctx = canvas.getContext("2d");
      ctx.save();
      ctx.font = "600 11px 'JetBrains Mono', 'Fira Code', ui-monospace, monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      pills.forEach((body) => {
        const { x, y } = body.position;
        const angle = body.angle;
        const { w, h } = getPillSize(body.label);
        const r = h / 2;

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);

        // Pill shape
        ctx.beginPath();
        ctx.moveTo(-w / 2 + r, -h / 2);
        ctx.arcTo(w / 2, -h / 2, w / 2, h / 2, r);
        ctx.arcTo(w / 2, h / 2, -w / 2, h / 2, r);
        ctx.arcTo(-w / 2, h / 2, -w / 2, -h / 2, r);
        ctx.arcTo(-w / 2, -h / 2, w / 2, -h / 2, r);
        ctx.closePath();

        ctx.fillStyle = "rgba(14, 14, 14, 0.82)";
        ctx.fill();
        ctx.strokeStyle = "rgba(255,255,255,0.13)";
        ctx.lineWidth = 1;
        ctx.stroke();

        // Top shimmer
        ctx.beginPath();
        ctx.moveTo(-w / 2 + r + 5, -h / 2 + 1.5);
        ctx.lineTo(w / 2 - r - 5, -h / 2 + 1.5);
        ctx.strokeStyle = "rgba(255,255,255,0.06)";
        ctx.lineWidth = 1;
        ctx.stroke();

        // Label
        ctx.fillStyle = "rgba(190, 190, 190, 0.85)";
        ctx.fillText(body.label, 0, 0.5);

        ctx.restore();
      });

      ctx.restore();
    });

    Render.run(render);
    const runner = Runner.create();
    runnerRef.current = runner;
    Runner.run(runner, engine);

    // Resize handler
    const onResize = () => {
      const newW = container.offsetWidth;
      const newH = container.offsetHeight;
      canvas.width = newW;
      canvas.height = newH;
      render.options.width = newW;
      render.options.height = newH;
      render.canvas.width = newW;
      render.canvas.height = newH;
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      canvas.removeEventListener("click", handleClick);
      Render.stop(render);
      Runner.stop(runner);
      Engine.clear(engine);
      render.textures = {};
    };
  }, []);

  return (
    <div
      ref={coverRef}
      style={{ borderColor: "var(--border-color)" }}
      className="relative border-b-2"
    >
      <div
        style={{
          borderColor: "var(--border-color)",
          backgroundColor: "#161616",
          transition: "background-color 0.4s ease, background-image 0.4s ease",
        }}
        className="relative border-2 border-t-0 border-b-0
          flex items-center justify-center overflow-hidden
          mx-[4%] sm:mx-[10%] md:mx-[15%] lg:mx-[19.5%]
          max-h-[20vh] sm:min-h-[30vh] md:min-h-[40vh] lg:min-h-[34vh]"
      >
        {/* Video */}
        <video ref={videoRef} muted playsInline autoPlay loop className="pt-17">
          <source src="cover.mp4" type="video/mp4" />
        </video>

        {/* Dot overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(var(#202021, #000) 1px, transparent 0.1px)`,
            backgroundSize: "10px 10px",
          }}
        />

        {/* Physics canvas — sits on top, pointer-events enabled */}
        <div
          ref={physicsContainerRef}
          className="absolute inset-0"
          style={{ zIndex: 10 }}
        >
          <canvas
            ref={canvasRef}
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              cursor: "grab",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Cover;