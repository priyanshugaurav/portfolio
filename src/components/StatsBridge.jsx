import React from "react";
import { Code, FileText, Star } from "lucide-react";

const ProfileHighlight = () => {
  // Changed to 10 to match the "Last 10 Days" text
  const streak = Array.from({ length: 20 }, () =>
    Math.random() > 1.7
      ? "var(--streak-strong)"
      : Math.random() > 0.5
      ? "var(--streak-medium)"
      : "var(--streak-light)"
  );

  const highlights = [
    // { icon: <Code size={16} />, text: "12 Projects" },
    // { icon: <FileText size={16} />, text: "8 Articles" },
    // { icon: <Star size={16} />, text: "Top 5% GitHub" },
  ];

  return (
    <div 
      className="w-full flex flex-col items-center transition-colors duration-400"
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
      }}
    >
      {/* MAIN COLUMN WRAPPER (The "Bridge") */}
      <div
        className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[61.5%] border-x-2 px-6 sm:px-10 py-8 flex flex-col gap-6 transition-colors duration-400"
        style={{ borderColor: "var(--border-color)" }}
      >
        
        {/* Row 1 - Activity Streak with Text */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
          <div 
            className="text-[11px] sm:text-xs font-bold tracking-widest uppercase opacity-70"
          >
            Last 10 Days
          </div>
          
          <div className="flex gap-1.5">
            {streak.map((color, i) => (
              <div
                key={i}
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-[2px] opacity-90 transition-transform duration-300 hover:scale-125 cursor-crosshair"
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        </div>

        {/* Row 2 - Highlights (Currently commented out in your array) */}
        {highlights.length > 0 && (
          <div className="flex flex-col sm:flex-row sm:gap-6 gap-2 text-sm font-medium">
            {highlights.map((h, idx) => (
              <div key={idx} className="flex items-center gap-2 opacity-80">
                <span className="opacity-70">{h.icon}</span>
                <span>{h.text}</span>
              </div>
            ))}
          </div>
        )}

        {/* Row 3 - Motto */}
        <div className="text-[13px] sm:text-sm font-medium italic opacity-60 tracking-wide mt-2">
          "Building clean & minimal experiences — one commit at a time."
        </div>
      </div>

      {/* Bottom Pattern Divider */}
      <div
        className="w-full min-h-12 border-y-2 transition-colors duration-400"
        style={{
          borderColor: "var(--border-color)",
          backgroundImage: `repeating-linear-gradient(-45deg, var(--cover-dot) 0px, var(--cover-dot) 1px, transparent 1px, transparent 8px)`,
        }}
      />
    </div>
  );
};

export default ProfileHighlight;