import React, { useState } from "react";
import { Tooltip } from "./Tooltip";
import portfolioData from "../data/portfolioData.json";

interface TechItem {
  name: string;
  icon: string;
  category?: "systems" | "fullstack" | "tools" | string;
  invertDark?: boolean;
}

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "systems", label: "Systems" },
  { id: "fullstack", label: "Web" },
  { id: "tools", label: "Tools" },
];

export const TechStack: React.FC = () => {
  const techStack = portfolioData.techStack as TechItem[];
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems =
    activeCategory === "all"
      ? techStack
      : techStack.filter((item) => item.category === activeCategory);

  return (
    <section id="stack" className="mt-8 sm:mt-10 scroll-mt-24">
      {/* Sleek, Non-Bulky Single Bento Card */}
      <div className="p-4 sm:p-5 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/40 dark:bg-zinc-900/25 backdrop-blur-sm shadow-xs transition-all hover:border-zinc-300 dark:hover:border-zinc-700/80 font-geist-sans">
        {/* Card Header with Inline Minimal Category Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3.5 px-1 pb-3 border-b border-zinc-200/50 dark:border-zinc-800/60">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <h2 className="text-[11px] font-mono uppercase tracking-[0.14em] text-zinc-500 dark:text-zinc-400">
              Tech Stack
            </h2>
            <span className="text-zinc-300 dark:text-zinc-700 hidden sm:inline">·</span>
            <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 hidden sm:inline">
              Systems & Full-Stack Core
            </span>
          </div>

          {/* Minimal Inline Layer Switcher (No Numbers) */}
          <div className="flex items-center gap-1 self-start sm:self-auto">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-2.5 py-1 rounded-md font-mono text-[11px] transition-all cursor-pointer select-none ${
                    isActive
                      ? "bg-zinc-200/80 dark:bg-zinc-800 text-zinc-900 dark:text-white font-medium border border-zinc-300/80 dark:border-zinc-700 shadow-2xs"
                      : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/40"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Compact, Flat Chips Grid (Zero Bulky Nested Boxes) */}
        <div className="flex flex-wrap items-center gap-2">
          {filteredItems.map((item) => (
            <Tooltip key={item.name} content={item.name}>
              <div className="group flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-zinc-200/70 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/50 hover:bg-white dark:hover:bg-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200 cursor-pointer shadow-2xs">
                <img
                  src={item.icon}
                  alt={item.name}
                  width={16}
                  height={16}
                  loading="lazy"
                  className={`w-4 h-4 object-contain transition-all duration-200 grayscale contrast-[1.05] group-hover:grayscale-0 group-hover:scale-110 ${
                    item.invertDark ? "dark:invert" : ""
                  }`}
                />
                <span className="text-[12px] font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-black dark:group-hover:text-white transition-colors">
                  {item.name}
                </span>
              </div>
            </Tooltip>
          ))}
        </div>
      </div>
    </section>
  );
};
