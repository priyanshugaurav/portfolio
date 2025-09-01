import { useParams, Link } from "react-router-dom";
import { ExternalLink, ArrowLeft, Copy } from "lucide-react";
import blogs from "../data/blogs";
import { useState } from "react";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  const [copiedIdx, setCopiedIdx] = useState(null);

  const handleCopy = async (text, idx) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIdx(idx);
      setTimeout(() => setCopiedIdx(null), 2000); // Reset after 2s
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  if (!blog) return <div className="p-10 text-center">Blog not found</div>;

  return (
    <div className="border-b-2 w-full" style={{ borderColor: "var(--border-color)" }}>
      {/* Header */}
      <div
        className="w-full border-b-2 flex justify-center"
        style={{ borderColor: "var(--border-color)" }}
      >
        <div
          className="w-full mt-4 max-w-[90%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[61.5%] flex items-center justify-between px-4 sm:px-6 md:px-8 py-3 border-x-2"
          style={{ borderColor: "var(--border-color)", color: "var(--text-color)" }}
        >
          <h1 className="text-xl sm:text-2xl font-semibold">{blog.title}</h1>
          {/* {blog.link && (
            <a href={blog.link} target="_blank" rel="noopener noreferrer">
            <ExternalLink size={18} />
            </a>
            )} */}
            <Link to="/blogs" className="flex items-center gap-2 hover:opacity-80">
              <ArrowLeft size={18} /> 
            </Link>
        </div>
      </div>

      {/* Content */}
      <div className="flex justify-center">
        <div
          className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[61.5%] border-x-2 p-6 space-y-6"
          style={{ borderColor: "var(--border-color)" }}
        >
          {/* Cover Image */}
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-64 object-cover rounded-lg"
          />

          {/* Render blocks */}
          {blog.content.map((block, idx) => {
            switch (block.type) {
              case "heading":
                return (
                  <h2
                    key={idx}
                    className="text-2xl font-semibold"
                    style={{ color: "var(--text-color)" }}
                  >
                    • {block.text}
                  </h2>
                );
              case "subheading":
                return (
                  <h3
                    key={idx}
                    className="text-lg font-medium"
                    style={{ color: "var(--text-color)" }}
                  >
                    • {block.text}
                  </h3>
                );
              case "paragraph":
                return (
                  <p
                    key={idx}
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--muted-text-color)" }}
                  >
                    {block.text}
                  </p>
                );
              case "code":
                return (
                  <div key={idx} className="relative group">
                    <pre className="bg-gray-900 text-gray-100 text-sm p-4 rounded-lg overflow-x-auto">
                      <code>{block.code}</code>
                    </pre>
                    <button
                      onClick={() => handleCopy(block.code, idx)}
                      className="absolute top-2 right-2 p-2 rounded bg-gray-800 hover:bg-gray-700"
                      title="Copy code"
                    >
                      <Copy
                        size={16}
                        className={`${
                          copiedIdx === idx ? "text-green-400" : "text-gray-300"
                        }`}
                      />
                    </button>
                    {copiedIdx === idx && (
                      <span className="absolute top-4 right-12 text-xs text-green-400">
                        Copied!
                      </span>
                    )}
                  </div>
                );
              case "image":
                return (
                  <img
                    key={idx}
                    src={block.src}
                    alt={block.alt || "Blog image"}
                    className="w-full rounded-md object-cover"
                  />
                );
              default:
                return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
