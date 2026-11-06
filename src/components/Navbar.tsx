import React, { useState, useEffect } from "react";
import { NavIsometricMark } from "./NavIsometricMark";
import { Tooltip } from "./Tooltip";
import { ResumeModal } from "./ResumeModal";

interface NavItem {
  id: string;
  label: string;
}

// Exactly 3 clean core navigation menus
const NAV_ITEMS: NavItem[] = [
  { id: "hero", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const Navbar: React.FC = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof document !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored === "light") return false;
      return document.documentElement.classList.contains("dark");
    }
    return true;
  });
  const [activeId, setActiveId] = useState("hero");
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY < 180) {
        setActiveId("hero");
        return;
      }

      const scrollPos = scrollY + 280;
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i];
        if (item.id === "hero") continue;
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveId(item.id);
          return;
        }
      }
      setActiveId("hero");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const isCurrentlyDark = document.documentElement.classList.contains("dark");
    const nextDark = !isCurrentlyDark;

    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    setIsDark(nextDark);
  };

  const scrollTo = (id: string) => {
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav aria-label="Main Navigation" className="fixed top-0 left-0 right-0 z-50 select-none">
      {/* Top ambient mask gradient for seamless content fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-white/85 dark:bg-[#070709]/85 backdrop-blur-xs [mask-image:linear-gradient(to_bottom,black_75%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,black_75%,transparent)]"
      />

      {/* Nav Content Container — Aligned to Portfolio max-w-3xl */}
      <div className="relative w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Left: Interactive 3D Brandmark + 3 Clean Typography Menus */}
          <div className="flex items-center gap-2.5 sm:gap-6">
            <NavIsometricMark />

            <div className="h-3.5 w-px bg-zinc-200 dark:bg-zinc-800" />

            <div className="flex items-center gap-3 sm:gap-6">
              {NAV_ITEMS.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`relative font-geist-sans text-xs sm:text-sm tracking-tight transition-colors cursor-pointer py-1 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[1.5px] after:bg-current after:transition-all ${
                      isActive
                        ? "text-zinc-950 dark:text-white font-medium after:w-full"
                        : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 after:w-0 hover:after:w-full"
                    }`}
                    aria-label={`Go to ${item.label}`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Resume Button + Theme Toggle */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => setIsResumeOpen(true)}
              className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-medium font-geist-sans border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/60 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-700 transition-all cursor-pointer shadow-2xs"
              aria-label="View Resume / CV"
            >
              <span>Resume</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-zinc-400 dark:text-zinc-500"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </button>

            <Tooltip content={isDark ? "Light mode" : "Dark mode"} side="bottom">
              <button
                onClick={toggleTheme}
                className="p-1.5 sm:p-2 rounded-lg cursor-pointer text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100/60 dark:hover:bg-zinc-800/40 transition-colors group"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="block transform transition-transform duration-250 ease-in-out group-hover:rotate-45"
                  >
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2" />
                    <path d="M12 20v2" />
                    <path d="m4.93 4.93 1.41 1.41" />
                    <path d="m17.66 17.66 1.41 1.41" />
                    <path d="M2 12h2" />
                    <path d="M20 12h2" />
                    <path d="m6.34 17.66-1.41 1.41" />
                    <path d="m19.07 4.93-1.41 1.41" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="block transform transition-transform duration-250 ease-in-out group-hover:-rotate-12"
                  >
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                  </svg>
                )}
              </button>
            </Tooltip>
          </div>
        </div>
      </div>

      {/* Interactive Resume Preview Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </nav>
  );
};
