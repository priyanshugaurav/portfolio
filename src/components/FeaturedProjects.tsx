import React from "react";
import { Tooltip } from "./Tooltip";
import type { ProjectSlug } from "./ProjectDetailPage";
import portfolioData from "../data/portfolioData.json";

interface FeaturedProjectsProps {
  onSelectProject: (slug: ProjectSlug) => void;
}

const TECH_ICON_MAP: Record<string, { icon: string; invertDark?: boolean }> = {
  "Next.js": { icon: "/icons/tech/nextjs2-dark.svg" },
  "React": { icon: "/icons/tech/react.svg" },
  "TypeScript": { icon: "/icons/tech/typescript.svg" },
  "Tailwind CSS": { icon: "/icons/tech/tailwindcss.svg" },
  "Node.js": { icon: "/icons/tech/nodejs.svg" },
  "Express.js": { icon: "/icons/tech/express.png", invertDark: true },
  "MongoDB": { icon: "/icons/tech/mongodb.svg" },
  "WebSockets": { icon: "/icons/tech/nodejs.svg" },
  "C++": { icon: "/icons/tech/cpp.svg" },
  "Linux": { icon: "/icons/tech/linux.svg" },
  "Python": { icon: "/icons/tech/python.svg" },
  "Git": { icon: "/icons/tech/git.svg" },
  "Bun": { icon: "/icons/tech/bun.svg" },
};

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onSelectProject }) => {
  const { featuredProjects, personal } = portfolioData;

  return (
    <section id="projects" className="mt-16 sm:mt-20">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xs text-zinc-500 dark:text-zinc-400 font-geist-sans uppercase tracking-[0.14em]">
          Featured Projects
        </h2>
        <span className="text-[11px] font-geist-mono text-zinc-400 dark:text-zinc-500">
          0{featuredProjects.length} Selected Works
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {featuredProjects.map((proj) => {
          const slug = proj.id as ProjectSlug;
          return (
            <div
              key={proj.id}
              className="group font-geist-sans rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/40 dark:bg-zinc-900/25 backdrop-blur-sm shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700/80 hover:shadow-lg dark:hover:shadow-[0_12px_32px_rgba(0,0,0,0.4)] transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Window Chrome Header */}
              <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-zinc-200/70 dark:border-zinc-800/70 bg-zinc-100/60 dark:bg-zinc-900/60">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onSelectProject(slug)}
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-geist-mono font-medium bg-amber-500/10 dark:bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/25 hover:bg-amber-500/20 transition-colors cursor-pointer"
                    title="View Case Study"
                  >
                    <span>Case Study</span>
                    <span className="text-[9px]">↗</span>
                  </button>

                  {proj.badge && (
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-geist-mono font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      {proj.badge}
                    </span>
                  )}
                </div>
              </div>

              {/* Project Preview */}
              <div
                onClick={() => onSelectProject(slug)}
                className="relative block aspect-[16/10] overflow-hidden bg-zinc-100 dark:bg-zinc-950/50 cursor-pointer"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") onSelectProject(slug);
                }}
                aria-label={`View ${proj.title} case study`}
              >
                <img
                  src={proj.image}
                  alt={`${proj.title} - Project by ${personal.name}`}
                  width={640}
                  height={360}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-all duration-500 ease-out grayscale contrast-[1.03] group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="px-2.5 py-1 rounded-lg bg-zinc-900/90 text-white text-xs font-medium backdrop-blur-sm border border-zinc-700 shadow-md">
                    Read Case Study ↗
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-5.5 flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <button
                      onClick={() => onSelectProject(slug)}
                      className="inline-flex items-center gap-1.5 text-[16px] sm:text-[17px] font-semibold text-zinc-900 dark:text-zinc-100 hover:text-black dark:hover:text-white transition-colors tracking-tight text-left cursor-pointer"
                    >
                      <span>{proj.title}</span>
                    </button>
                    <p className="text-[11px] font-geist-mono text-zinc-500 dark:text-zinc-400 mt-0.5">
                      {proj.subtitle}
                    </p>
                  </div>

                  {proj.liveUrl && (
                    <Tooltip content="Open Live Website">
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg border border-zinc-200/80 dark:border-zinc-800 bg-white/70 dark:bg-zinc-800/40 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-400 dark:hover:border-zinc-600 transition-all shrink-0"
                        aria-label={`View ${proj.title} website`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line x1="2" y1="12" x2="22" y2="12" />
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                      </a>
                    </Tooltip>
                  )}
                </div>

                <p className="text-zinc-600 dark:text-zinc-300 font-[450] text-[13.5px] sm:text-[14px] leading-[1.7] mb-5">
                  {proj.summary}
                </p>

                {/* Tech Dock Footer */}
                <div className="pt-3.5 mt-auto border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between">
                  <div className="flex flex-wrap gap-2.5 items-center">
                    {proj.stack.map((techName) => {
                      const tech = TECH_ICON_MAP[techName];
                      if (!tech) return null;
                      return (
                        <Tooltip key={techName} content={techName}>
                          <img
                            src={tech.icon}
                            alt={techName}
                            className={`w-[18px] h-[18px] sm:w-5 sm:h-5 object-contain grayscale group-hover:grayscale-0 hover:scale-115 transition-all duration-300 ease-out cursor-pointer ${
                              tech.invertDark ? "dark:invert" : ""
                            }`}
                          />
                        </Tooltip>
                      );
                    })}
                  </div>

                  <button
                    onClick={() => onSelectProject(slug)}
                    className="text-[12px] font-medium text-zinc-500 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors inline-flex items-center gap-1 font-geist-sans cursor-pointer"
                  >
                    <span>Case Study</span>
                    <span className="text-[10px]">↗</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
