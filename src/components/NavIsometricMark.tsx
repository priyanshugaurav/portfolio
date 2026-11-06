import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { playMetalClick } from "./metal-click";
import { Tooltip } from "./Tooltip";
import portfolioData from "../data/portfolioData.json";

export const NavIsometricMark: React.FC = () => {
  const ref = useRef<HTMLButtonElement>(null);
  const [isPressed, setIsPressed] = useState(false);
  const { personal } = portfolioData;

  // Mouse tilt tracking
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [14, -14]), {
    stiffness: 400,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-14, 14]), {
    stiffness: 400,
    damping: 25,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  const handleClick = () => {
    setIsPressed(true);
    playMetalClick();
    setTimeout(() => setIsPressed(false), 180);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Tooltip content={personal.name} side="bottom">
      <motion.button
        ref={ref}
        onClick={handleClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          scale: isPressed ? 0.9 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 25 }}
        className="relative px-2.5 py-1.5 rounded-xl flex items-center justify-center cursor-pointer select-none group focus:outline-none transition-all duration-200"
        aria-label={`${personal.name} brandmark (click for sound)`}
      >
        {/* Subtle background glow on hover */}
        <div className="absolute inset-0 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 border border-zinc-200/60 dark:border-zinc-700/60" />

        {/* Interlocking Geometric PG (Priyanshu Gaurav) Monogram */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          fill="currentColor"
          fillRule="evenodd"
          className="relative h-6 w-auto text-zinc-900 dark:text-zinc-100 transition-transform duration-200 group-hover:scale-105"
        >
          <path d="M31.93 0.00L22.70 1.48L14.31 5.55L7.38 11.82L2.36 20.21L0.75 25.24L0.01 31.96L0.00 71.40L0.89 71.85L5.92 70.81L10.93 68.04L13.91 64.68L15.15 60.72L15.99 60.28L20.19 62.53L25.22 64.15L34.45 64.87L40.32 63.94L47.04 61.43L52.07 58.27L58.78 52.67L62.98 50.91L67.18 50.24L72.21 50.93L76.41 52.72L79.76 55.12L90.23 44.54L84.80 40.06L79.76 37.51L74.73 35.87L67.18 35.09L60.46 35.86L52.91 38.62L48.72 41.13L41.16 47.35L36.97 49.10L32.77 49.75L28.58 49.25L25.22 48.16L22.12 46.22L18.08 42.03L15.75 36.99L15.24 32.80L15.61 28.60L17.67 23.57L20.19 20.39L23.54 17.64L27.74 15.79L32.77 15.25L36.97 15.76L41.16 17.51L45.36 21.09L48.13 25.24L49.21 28.60L49.70 32.80L48.43 38.67L48.72 39.75L56.27 35.77L64.84 33.63L64.10 25.24L62.48 20.21L59.90 15.17L55.43 9.64L49.55 4.85L44.52 2.30L38.65 0.58L31.93 0.00Z M51.23 60.28L43.68 64.23L35.29 66.19L35.15 69.72L36.84 78.11L39.11 83.14L41.80 87.34L47.88 93.38L55.43 97.70L61.30 99.42L68.02 100.00L74.73 99.24L79.76 97.65L84.80 95.08L90.67 90.25L95.05 84.82L97.61 79.79L99.22 74.75L99.98 68.04L99.06 60.34L74.73 60.33L60.40 74.75L61.30 75.17L82.28 75.15L82.72 75.59L79.76 79.64L76.41 82.38L72.21 84.20L67.18 84.72L62.98 84.25L58.78 82.45L55.39 79.79L52.70 76.43L51.18 73.07L50.32 68.88L50.31 66.36L51.55 61.33L51.23 60.28Z" />
        </svg>
      </motion.button>
    </Tooltip>
  );
};
