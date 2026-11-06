import React, { useEffect } from "react";
import portfolioData from "../data/portfolioData.json";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { resume } = portfolioData;

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-2xl bg-white dark:bg-[#0c0c0e] text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-800 shadow-2xl transition-all font-geist-sans"
      >
        {/* Sticky Action Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-4 sm:px-7 py-3 sm:py-3.5 bg-white/90 dark:bg-[#0c0c0e]/90 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-geist-mono font-medium text-zinc-600 dark:text-zinc-400">
              {resume.fileName}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/60 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-200 transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 6 2 18 2 18 9" />
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                <rect width="12" height="8" x="6" y="14" />
              </svg>
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
              aria-label="Close Resume"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-4 sm:p-8 md:p-9 space-y-6 sm:space-y-7 printable-area">
          {/* Header Block */}
          <div className="border-b border-zinc-200 dark:border-zinc-800 pb-6">
            <h1 id="resume-title" className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
              {resume.name}
            </h1>
            <p className="text-sm sm:text-base font-medium text-amber-600 dark:text-amber-400 mt-1">
              {resume.title}
            </p>

            <div className="mt-3 flex flex-wrap gap-x-3.5 gap-y-1.5 text-xs text-zinc-500 dark:text-zinc-400 font-geist-mono">
              <span>{resume.location}</span>
              <span>•</span>
              <a href={`mailto:${resume.email}`} className="hover:underline text-zinc-700 dark:text-zinc-300">
                {resume.email}
              </a>
              <span>•</span>
              <a href={resume.github} target="_blank" rel="noopener noreferrer" className="hover:underline text-zinc-700 dark:text-zinc-300">
                {resume.githubDisplay}
              </a>
              <span>•</span>
              <a href={resume.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline text-zinc-700 dark:text-zinc-300">
                {resume.linkedinDisplay}
              </a>
              <span>•</span>
              <a href={resume.twitter} target="_blank" rel="noopener noreferrer" className="hover:underline text-zinc-700 dark:text-zinc-300">
                {resume.twitterDisplay}
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-[0.14em] text-zinc-400 dark:text-zinc-500 mb-2">
              Summary
            </h2>
            <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              {resume.summary}
            </p>
          </div>

          {/* Key Achievements & Highlights */}
          {resume.highlights && resume.highlights.length > 0 && (
            <div>
              <h2 className="text-xs font-mono uppercase tracking-[0.14em] text-zinc-400 dark:text-zinc-500 mb-2.5">
                Key Highlights &amp; Metrics
              </h2>
              <ul className="space-y-1.5 text-xs sm:text-[13px] text-zinc-700 dark:text-zinc-300 leading-relaxed list-disc list-inside">
                {resume.highlights.map((item, idx) => (
                  <li key={idx} className="marker:text-zinc-400 dark:marker:text-zinc-600">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-[0.14em] text-zinc-400 dark:text-zinc-500 mb-4">
              Work Experience
            </h2>

            <div className="space-y-6">
              {resume.experience.map((job, idx) => (
                <div key={idx}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                      {job.role} <span className="text-zinc-400 font-normal">·</span>{" "}
                      {job.url ? (
                        <a href={job.url} target="_blank" rel="noopener noreferrer" className="text-amber-600 dark:text-amber-400 hover:underline">
                          {job.company}
                        </a>
                      ) : (
                        <span>{job.company}</span>
                      )}
                    </h3>
                    <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                      {job.period}
                    </span>
                  </div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                    {job.location}
                  </div>
                  <ul className="mt-2.5 space-y-1.5 text-xs sm:text-[13px] text-zinc-600 dark:text-zinc-300 leading-relaxed list-disc list-inside">
                    {job.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Engineering Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-[0.14em] text-zinc-400 dark:text-zinc-500 mb-3">
              Selected Projects
            </h2>

            <div className="space-y-3.5">
              {resume.projects.map((proj, idx) => (
                <div key={idx} className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                        {proj.name} <span className="text-zinc-400 font-normal">·</span> <span className="font-normal text-zinc-600 dark:text-zinc-300">{proj.tag}</span>
                      </h3>
                      <div className="flex items-center gap-2 text-xs">
                        {proj.liveUrl && (
                          <a
                            href={proj.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-amber-600 dark:text-amber-400 hover:underline font-mono text-[11px]"
                          >
                            Live ↗
                          </a>
                        )}
                        {proj.githubUrl && (
                          <a
                            href={proj.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:underline font-mono text-[11px]"
                          >
                            Code ↗
                          </a>
                        )}
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-zinc-500">{proj.stack}</span>
                  </div>
                  <p className="mt-1.5 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {proj.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills & Stack */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-[0.14em] text-zinc-400 dark:text-zinc-500 mb-3">
              Technical Stack &amp; Skills
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              {Object.entries(resume.skills).map(([category, items], idx) => (
                <div key={idx} className="p-3 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/30">
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100">{category}</span>
                  <p className="text-zinc-600 dark:text-zinc-400 mt-1 font-geist-mono text-[11px] leading-relaxed">
                    {items}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Availability */}
          <div className="border-t border-zinc-200 dark:border-zinc-800 pt-5 space-y-2 text-xs text-zinc-500 dark:text-zinc-400 font-geist-mono">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
              <div>
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">Education:</span>{" "}
                <span className="text-zinc-700 dark:text-zinc-300 font-medium">{resume.education.degree}</span>
                <span className="text-zinc-400 dark:text-zinc-600"> · </span>
                <span>{resume.education.institution}</span>
                {resume.education.grade && (
                  <>
                    <span className="text-zinc-400 dark:text-zinc-600"> · </span>
                    <span className="text-amber-600 dark:text-amber-400">{resume.education.grade}</span>
                  </>
                )}
              </div>
              <span className="text-zinc-400 dark:text-zinc-500 shrink-0">
                {resume.education.period}
              </span>
            </div>

            {resume.education.coursework && (
              <div className="text-[11px] text-zinc-500 dark:text-zinc-400">
                <span className="text-zinc-600 dark:text-zinc-300 font-medium">Core Coursework:</span> {resume.education.coursework}
              </div>
            )}

            <div className="pt-2 flex items-center justify-between">
              <div className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>{resume.availability}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
