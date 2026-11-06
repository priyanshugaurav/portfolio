import React from "react";
import portfolioData from "../data/portfolioData.json";

const getBadgeStyles = (badge: string) => {
  const b = badge.toLowerCase();
  if (b.includes("personal") && b.includes("saas")) {
    return {
      pill: "border-zinc-200/80 dark:border-zinc-700/60 bg-zinc-100/80 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-400 group-hover:border-indigo-500/35 group-hover:bg-indigo-500/10 group-hover:text-indigo-600 dark:group-hover:text-indigo-400",
      dot: "bg-zinc-400 dark:bg-zinc-500 group-hover:bg-indigo-500",
    };
  }
  if (b.includes("freelance")) {
    return {
      pill: "border-zinc-200/80 dark:border-zinc-700/60 bg-zinc-100/80 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-400 group-hover:border-emerald-500/35 group-hover:bg-emerald-500/10 group-hover:text-emerald-600 dark:group-hover:text-emerald-400",
      dot: "bg-zinc-400 dark:bg-zinc-500 group-hover:bg-emerald-500",
    };
  }
  if (b.includes("personal")) {
    return {
      pill: "border-zinc-200/80 dark:border-zinc-700/60 bg-zinc-100/80 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-400 group-hover:border-amber-500/35 group-hover:bg-amber-500/10 group-hover:text-amber-600 dark:group-hover:text-amber-400",
      dot: "bg-zinc-400 dark:bg-zinc-500 group-hover:bg-amber-500",
    };
  }
  if (b.includes("saas")) {
    return {
      pill: "border-zinc-200/80 dark:border-zinc-700/60 bg-zinc-100/80 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-400 group-hover:border-purple-500/35 group-hover:bg-purple-500/10 group-hover:text-purple-600 dark:group-hover:text-purple-400",
      dot: "bg-zinc-400 dark:bg-zinc-500 group-hover:bg-purple-500",
    };
  }
  return {
    pill: "border-zinc-200/80 dark:border-zinc-700/60 bg-zinc-100/80 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-400 group-hover:border-sky-500/35 group-hover:bg-sky-500/10 group-hover:text-sky-600 dark:group-hover:text-sky-400",
    dot: "bg-zinc-400 dark:bg-zinc-500 group-hover:bg-sky-500",
  };
};

export const HireabilityMatrix: React.FC = () => {
  const { shippedLog } = portfolioData;

  return (
    <section id="shipped-log" className="mt-8 sm:mt-10">
      <div className="p-4 sm:p-5 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/40 dark:bg-zinc-900/25 backdrop-blur-sm shadow-xs transition-all hover:border-zinc-300 dark:hover:border-zinc-700/80 font-geist-sans">
        {/* Clean Minimal Header */}
        <div className="flex items-center justify-between gap-3 mb-3 px-1">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-zinc-500 dark:text-zinc-400">
              Recent Shipped Log
            </span>
            <span className="text-zinc-300 dark:text-zinc-700 hidden sm:inline">·</span>
            <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 hidden sm:inline">
              Production Releases
            </span>
          </div>
          <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
            {shippedLog.length} Shipped
          </span>
        </div>

        {/* Clean, Scannable One-Line Rows */}
        <div className="divide-y divide-zinc-200/50 dark:divide-zinc-800/50">
          {shippedLog.map((item, idx) => {
            const badgeStyle = getBadgeStyles(item.badge);
            return (
              <a
                key={idx}
                href={item.href}
                className="group flex items-center justify-between gap-3 py-2.5 px-2 -mx-2 rounded-lg hover:bg-zinc-100/60 dark:hover:bg-zinc-800/50 transition-colors"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="font-mono text-[10.5px] px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200/70 dark:border-zinc-700/60 shrink-0">
                    {item.version}
                  </span>
                  <span className="text-xs sm:text-[13px] font-medium text-zinc-900 dark:text-zinc-100 group-hover:underline underline-offset-[3px] shrink-0">
                    {item.project}
                  </span>
                  <span className="text-zinc-300 dark:text-zinc-700 hidden sm:inline">·</span>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400 truncate hidden sm:inline">
                    {item.description}
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span
                    className={`inline-flex items-center gap-1.5 text-[10.5px] font-mono px-2 py-0.5 rounded-md border ${badgeStyle.pill} transition-colors`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${badgeStyle.dot} shrink-0`} />
                    <span>{item.badge}</span>
                  </span>
                  <svg
                    className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17 17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
