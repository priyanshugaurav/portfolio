import React from "react";
import { Code, FileText, Star } from "lucide-react";

const ProfileHighlight = () => {
  const streak = Array.from({ length: 40 }, () =>
    Math.random() > 0.7
      ? "var(--streak-strong)"
      : Math.random() > 0.4
      ? "var(--streak-medium)"
      : "var(--streak-light)"
  );

  const highlights = [
    // { icon: <Code size={16} />, text: "12 Projects" },
    // { icon: <FileText size={16} />, text: "8 Articles" },
    // { icon: <Star size={16} />, text: "Top 5% GitHub" },
  ];

  return (
    <div className="border-b-2 w-full" style={{ borderColor: "var(--border-color)" }}>
      {/* Content */}
      <div className="w-full flex justify-center border-b-2" style={{ borderColor: "var(--border-color)" }}>
        <div
          className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[61.5%] px-4 sm:px-6 md:px-8 py-6 space-y-6 border-x-2"
          style={{ borderColor: "var(--border-color)" }}
        >
          {/* Row 1 - GitHub mini streak */}
          <div className="flex flex-wrap gap-1">
            {streak.map((color, i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-sm"
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>

          {/* Row 2 - Highlights */}
          <div className="flex flex-col sm:flex-row sm:gap-6 gap-2 text-sm" style={{ color: "var(--text-color)" }}>
            {highlights.map((h, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span style={{ color: "var(--muted-text-color)" }}>{h.icon}</span>
                <span>{h.text}</span>
              </div>
            ))}
          </div>

          {/* Row 3 - Motto */}
          <div className="text-sm italic" style={{ color: "var(--muted-text-color)" }}>
            "Building clean & minimal experiences — one commit at a time."
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div
        className="w-full min-h-10 border-t-2"
        style={{
          borderColor: "var(--border-color)",
          backgroundImage: `repeating-linear-gradient(-45deg, var(--cover-dot) 0px, var(--cover-dot) 1px, transparent 1px, transparent 8px)`,
        }}
      />
    </div>
  );
};

export default ProfileHighlight;
