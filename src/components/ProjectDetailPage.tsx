import React, { useEffect } from "react";
import portfolioData from "../data/portfolioData.json";

export type ProjectSlug = "nanojs" | "orbitform" | "make.design" | "wittyr";

interface ProjectDetailPageProps {
  projectSlug: ProjectSlug;
  onBack: () => void;
  onSwitchProject?: (slug: ProjectSlug) => void;
}

interface Highlight {
  title: string;
  desc: string;
}

interface Step {
  num: string;
  title: string;
  desc: string;
}

interface ProjectDetailData {
  title: string;
  tagline: string;
  role: string;
  status: string;
  year: string;
  domain: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  nextSlug: ProjectSlug;
  nextTitle: string;
  stats: { value: string; label: string; detail: string; badge: string }[];
  heading: string;
  problemText: string;
  solutionText: string;
  tags: string[];
  highlights: Highlight[];
  steps: Step[];
  takeaway: string;
  stack: string[];
}

const PROJECT_DATA = portfolioData.caseStudies as unknown as Record<ProjectSlug, ProjectDetailData>;



export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  projectSlug,
  onBack,
  onSwitchProject,
}) => {
  const data = PROJECT_DATA[projectSlug];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onBack();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [projectSlug, onBack]);

  if (!data) return null;

  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-0 pt-18 sm:pt-24 pb-20 font-geist-sans animate-in fade-in duration-200">
      {/* =========================================================================
          TOP NAVIGATION BAR
          ========================================================================= */}
      <div className="flex items-center justify-between gap-3 mb-6 sm:mb-7">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-medium border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/70 dark:bg-zinc-900/40 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-700 transition-all cursor-pointer shadow-2xs group"
          aria-label="Back to Portfolio"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:-translate-x-0.5 transition-transform"
          >
            <path d="M19 12H5" />
            <path d="m12 19-7-7 7-7" />
          </svg>
          <span>Back to Projects</span>
          <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 pl-0.5">(Esc)</span>
        </button>

        {/* Status Pill & Year */}
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 hidden sm:inline-block">
            {data.year}
          </span>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-geist-mono font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>{data.status}</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          HERO CARD
          ========================================================================= */}
      <div className="p-6 sm:p-8 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/30 backdrop-blur-md shadow-xs mb-5">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-3">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono uppercase tracking-[0.12em] bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-700 font-medium">
                {data.role}
              </span>
              <span className="text-zinc-300 dark:text-zinc-700">·</span>
              <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
                Product Showcase
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              {data.title}
            </h1>
          </div>

          {/* Quick Action Links */}
          <div className="flex items-center gap-2.5 shrink-0">
            {data.liveUrl && (
              <a
                href={data.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-white transition-all shadow-xs"
              >
                <span>Live Site</span>
                <span className="text-xs">↗</span>
              </a>
            )}
            {data.githubUrl && (
              <a
                href={data.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium border border-zinc-200 dark:border-zinc-700 bg-white/80 dark:bg-zinc-800/60 text-zinc-800 dark:text-zinc-200 hover:border-zinc-300 dark:hover:border-zinc-600 transition-all"
              >
                <span>Source</span>
                <span className="text-xs">↗</span>
              </a>
            )}
          </div>
        </div>

        <p className="text-base sm:text-[16px] text-zinc-700 dark:text-zinc-300 leading-relaxed font-[450] max-w-2xl mb-5">
          {data.tagline}
        </p>

        {/* Tech Stack Pills inside Hero */}
        <div className="pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60 flex flex-wrap gap-2">
          {data.stack.map((tech, i) => (
            <span
              key={i}
              className="px-2.5 py-1 rounded-md bg-white/80 dark:bg-zinc-800/60 border border-zinc-200/70 dark:border-zinc-700/70 text-zinc-700 dark:text-zinc-300 text-xs font-mono hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* =========================================================================
          3-COLUMN STATS
          ========================================================================= */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-5">
        {data.stats.map((stat, i) => (
          <div
            key={i}
            className="group p-5 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/30 backdrop-blur-md flex flex-col justify-between hover:border-zinc-300 dark:hover:border-zinc-700 transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                {stat.label}
              </span>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-zinc-200/60 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 font-medium">
                {stat.badge}
              </span>
            </div>
            <div>
              <div className="text-2xl sm:text-[28px] font-bold font-mono tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors leading-none">
                {stat.value}
              </div>
              <div className="text-xs sm:text-[13px] text-zinc-500 dark:text-zinc-400 mt-2.5 font-[450] leading-snug">
                {stat.detail}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* =========================================================================
          APP PREVIEW WINDOW (BLACK & WHITE WITH HOVER REVEAL)
          ========================================================================= */}
      <div className="group rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/30 overflow-hidden shadow-xs mb-10 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all">
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-zinc-200/70 dark:border-zinc-800/70 bg-zinc-100/70 dark:bg-zinc-900/60">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/70 dark:bg-zinc-950/60 border border-zinc-200/60 dark:border-zinc-800/60 text-xs font-mono text-zinc-500 dark:text-zinc-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-zinc-500 dark:text-zinc-400 group-hover:text-emerald-500 transition-colors"
            >
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span>https://{data.domain}</span>
          </div>

          <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 hidden sm:inline-block">
            UI Preview
          </span>
        </div>

        <div className="relative aspect-[16/9] overflow-hidden bg-zinc-100 dark:bg-zinc-950/80 p-2 sm:p-3">
          <div className="w-full h-full rounded-xl overflow-hidden border border-zinc-200/60 dark:border-zinc-800/80 shadow-md">
            <img
              src={data.image}
              alt={data.title}
              width={1280}
              height={720}
              className="w-full h-full object-cover object-top transition-all duration-500 ease-out grayscale contrast-[1.03] group-hover:grayscale-0 group-hover:contrast-100 hover:grayscale-0 hover:contrast-100"
            />
          </div>
        </div>
      </div>

      {/* =========================================================================
          CLEAN EDITORIAL DEEP DIVE
          ========================================================================= */}
      <div className="space-y-12 sm:space-y-14">
        {/* SECTION 1: OVERVIEW & KEY CAPABILITIES (2-COLUMN SPLIT) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pt-2">
          {/* Left Column: The Problem & Solution Story */}
          <div className="md:col-span-7 space-y-4">
            <div className="text-xs font-mono uppercase tracking-[0.16em] text-zinc-400 dark:text-zinc-500 font-semibold">
              The Problem &amp; Solution
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-snug">
              {data.heading}
            </h2>
            <p className="text-sm sm:text-[15px] leading-relaxed text-zinc-700 dark:text-zinc-300 font-[450]">
              {data.problemText}
            </p>
            <p className="text-sm sm:text-[15px] leading-relaxed text-zinc-700 dark:text-zinc-300 font-[450]">
              {data.solutionText}
            </p>

            {/* Clean feature tags */}
            <div className="pt-2 flex flex-wrap gap-2">
              {data.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-md text-xs font-mono bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200/70 dark:border-zinc-700/70 hover:border-zinc-400 dark:hover:border-zinc-500 hover:text-black dark:hover:text-white transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Key Capabilities */}
          <div className="md:col-span-5 space-y-5 md:pl-8 md:border-l md:border-zinc-200/60 md:dark:border-zinc-800/60">
            <div className="text-xs font-mono uppercase tracking-[0.16em] text-zinc-400 dark:text-zinc-500 font-semibold">
              Key Capabilities
            </div>
            <div className="space-y-5">
              {data.highlights.map((item, i) => (
                <div key={i} className="group space-y-1.5">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 group-hover:text-amber-500 font-bold transition-colors">
                      0{i + 1}
                    </span>
                    <span className="text-sm sm:text-[15px] font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white transition-colors">
                      {item.title}
                    </span>
                  </div>
                  <p className="text-xs sm:text-[13.5px] text-zinc-600 dark:text-zinc-400 leading-relaxed font-[450] pl-6">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 2: WORKFLOW / 3-STEP PIPELINE */}
        <div className="pt-10 border-t border-zinc-200/60 dark:border-zinc-800/60">
          <div className="flex items-center justify-between mb-6">
            <div className="text-xs font-mono uppercase tracking-[0.16em] text-zinc-400 dark:text-zinc-500 font-semibold">
              Workflow
            </div>
            <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
              3-Step Experience
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {data.steps.map((s, idx) => (
              <div key={idx} className="group space-y-2">
                <div className="text-xs sm:text-sm font-mono font-bold text-zinc-400 dark:text-zinc-500 group-hover:text-amber-500 transition-colors">
                  {s.num}
                </div>
                <div className="text-sm sm:text-[15px] font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white transition-colors">
                  {s.title}
                </div>
                <p className="text-xs sm:text-[13.5px] text-zinc-600 dark:text-zinc-400 leading-relaxed font-[450]">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 3: REFINED EDITORIAL TAKEAWAY */}
        <div className="pt-10 border-t border-zinc-200/60 dark:border-zinc-800/60">
          <blockquote className="border-l-2 border-zinc-300 dark:border-zinc-700 hover:border-amber-500/80 transition-colors pl-5 py-1 text-sm sm:text-base font-medium text-zinc-800 dark:text-zinc-200 leading-relaxed italic">
            "{data.takeaway}"
          </blockquote>
        </div>

        {/* SECTION 4: NAVIGATION BAR */}
        <div className="pt-8 border-t border-zinc-200/60 dark:border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-600 transition-all cursor-pointer shadow-2xs group"
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
              className="group-hover:-translate-x-0.5 transition-transform"
            >
              <path d="M19 12H5" />
              <path d="m12 19-7-7 7-7" />
            </svg>
            <span>Back to All Projects</span>
          </button>

          {onSwitchProject && (
            <button
              onClick={() => onSwitchProject(data.nextSlug)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-white transition-all cursor-pointer shadow-xs group"
            >
              <span className="text-zinc-400 dark:text-zinc-500">Next Case Study:</span>
              <span className="font-semibold">{data.nextTitle}</span>
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
                className="group-hover:translate-x-0.5 transition-transform"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
