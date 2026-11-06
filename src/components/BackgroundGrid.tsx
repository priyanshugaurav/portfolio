import React from "react";

export const BackgroundGrid: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none">
      {/* Ambient Spotlight Aura */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[550px] opacity-70 dark:opacity-60 blur-[100px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 20%, rgba(245, 158, 11, 0.14), rgba(99, 102, 241, 0.06) 45%, transparent 75%)",
        }}
      />

      <svg className="absolute w-0 h-0">
        <defs>
          {/* Dot grid pattern — light mode */}
          <pattern id="dot-grid-light" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="14" cy="14" r="1" fill="rgba(0,0,0,0.14)" />
          </pattern>
          {/* Dot grid pattern — dark mode */}
          <pattern id="dot-grid-dark" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="14" cy="14" r="1" fill="rgba(255,255,255,0.10)" />
          </pattern>
        </defs>
      </svg>
      {/* Light mode dots */}
      <svg className="absolute inset-0 w-full h-full dark:hidden">
        <rect width="100%" height="100%" fill="url(#dot-grid-light)" />
      </svg>
      {/* Dark mode dots */}
      <svg className="absolute inset-0 w-full h-full hidden dark:block">
        <rect width="100%" height="100%" fill="url(#dot-grid-dark)" />
      </svg>
    </div>
  );
};
