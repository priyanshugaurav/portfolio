import React, { useState } from "react";
import PostList from "./PostList";
import { posts as allPosts } from "../../data/posts";

export default function Posts() {
  const [visible, setVisible] = useState(3);
  const postsToShow = allPosts.slice(0, visible);

  return (
    <div
      className="border-b w-full"
      style={{
        backgroundColor: "var(--bg-color)",
        borderColor: "var(--border-color)",
        color: "var(--text-color)",
      }}
    >
      {/* Header */}
      <div
        className="flex justify-center border-b"
        style={{ borderColor: "var(--border-color)" }}
      >
        <div
          className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[61.5%] border-x text-2xl sm:text-3xl font-semibold flex items-center px-4 sm:px-6 md:px-8 py-3"
          style={{ borderColor: "var(--border-color)" }}
        >
          {/* Posts */}
          Recents
        </div>
      </div>

      {/* Post List */}
      <div className="flex justify-center">
        <div
          className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[61.5%] border-x"
          style={{ borderColor: "var(--border-color)" }}
        >
          <PostList posts={postsToShow} />
        </div>
      </div>

      {/* Show More Button */}
      {visible < allPosts.length && (
        <div className="flex justify-center mt-4 mb-6">
          <button
            onClick={() => setVisible(visible + 2)}
            className="px-5 py-2 rounded transition border text-sm sm:text-base"
            style={{
              backgroundColor: "var(--text-color)",
              color: "var(--bg-color)",
              borderColor: "var(--border-color)",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--border-color)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--text-color)")
            }
          >
            Show More
          </button>
        </div>
      )}

      {/* Divider */}
      <div
        className="w-full min-h-10 border-y-2"
        style={{
          borderColor: "var(--border-color)",
          backgroundImage: `repeating-linear-gradient(-45deg, var(--border-color) 0px, var(--border-color) 1px, transparent 1px, transparent 8px)`,
        }}
      />
    </div>
  );
}
