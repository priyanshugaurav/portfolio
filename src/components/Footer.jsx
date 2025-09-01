import React from "react";

const Footer = () => {
  return (
    <footer
      className="border-t"
      style={{
        backgroundColor: "var(--bg-color)",
        borderColor: "var(--border-color)",
        color: "var(--text-color)",
      }}
    >
      <div className="min-w-screen flex justify-center">
        <div
          className="max-w-[61.5%] min-w-[61.5%] px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs"
          style={{ color: "var(--text-color)" }}
        >
          {/* Left side */}
          <div className="flex items-center gap-2">
            <span style={{ color: "var(--text-color)" }}>Developed by</span>
            <span
              className="font-medium transition-colors"
              style={{ color: "var(--text-color)" }}
            >
              Priyanshu Gaurav
            </span>
          </div>

          {/* Middle */}
          <div className="flex items-center gap-2">
            <span style={{ color: "var(--text-color)" }}>Inspired by</span>
            <span
              className="font-medium transition-colors"
              style={{ color: "var(--text-color)" }}
            >
              chanhdai.com
            </span>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <span style={{ color: "var(--text-color)" }}>
              © {new Date().getFullYear()}
            </span>
            <span
              className="font-medium"
              style={{ color: "var(--text-color)" }}
            >
              All Rights Reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
