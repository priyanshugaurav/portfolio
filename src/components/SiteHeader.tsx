import { RampBrandMark } from "./RampBrandMark"
import { Search } from "lucide-react"
import { playMetalClick } from "./metal-click"

interface SiteHeaderProps {
  theme: "dark" | "light"
  onToggleTheme: () => void
}

export function SiteHeader({ theme, onToggleTheme }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full overflow-x-clip bg-[var(--background)] px-2 transition-colors">
      <div className="screen-line-bottom screen-line-top mx-auto flex h-14 items-center gap-2 border-x border-[var(--line)] pr-2 pl-4 md:max-w-3xl sm:gap-4">
        
        {/* Brand Ramp Logo */}
        <a
          href="#home"
          aria-label="Home"
          className="group flex items-center outline-none"
          onClick={() => playMetalClick()}
        >
          <div className="flex h-6 w-auto items-center justify-center text-foreground transition-transform group-hover:scale-105">
            <RampBrandMark />
          </div>
        </a>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-4 text-sm font-medium tracking-wide sm:flex">
          <a
            href="#components"
            className="text-zinc-500 hover:text-foreground dark:text-zinc-400 transition-colors"
          >
            Components
          </a>
          <a
            href="#blocks"
            className="text-zinc-500 hover:text-foreground dark:text-zinc-400 transition-colors"
          >
            Blocks
          </a>
          <a
            href="#craft"
            className="text-zinc-500 hover:text-foreground dark:text-zinc-400 transition-colors"
          >
            Craft
          </a>
          <a
            href="#blog"
            className="text-zinc-500 hover:text-foreground dark:text-zinc-400 transition-colors"
          >
            Blog
          </a>
          <a
            href="#sponsors"
            className="text-zinc-500 hover:text-foreground dark:text-zinc-400 transition-colors"
          >
            Sponsors
          </a>
        </nav>

        {/* Right Action Icons & Tools */}
        <div className="flex items-center">
          {/* Vertical Separator */}
          <div className="mx-2 hidden h-5 w-px bg-[var(--line)] sm:block" />

          {/* Search Button with ⌘K Badge */}
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-md px-1.5 py-1 text-xs text-zinc-500 hover:text-foreground dark:text-zinc-400 transition-colors"
            title="Search for a command to run (⌘K)"
            onClick={() => playMetalClick()}
          >
            <Search className="size-3.5" />
            <kbd className="hidden items-center gap-0.5 rounded border border-[var(--line)] bg-[var(--muted)] px-1 py-0.5 font-mono text-[10px] sm:inline-flex">
              <span>⌘</span>
              <span>K</span>
            </kbd>
          </button>

          {/* Vertical Separator */}
          <div className="mx-2 h-5 w-px bg-[var(--line)]" />

          {/* GitHub Stars Button */}
          <a
            href="https://github.com/priyanshugrv"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-md px-1.5 py-1 text-xs text-zinc-500 hover:text-foreground dark:text-zinc-400 transition-colors"
            title="GitHub Profile"
          >
            <svg
              className="size-3.5 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 0C5.37 0 0 5.372 0 11.997 0 17.3 3.438 21.795 8.205 23.38c.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.609-4.042-1.609C4.422 17.77 3.633 17.4 3.633 17.4c-1.087-.744.084-.73.084-.73 1.205.085 1.838 1.237 1.838 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.417-1.304.76-1.604-2.665-.3-5.466-1.332-5.466-5.929 0-1.31.465-2.38 1.235-3.219-.135-.303-.54-1.523.105-3.175 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.006 2.04.138 3 .404 2.28-1.551 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.608-2.805 5.623-5.475 5.918.42.36.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.284 0 .315.21.69.825.57C20.565 21.79 24 17.291 24 11.997 24 5.372 18.627 0 12 0" />
            </svg>
            <span className="font-mono text-xs tabular-nums text-foreground">2.4k</span>
          </a>

          {/* Vertical Separator */}
          <div className="mx-2 h-5 w-px bg-[var(--line)]" />

          {/* DarkSide Theme Toggle Icon */}
          <button
            type="button"
            onClick={onToggleTheme}
            className="flex size-7 items-center justify-center rounded-md text-zinc-500 hover:text-foreground dark:text-zinc-400 transition-colors"
            title="Toggle light/dark mode (D)"
            aria-label="Toggle theme"
          >
            <svg
              className={`size-4.5 fill-current transition-transform duration-500 ${
                theme === "dark" ? "rotate-180" : "rotate-0"
              }`}
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <path d="M16 .5C7.4.5.5 7.4.5 16S7.4 31.5 16 31.5 31.5 24.6 31.5 16 24.6.5 16 .5zm0 28.1V3.4C23 3.4 28.6 9 28.6 16S23 28.6 16 28.6z" />
            </svg>
          </button>

        </div>

      </div>
    </header>
  )
}
