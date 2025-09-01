import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import blogs from "../data/blogs";

const Blogs = () => {
  return (
    <div className="border-b-2" style={{ borderColor: "var(--border-color)" }}>
      {/* Header */}
      <div
        className="w-full border-b-2 flex justify-center"
        style={{ borderColor: "var(--border-color)" }}
      >
        <div
          className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[61.5%] text-2xl sm:text-3xl font-medium flex items-center px-4 sm:px-6 md:px-8 py-2 border-x-2"
          style={{ borderColor: "var(--border-color)", color: "var(--text-color)" }}
        >
          Blog
        </div>
      </div>

      {/* Blog Rows */}
      <div className="w-full flex justify-center" style={{ backgroundColor: "var(--bg-color)" }}>
        <div
          className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[61.5%] border-x-2"
          style={{ borderColor: "var(--border-color)" }}
        >
          {Array.from({ length: Math.ceil(blogs.length / 2) }, (_, rowIdx) => {
            const rowBlogs = blogs.slice(rowIdx * 2, rowIdx * 2 + 2);
            return (
              <div key={rowIdx}>
                <div
                  className="grid grid-cols-1 md:grid-cols-2 divide-x"
                  style={{ borderColor: "var(--border-color)" }}
                >
                  {rowBlogs.map((blog, idx) => (
                    <React.Fragment key={blog.id}>
                      <Link
                        to={`/blogs/${blog.id}`}
                        className="group flex flex-col border-b-2"
                        style={{ borderColor: "var(--border-color)" }}
                      >
                        <div
                          className="overflow-hidden border-b"
                          style={{ borderColor: "var(--border-color)" }}
                        >
                          <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-40 sm:h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-4 sm:p-5 flex flex-col gap-2">
                          <h3
                            className="text-lg sm:text-xl font-semibold flex items-center gap-2"
                            style={{ color: "var(--text-color)" }}
                          >
                            {blog.title}
                          </h3>
                          <p className="text-sm" style={{ color: "var(--muted-text-color)" }}>
                            {blog.description}
                          </p>
                        </div>
                      </Link>

                      {idx === 0 && rowBlogs.length === 2 && (
                        <div
                          className="w-full min-h-[20px] block md:hidden"
                          style={{
                            borderColor: "var(--border-color)",
                            backgroundImage: `repeating-linear-gradient(-45deg, var(--cover-dot) 0px, var(--cover-dot) 1px, transparent 1px, transparent 8px)`,
                          }}
                        ></div>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* Divider after each row except last */}
                {rowIdx < Math.ceil(blogs.length / 2) - 1 && (
                  <div
                    className="w-full min-h-10 border-t-2"
                    style={{
                      borderColor: "var(--border-color)",
                      backgroundImage: `repeating-linear-gradient(-45deg, var(--cover-dot) 0px, var(--cover-dot) 1px, transparent 1px, transparent 8px)`,
                    }}
                  ></div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Pattern Divider Bottom */}
      <div
        className="w-full min-h-10 border-t-2"
        style={{
          borderColor: "var(--border-color)",
          backgroundImage: `repeating-linear-gradient(-45deg, var(--cover-dot) 0px, var(--cover-dot) 1px, transparent 1px, transparent 8px)`,
        }}
      ></div>
    </div>
  );
};

export default Blogs;
