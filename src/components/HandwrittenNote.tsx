import React from "react";

interface HandwrittenNoteProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const HandwrittenNote: React.FC<HandwrittenNoteProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <div
      className={`pointer-events-none select-none font-handwritten text-[19px] sm:text-[21px] text-zinc-500 dark:text-zinc-400 tracking-wide leading-none ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

interface HandwrittenArrowProps extends React.SVGProps<SVGSVGElement> {
  direction?: "down-right" | "down-left" | "up-right" | "up-left" | "curve-right" | "curve-left";
  className?: string;
}

export const HandwrittenArrow: React.FC<HandwrittenArrowProps> = ({
  direction = "down-right",
  className = "",
  ...props
}) => {
  if (direction === "down-right") {
    // Curves from top-left toward bottom-right
    return (
      <svg
        className={`w-7 h-7 shrink-0 text-zinc-400 dark:text-zinc-500 ${className}`}
        viewBox="0 0 36 36"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        {...props}
      >
        <path d="M6 8c12 2 20 10 22 20" />
        <path d="M22 28l6.5 0.5-1.5-6.5" />
      </svg>
    );
  }

  if (direction === "down-left") {
    // Curves from top-right toward bottom-left
    return (
      <svg
        className={`w-7 h-7 shrink-0 text-zinc-400 dark:text-zinc-500 ${className}`}
        viewBox="0 0 36 36"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        {...props}
      >
        <path d="M30 6c-10 2 -18 11 -20 22" />
        <path d="M16 28l-6.5 0.5 2-6.5" />
      </svg>
    );
  }

  if (direction === "up-right") {
    // Curves upward to right
    return (
      <svg
        className={`w-7 h-7 shrink-0 text-zinc-400 dark:text-zinc-500 ${className}`}
        viewBox="0 0 36 36"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        {...props}
      >
        <path d="M8 30c6-14 16-20 22-22" />
        <path d="M24 6l6.5 2-2 6.5" />
      </svg>
    );
  }

  // default / curve-left
  return (
    <svg
      className={`w-7 h-7 shrink-0 text-zinc-400 dark:text-zinc-500 ${className}`}
      viewBox="0 0 36 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M28 8c-6 10-14 16-20 18" />
      <path d="M14 26l-6.5 0.5 3-6" />
    </svg>
  );
};
