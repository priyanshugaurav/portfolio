import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Tooltip } from "./Tooltip";
import portfolioData from "../data/portfolioData.json";

export const Hero: React.FC = () => {
  const { personal, currentFocus, nowPlaying, social } = portfolioData as any;
  const focus = currentFocus || nowPlaying || {
    label: "Building",
    title: "NanoJS",
    detail: "Lightweight JS runtime & bytecode engine",
    url: "https://github.com/priyanshugrv",
  };
  const roles = personal.roles;

  const [roleIndex, setRoleIndex] = useState(0);
  const [greeting, setGreeting] = useState({ text: "Good day", icon: "•" });
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  const email = personal.email;

  useEffect(() => {
    const updateTimeAndGreeting = () => {
      const now = new Date();
      const hour = now.getHours();

      if (hour >= 5 && hour < 12) setGreeting({ text: "Good morning", icon: "•" });
      else if (hour >= 12 && hour < 17) setGreeting({ text: "Good afternoon", icon: "•" });
      else if (hour >= 17 && hour < 22) setGreeting({ text: "Good evening", icon: "•" });
      else setGreeting({ text: "Late night coding", icon: "•" });

      // Format Time using timezone from JSON
      try {
        const timeString = now.toLocaleTimeString("en-US", {
          timeZone: personal.timezone || "Asia/Kolkata",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        });
        setCurrentTime(timeString);
      } catch {
        setCurrentTime(personal.timezoneLabel || "IST • UTC+5:30");
      }
    };

    updateTimeAndGreeting();
    const clockInterval = setInterval(updateTimeAndGreeting, 60000);

    const roleInterval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);

    return () => {
      clearInterval(roleInterval);
      clearInterval(clockInterval);
    };
  }, [roles.length, personal.timezone, personal.timezoneLabel]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const renderBioWithBadge = (text: string) => {
    const parts = text.split(
      /(\[NanoJS\]\([^\)]+\)|Next\.js|React|Node\.js|TypeScript|NanoJS|CRM and ERP software|C\+\+|assembly)/g
    );

    return parts.map((part, i) => {
      if (part === "NanoJS" || part.startsWith("[NanoJS]")) {
        return (
          <a
            key={i}
            href="https://github.com/priyanshugrv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md font-mono text-[11.5px] font-semibold bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/30 hover:bg-amber-500/20 hover:border-amber-500/50 transition-all cursor-pointer align-baseline select-none shadow-2xs group"
            title="NanoJS · Lightweight JS runtime & bytecode engine"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse shrink-0" />
            <span>NanoJS</span>
            <svg
              className="w-2.5 h-2.5 text-amber-600 dark:text-amber-400 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17 17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </a>
        );
      }

      if (part === "CRM and ERP software") {
        return (
          <span
            key={i}
            className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md font-medium text-[12px] bg-indigo-500/10 dark:bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 border border-indigo-500/25 dark:border-indigo-500/30 align-baseline select-none shadow-2xs"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
            <span>CRM and ERP software</span>
          </span>
        );
      }

      if (
        part === "Next.js" ||
        part === "React" ||
        part === "Node.js" ||
        part === "TypeScript"
      ) {
        return (
          <span
            key={i}
            className="inline-flex items-center px-1.5 py-[1px] rounded-[5px] font-mono text-[11.5px] font-medium bg-zinc-100 dark:bg-zinc-800/90 text-zinc-900 dark:text-zinc-100 border border-zinc-200/90 dark:border-zinc-700/80 align-baseline select-none shadow-2xs hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
          >
            {part}
          </span>
        );
      }

      if (part === "C++") {
        return (
          <span
            key={i}
            className="inline-flex items-center px-1.5 py-[1px] rounded-[5px] font-mono text-[11.5px] font-medium bg-sky-500/10 dark:bg-sky-500/15 text-sky-800 dark:text-sky-300 border border-sky-500/25 dark:border-sky-500/30 align-baseline select-none shadow-2xs"
          >
            C++
          </span>
        );
      }

      if (part === "assembly") {
        return (
          <span
            key={i}
            className="inline-flex items-center px-1.5 py-[1px] rounded-[5px] font-mono text-[11.5px] font-medium bg-purple-500/10 dark:bg-purple-500/15 text-purple-800 dark:text-purple-300 border border-purple-500/25 dark:border-purple-500/30 align-baseline select-none shadow-2xs"
          >
            assembly
          </span>
        );
      }

      return part;
    });
  };

  return (
    <section id="hero" className="pt-20 sm:pt-24 mb-6">
      <div className="w-full max-w-3xl mx-auto px-6 lg:px-0">
        {/* Bento Hero Header Card */}
        <div className="relative p-6 sm:p-7 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/40 dark:bg-zinc-900/25 backdrop-blur-sm shadow-xs transition-all hover:border-zinc-300 dark:hover:border-zinc-700/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            {/* Avatar + Main Details */}
            <div className="flex items-center gap-4">
              <div className="relative shrink-0 group">
                <div className="absolute -inset-0.5 bg-gradient-to-tr from-amber-500/20 to-indigo-500/20 rounded-2xl blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src={personal.avatarUrl}
                  alt={personal.name}
                  width={68}
                  height={68}
                  className="relative w-16 h-16 sm:w-[68px] sm:h-[68px] rounded-2xl object-cover border border-zinc-200 dark:border-zinc-800 shadow-xs transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h1 className="text-2xl sm:text-[28px] font-geist-sans font-semibold tracking-tight text-[#111111] dark:text-[#f2f2f2] leading-tight">
                    {personal.name}
                  </h1>
                </div>

                <div className="flex items-center gap-2 mt-1.5 text-xs sm:text-sm">
                  <span className="font-geist-mono text-zinc-500 dark:text-zinc-400">role:</span>
                  <div className="h-6 flex items-center overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={roles[roleIndex]}
                        initial={{ filter: "blur(4px)", opacity: 0, y: 6 }}
                        animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                        exit={{ filter: "blur(4px)", opacity: 0, y: -6 }}
                        transition={{ duration: 0.3 }}
                        className="font-geist-mono font-medium text-zinc-900 dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 px-2 py-0.5 rounded-md text-[12px] inline-block hover:border-amber-500/40 hover:text-amber-500 transition-colors"
                      >
                        {roles[roleIndex]}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability Badge - Important Live Signal */}
            <div className="self-start sm:self-center">
              <Tooltip content={personal.availabilityTooltip} side="bottom">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 shadow-xs select-none cursor-help hover:border-emerald-500/40 transition-colors">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  {personal.availabilityStatus}
                </div>
              </Tooltip>
            </div>
          </div>

          {/* Editorial Metadata Rail (Clean, No-Truncation) */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-6 mt-6 pt-5 border-t border-zinc-200/60 dark:border-zinc-800/60 text-xs sm:text-[13px]">
            {/* Location & Time */}
            <div className="flex items-center gap-2.5 text-zinc-600 dark:text-zinc-400 min-w-0">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="text-zinc-400 dark:text-zinc-500 shrink-0"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="font-medium text-zinc-900 dark:text-zinc-200 font-geist-sans">
                {personal.location}
              </span>
              <span className="text-zinc-300 dark:text-zinc-700">·</span>
              <span className="font-mono text-zinc-500 dark:text-zinc-400">
                {currentTime || personal.timezoneLabel || "IST • UTC+5:30"}
              </span>
            </div>

            {/* Email with 1-Click Copy */}
            <button
              onClick={handleCopyEmail}
              className="group flex items-center justify-start sm:justify-end gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer text-left shrink-0"
              title="Click to copy email"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors shrink-0"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span className="font-mono text-xs sm:text-[12.5px] text-zinc-800 dark:text-zinc-200 group-hover:text-black dark:group-hover:text-white transition-colors">
                {email}
              </span>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 border border-zinc-200/80 dark:border-zinc-700/80 text-zinc-600 dark:text-zinc-400 group-hover:border-zinc-400 dark:group-hover:border-zinc-500 transition-colors">
                {copied ? "Copied! ✓" : "Copy"}
              </span>
            </button>
          </div>
        </div>

        {/* Bio Section - Clean Editorial Typography */}
        <div className="mt-7 space-y-3">
          {personal.bioParagraphs.map((paragraph: string, idx: number) => {
            const isComment = paragraph.trim().startsWith("//");
            if (isComment) {
              const commentBody = paragraph.trim().replace(/^\/\/\s*/, "");
              return (
                <div
                  key={idx}
                  className="pt-1 flex items-start gap-2 font-mono text-[12.5px] sm:text-[13px] text-emerald-600/90 dark:text-emerald-400/90 leading-relaxed tracking-tight select-text"
                >
                  <span className="font-semibold text-emerald-500/80 dark:text-emerald-400/80 shrink-0 select-none">
                    //
                  </span>
                  <span className="italic">
                    {commentBody}
                  </span>
                </div>
              );
            }

            return (
              <p
                key={idx}
                className="text-[#555555] dark:text-[#b2b2b2] font-geist-sans font-[450] leading-[1.85] text-[14px] sm:text-[15px]"
              >
                {renderBioWithBadge(paragraph)}
              </p>
            );
          })}
        </div>

        {/* Dynamic Activity Pill & Spotify Dock */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 p-3 sm:px-4 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/40 dark:bg-zinc-900/25 backdrop-blur-sm shadow-xs transition-all hover:border-zinc-300 dark:hover:border-zinc-700/80 text-xs font-geist-sans">
          {/* Left: Greeting + Now Playing */}
          <div className="flex items-center gap-3 min-w-0 flex-wrap sm:flex-nowrap">
            {/* Dynamic Greeting Pill - Clean Monochrome */}
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg font-mono text-[11px] font-medium bg-zinc-100 dark:bg-zinc-800/70 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-700/60 select-none shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 animate-pulse" />
              <span>{greeting.text}</span>
            </span>

            {/* Engineering Status / Current Focus Widget */}
            <div className="flex items-center gap-2 min-w-0">
              {/* Terminal Code Prompt Icon with Live Pulse */}
              <div className="flex items-center gap-1 font-mono text-[10.5px] text-emerald-600 dark:text-emerald-400 font-semibold px-1.5 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>&gt;_</span>
              </div>

              <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500 shrink-0">
                {focus.label || "Building"}
              </span>
              <span className="text-zinc-300 dark:text-zinc-700 shrink-0">—</span>

              <a
                href={focus.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group/focus inline-flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors truncate min-w-0"
              >
                <span className="font-medium group-hover/focus:underline underline-offset-[3px] decoration-zinc-400 dark:decoration-zinc-600 shrink-0">
                  {focus.title}
                </span>
                {focus.detail && (
                  <>
                    <span className="text-zinc-400 dark:text-zinc-600 shrink-0">·</span>
                    <span className="text-zinc-500 dark:text-zinc-400 font-normal truncate">
                      {focus.detail}
                    </span>
                  </>
                )}
                <svg
                  className="w-3 h-3 text-zinc-400 opacity-0 -ml-0.5 group-hover/focus:opacity-100 transition-opacity shrink-0 hidden sm:block"
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
            </div>
          </div>

          {/* Right: Clean Social Links Dock */}
          <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-zinc-200/60 dark:border-zinc-800/60">
            <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500 select-none">
              Connect
            </span>
            <div className="flex items-center gap-1 bg-zinc-100/60 dark:bg-zinc-800/40 p-1 rounded-xl border border-zinc-200/60 dark:border-zinc-700/40">
              <Tooltip content="GitHub Profile">
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-1.5 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-white dark:hover:bg-zinc-700/80 transition-all shadow-2xs hover:shadow-xs"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </Tooltip>

              <Tooltip content="X (Twitter)">
                <a
                  href={social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="p-1.5 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-white dark:hover:bg-zinc-700/80 transition-all shadow-2xs hover:shadow-xs"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </Tooltip>

              <Tooltip content="LinkedIn Profile">
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-1.5 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-white dark:hover:bg-zinc-700/80 transition-all shadow-2xs hover:shadow-xs"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </Tooltip>

              <Tooltip content="Send Email">
                <a
                  href={`mailto:${email}`}
                  aria-label="Send Email"
                  className="p-1.5 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-white dark:hover:bg-zinc-700/80 transition-all shadow-2xs hover:shadow-xs"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </a>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
