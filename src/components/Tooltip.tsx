import React from "react";

interface TooltipProps {
  content: string;
  side?: "top" | "left" | "right" | "bottom";
  children: React.ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({ content, side = "top", children }) => {
  const isLeft = side === "left";
  const isBottom = side === "bottom";
  const isRight = side === "right";

  return (
    <div className="relative inline-flex group/tooltip items-center">
      {children}
      <div
        className={`absolute px-3 py-1.5 text-[12px] font-medium font-geist-sans rounded-lg whitespace-nowrap pointer-events-none transition-all duration-150 ease-out z-50 opacity-0 group-hover/tooltip:opacity-100 ${
          isLeft
            ? "right-full top-1/2 -translate-y-1/2 mr-2.5 translate-x-1 group-hover/tooltip:translate-x-0"
            : isBottom
            ? "top-full left-1/2 -translate-x-1/2 mt-2.5 -translate-y-1 group-hover/tooltip:translate-y-0"
            : isRight
            ? "left-full top-1/2 -translate-y-1/2 ml-2.5 -translate-x-1 group-hover/tooltip:translate-x-0"
            : "bottom-full left-1/2 -translate-x-1/2 mb-2.5 translate-y-1 group-hover/tooltip:translate-y-0"
        }`}
        style={{
          backgroundColor: "rgb(24, 24, 27)",
          color: "#f4f4f5",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 8px 24px -2px rgba(0, 0, 0, 0.35)",
        }}
      >
        {content}
        {isLeft ? (
          <div
            className="absolute top-1/2 left-full -translate-y-1/2 -ml-px"
            style={{
              width: 0,
              height: 0,
              borderTop: "5px solid transparent",
              borderBottom: "5px solid transparent",
              borderLeft: "5px solid rgb(24, 24, 27)",
            }}
          />
        ) : isBottom ? (
          <div
            className="absolute bottom-full left-1/2 -translate-x-1/2 -mb-px"
            style={{
              width: 0,
              height: 0,
              borderLeft: "5px solid transparent",
              borderRight: "5px solid transparent",
              borderBottom: "5px solid rgb(24, 24, 27)",
            }}
          />
        ) : (
          <div
            className="absolute top-full left-1/2 -translate-x-1/2 -mt-px"
            style={{
              width: 0,
              height: 0,
              borderLeft: "5px solid transparent",
              borderRight: "5px solid transparent",
              borderTop: "5px solid rgb(24, 24, 27)",
            }}
          />
        )}
      </div>
    </div>
  );
};
