import { Github, Sun, Moon, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";

const Header = ({ showLogoVideo }) => {
   const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    } else {
      // Check system preference
      return window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
  };

  const [darkMode, setDarkMode] = useState(getInitialTheme);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);
  return (
    <>
      {/* Header Bar */}
      <div
        style={{ borderColor: "var(--border-color)" }}
        className="fixed top-0 left-0 w-full z-50 border-y-2 min-h-13 flex items-center justify-center backdrop-blur-lg bg-[var(--bg-color)]/70"
      >

        
        {/* Desktop Menu */}
<div
  style={{ borderColor: "var(--border-color)" }}
  className="hidden md:flex border-l border-r min-h-13 min-w-[60.8vw] items-center justify-between gap-6 text-[15px] pr-5 ml-[-3px]"
>
  {/* Left side (Logo / Video) */}
  <div className="flex items-center pl-5">
    {showLogoVideo && (
      <video
        muted
        playsInline
        autoPlay
        loop
        className="h-10 w-10 rounded-full overflow-hidden"
      >
        <source src="logo.mp4" type="video/mp4" />
      </video>
    )}
  </div>

  {/* Right side (Links + Buttons) */}
  <div className="flex items-center gap-6">
    <Link to="/portfolio" className="hover:text-blue-500 transition">
      Portfolio
    </Link>
    <Link to="/blogs" className="hover:text-blue-500 transition">
      Blog
    </Link>
    <Link to="/projects" className="hover:text-blue-500 transition">
      Projects
    </Link>
    <Link to="/posts" className="hover:text-blue-500 transition">
      Posts
    </Link>

    <li>
      <button
        style={{
          backgroundColor: "var(--bg-color)",
          border: `1px solid var(--border-color)`,
        }}
        className="p-2 rounded-full hover:opacity-80 transition-colors duration-300"
      >
        <Github
          style={{ color: "var(--text-color)" }}
          className="h-5 w-5"
        />
      </button>
    </li>
    <li>
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          backgroundColor: "var(--bg-color)",
          border: `1px solid var(--border-color)`,
        }}
        className="p-2 rounded-full hover:opacity-80 transition-colors duration-300"
      >
        {darkMode ? (
          <Sun
            style={{ color: "var(--text-color)" }}
            className="h-5 w-5"
          />
        ) : (
          <Moon
            style={{ color: "var(--text-color)" }}
            className="h-5 w-5"
          />
        )}
      </button>
    </li>
  </div>
</div>


        {/* Mobile Header */}
   <div
  style={{ borderColor: "var(--border-color)" }}
  className="flex md:hidden w-full border-x-2 min-h-13 items-center justify-between mx-4 px-4 "
>
  {/* Left side (Logo / Video) */}
  <div className="flex items-center">
    {showLogoVideo && (
      <video
        muted
        playsInline
        autoPlay
        loop
        className="h-10 w-10 rounded-full overflow-hidden"
      >
        <source src="logo.mp4" type="video/mp4" />
      </video>
    )}
  </div>

  {/* Right side (Menu button) */}
  <button onClick={() => setMenuOpen(true)}>
    <Menu style={{ color: "var(--text-color)" }} className="h-7 w-7" />
  </button>
</div>

      </div>

      {/* Popup via Portal */}
      {menuOpen &&
        createPortal(
          <div
            className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-[999]"
            onClick={() => setMenuOpen(false)}
          >
            <div
              className="relative bg-white/20 dark:bg-black/30 backdrop-blur-xl rounded-3xl shadow-2xl p-8 w-80 text-center animate-fadeIn border border-white/30"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 p-2 rounded-full bg-white/30 hover:bg-white/50 transition"
                onClick={() => setMenuOpen(false)}
              >
                <X className="h-6 w-6 text-black dark:text-white" />
              </button>

              {/* Logo / Branding */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white drop-shadow-lg">
                  Navigation
                </h2>
                <p className="text-sm text-gray-200/80">
                  Explore my work & projects
                </p>
              </div>

              {/* Navigation Links */}
              <ul className="flex flex-col gap-4 text-lg font-medium text-white">
                <Link
                  to="/portfolio"
                  onClick={() => setMenuOpen(false)}
                  className="hover:scale-105 hover:text-blue-400 transition"
                >
                  Portfolio
                </Link>
                <Link
                  to="/blogs"
                  onClick={() => setMenuOpen(false)}
                  className="hover:scale-105 hover:text-blue-400 transition"
                >
                  Blog
                </Link>
                <Link
                  to="/projects"
                  onClick={() => setMenuOpen(false)}
                  className="hover:scale-105 hover:text-blue-400 transition"
                >
                  Projects
                </Link>
                <Link
                  to="/posts"
                  onClick={() => setMenuOpen(false)}
                  className="hover:scale-105 hover:text-blue-400 transition"
                >
                  Posts
                </Link>
              </ul>

              {/* Divider */}
              <div className="my-6 border-t border-white/30" />

              {/* Social + Theme Toggle */}
              <div className="flex justify-center gap-4">
                <button
                  style={{
                    backgroundColor: "var(--bg-color)",
                    border: `1px solid var(--border-color)`,
                  }}
                  className="p-3 rounded-full hover:scale-110 transition-transform"
                >
                  <Github
                    style={{ color: "var(--text-color)" }}
                    className="h-5 w-5"
                  />
                </button>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  style={{
                    backgroundColor: "var(--bg-color)",
                    border: `1px solid var(--border-color)`,
                  }}
                  className="p-3 rounded-full hover:scale-110 transition-transform"
                >
                  {darkMode ? (
                    <Sun
                      style={{ color: "var(--text-color)" }}
                      className="h-5 w-5"
                    />
                  ) : (
                    <Moon
                      style={{ color: "var(--text-color)" }}
                      className="h-5 w-5"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}

      {/* Smooth animation */}
      <style>{`
        .animate-fadeIn {
          animation: fadeIn 0.35s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </>
  );
};

export default Header;
