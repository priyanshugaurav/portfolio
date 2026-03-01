import React, { useState } from "react";
import PostList from "./PostList";
import { posts as allPosts } from "../../data/posts";

export default function Posts() {
  const [visible, setVisible] = useState(3);
  const postsToShow = allPosts.slice(0, visible);

  return (
    <div
      className="w-full flex flex-col items-center transition-colors duration-400"
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
      }}
    >
      {/* MAIN COLUMN WRAPPER */}
      <div
        className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[61.5%] border-x-2 flex flex-col"
        style={{ borderColor: "var(--border-color)" }}
      >
        {/* Header - Added justify-between to push the badge to the right */}
        <div
          className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-5 border-b-2 transition-colors duration-400"
          style={{ borderColor: "var(--border-color)" }}
        >
          <div className="text-2xl sm:text-3xl font-bold overflow-hidden">
            Recents
          </div>

          {/* Right-aligned Professional Badge with soft green dot */}
          <div
            className="flex items-center gap-2 px-3 py-1 border-2 text-[10px] sm:text-xs font-bold tracking-widest uppercase opacity-80"
            style={{
              borderColor: "var(--border-color)",
              color: "var(--text-color)",
            }}
          >
            {/* Soft pulsing green dot */}
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: "var(--streak-medium)" }}
            />
            Active Log
          </div>
        </div>

        {/* Post List */}
        <PostList posts={postsToShow} />

        {/* Show More Button */}
        {visible < allPosts.length && (
          <div className="flex justify-center p-8 transition-colors duration-400">
            <button
              onClick={() => setVisible(visible + 3)}
              className="px-8 py-3 border-2 text-[var(--text-color)] text-sm sm:text-base font-bold tracking-widest uppercase transition-all duration-300 hover:bg-[var(--text-color)] hover:text-[var(--bg-color)] active:scale-95"
              style={{
                borderColor: "var(--text-color)",
              }}
            >
              Load More Updates
            </button>
          </div>
        )}
      </div>

      {/* Footer Divider */}
      <div
        className="w-full min-h-12 border-y-2 transition-colors duration-400"
        style={{
          borderColor: "var(--border-color)",
          backgroundImage: `repeating-linear-gradient(-45deg, var(--cover-dot) 0px, var(--cover-dot) 1px, transparent 1px, transparent 8px)`,
        }}
      />
    </div>
  );
}
