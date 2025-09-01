import React, { useState } from "react";

const Stack = () => {
  const categorizedStack = {
    Frontend: [
      "html5",
      "css3",
      "javascript",
      "typescript",
      "react",
      "nextjs",
      "tailwindcss",
    ],
    Backend: ["nodejs"],
    "Databases & Tools": [
      "mongodb",
      "postgresql",
      "mysql",
      "docker",
      "git",
      "github",
    ],
    Languages: ["javascript", "typescript", "python", "cplusplus"],
    "Other Interests": ["ai-ml", "opensource"],
  };

  const categories = Object.keys(categorizedStack);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const getIconUrl = (name) => {
    switch (name) {
      case "express":
        return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg";
      case "restapi":
        return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/api/api-original.svg";
      case "ai-ml":
        return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg";
      case "opensource":
        return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openapi/openapi-original.svg";
      case "github":
        return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg";
      default:
        return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`;
    }
  };

  const getIconClass = (name) => {
    if (name === "express") return "w-9 h-9 invert dark:invert-0";
    if (name === "github") return "w-9 h-9 dark:invert";
    return "w-9 h-9";
  };

  const Tooltip = ({ name }) => (
    <span
      className="absolute -top-8 left-1/2 -translate-x-1/2 px-3 py-1 text-xs rounded-full 
      border bg-[var(--bg-color)] text-[var(--text-color)] border-[var(--border-color)] 
      whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none z-50"
    >
      {name.toUpperCase()}
    </span>
  );

  const IconWithTooltip = ({ name }) => (
    <div className="relative group flex flex-col items-center">
      <Tooltip name={name} />
      <img
        src={getIconUrl(name)}
        alt={`${name} icon`}
        className={getIconClass(name)}
      />
    </div>
  );

  return (
    <div
      className="border-b-2 w-full flex flex-col"
      style={{ borderColor: "var(--border-color)" }}
    >
      {/* Header */}
      <div
        className="w-full border-b-2 flex justify-center"
        style={{ borderColor: "var(--border-color)" }}
      >
        <div
          className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[61.5%] text-2xl sm:text-3xl flex items-center px-4 sm:px-6 md:px-8 py-3 border-x-2"
          style={{
            borderColor: "var(--border-color)",
            color: "var(--text-color)",
          }}
        >
          Tech Stack
        </div>
      </div>

      {/* -------- Desktop View -------- */}
      <div className="hidden sm:block">
        {/* Tabs */}
        <div className="flex justify-center">
          <div className="flex gap-2 flex-wrap min-w-[61.5%] border-x-2 border-b-2 px-8 p-2 py-3 border-[var(--border-color)]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded-full text-sm border transition ${
                  activeCategory === cat
                    ? "bg-[var(--text-color)] text-[var(--bg-color)]"
                    : "border-[var(--border-color)] text-[var(--text-color)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Icons */}
        <div className="flex justify-center">
          <div
            className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[61.5%] border-x px-7 py-10 relative"
            style={{
              borderColor: "var(--border-color)",
              backgroundImage: `radial-gradient(var(--cover-dot) 1px, transparent 0.1px)`,
              backgroundSize: "10px 10px",
            }}
          >
            <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4 place-items-center">
              {categorizedStack[activeCategory].map((name) => (
                <IconWithTooltip key={name} name={name} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* -------- Mobile View -------- */}
      <div className="block sm:hidden">
        <div
          className="w-full max-w-[90%] mx-auto border-x px-6 py-8 space-y-10"
          style={{
            borderColor: "var(--border-color)",
            backgroundImage: `radial-gradient(var(--cover-dot) 1px, transparent 0.1px)`,
            backgroundSize: "10px 10px",
          }}
        >
          {Object.entries(categorizedStack).map(([category, stack]) => (
            <div key={category}>
              <h2
                className="text-lg font-semibold mb-4"
                style={{ color: "var(--text-color)" }}
              >
                {category}
              </h2>
              <div className="grid grid-cols-4 gap-4 place-items-center">
                {stack.map((name) => (
                  <IconWithTooltip key={name} name={name} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Divider */}
      <div
        className="w-full min-h-10 border-y-2"
        style={{
          borderColor: "var(--border-color)",
          backgroundImage: `repeating-linear-gradient(-45deg, var(--cover-dot) 0px, var(--cover-dot) 1px, transparent 1px, transparent 8px)`,
        }}
      />
    </div>
  );
};

export default Stack;
