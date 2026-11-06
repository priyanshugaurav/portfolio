import React from "react";
import { Tooltip } from "./Tooltip";
import portfolioData from "../data/portfolioData.json";

export const Experience: React.FC = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="mt-16 sm:mt-20">
      <div className="w-full max-w-3xl mx-auto px-6 lg:px-0">
        {/* Section Heading */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <h2 className="text-xs text-zinc-500 dark:text-zinc-400 font-geist-sans uppercase tracking-[0.14em]">
            Experience
          </h2>
          <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
            {experience[experience.length - 1]?.period.split("—")[0].trim()} — Present
          </span>
        </div>

        {/* Cohesive Bento Experience Box */}
        <div className="p-5 sm:p-7 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/40 dark:bg-zinc-900/25 backdrop-blur-sm shadow-xs transition-all hover:border-zinc-300 dark:hover:border-zinc-700/80 font-geist-sans">
          <div className="divide-y divide-zinc-200/60 dark:divide-zinc-800/60">
            {experience.map((job, idx) => (
              <div
                key={job.id || idx}
                className={`${idx === 0 ? "pb-7 sm:pb-8" : idx === experience.length - 1 ? "pt-7 sm:pt-8" : "py-7 sm:py-8"}`}
              >
                <div className="flex items-start gap-3.5">
                  {/* Company Monogram Badge */}
                  <div className="w-8 h-8 rounded-xl bg-zinc-100 dark:bg-zinc-800/90 border border-zinc-200/80 dark:border-zinc-700/80 flex items-center justify-center font-mono text-xs font-semibold text-zinc-900 dark:text-zinc-100 shrink-0 select-none shadow-2xs">
                    {job.monogram || job.company.charAt(0).toUpperCase()}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-4">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-sm sm:text-[15px] font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight">
                          {job.role}
                        </h3>
                        <span className="text-zinc-300 dark:text-zinc-700">·</span>
                        {job.url ? (
                          <a
                            href={job.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:underline underline-offset-[3px] transition-colors inline-flex items-center gap-1"
                          >
                            <span>{job.company}</span>
                            <svg
                              className="w-3 h-3 text-zinc-400"
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
                          </a>
                        ) : (
                          <span className="text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300">
                            {job.company}
                          </span>
                        )}
                      </div>

                      {job.isCurrent ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shrink-0 self-start sm:self-auto">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          {job.period}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200/70 dark:border-zinc-700/60 shrink-0 self-start sm:self-auto">
                          {job.period}
                        </span>
                      )}
                    </div>

                    <div className="mt-0.5 text-xs text-zinc-400 dark:text-zinc-500 font-mono">
                      {job.location}
                    </div>

                    <p className="mt-3 text-zinc-600 dark:text-zinc-300 text-xs sm:text-[13.5px] leading-relaxed">
                      {job.description}
                    </p>

                    {/* Impact Bullets if available */}
                    {job.bullets && job.bullets.length > 0 && (
                      <ul className="mt-2.5 space-y-1.5 text-xs sm:text-[13px] text-zinc-600 dark:text-zinc-300">
                        {job.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2 leading-relaxed">
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-zinc-400 dark:bg-zinc-500 shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Tech Badges with Grayscale to Native Bloom */}
                    {job.techIcons && job.techIcons.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2.5 items-center">
                        {job.techIcons.map((tech, tIdx) => (
                          <Tooltip key={tIdx} content={tech.name}>
                            <img
                              src={tech.icon}
                              alt={tech.name}
                              className={`w-[18px] h-[18px] sm:w-5 sm:h-5 object-contain grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300 ease-out cursor-pointer ${
                                (tech as { invertDark?: boolean }).invertDark ? "dark:invert" : ""
                              }`}
                            />
                          </Tooltip>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
