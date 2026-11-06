import React from "react";
import portfolioData from "../data/portfolioData.json";

export const QuoteAndVisitor: React.FC = () => {
  const { quote } = portfolioData;

  return (
    <section className="mt-10 sm:mt-12">
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="font-geist relative p-4 sm:p-5 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/40 dark:bg-zinc-900/25 backdrop-blur-sm shadow-xs transition-all hover:border-zinc-300 dark:hover:border-zinc-700/80">
          <div className="relative flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
            {/* Quote block */}
            <div className="flex-1 flex items-start gap-3.5">
              <svg
                className="w-5 h-5 text-zinc-400 dark:text-zinc-500 shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
              </svg>
              <div className="min-w-0 flex-1 font-geist-sans">
                <p className="text-sm sm:text-[15px] text-[#333333] dark:text-[#b2b2b2] leading-[1.65] mb-1.5">
                  {quote.text}
                </p>
                <p className="text-xs sm:text-[13px] text-zinc-500 dark:text-zinc-400 text-right">
                  — {quote.author}
                </p>
              </div>
            </div>

            {/* Separator */}
            <div className="hidden md:block w-px h-12 bg-zinc-200 dark:bg-zinc-800/40 shrink-0" />
            <div className="md:hidden h-px w-full bg-zinc-200 dark:bg-zinc-800/40" />

            {/* Visitor count */}
            <div className="md:shrink-0 font-geist-sans">
              <p className="text-sm sm:text-[15px] text-[#444444] dark:text-[#b2b2b2] text-center md:text-left tabular-nums">
                You are the{" "}
                <span className="font-semibold text-black dark:text-[#e4e4e4] inline-block min-w-[3ch] text-center align-middle">
                  {quote.visitorCount}
                </span>
                <span className="text-zinc-500 dark:text-[#b2b2b2] text-xs align-super ml-0.5">
                  th
                </span>{" "}
                visitor
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
