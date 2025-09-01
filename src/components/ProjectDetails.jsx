import { useParams, Link } from "react-router-dom";
import { ExternalLink, ArrowLeft, X } from "lucide-react";
import { projects } from "../data/projects";
import { useState } from "react";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(null);

  if (!project) return <div className="p-10 text-center">Project not found</div>;

  return (
    <div className="border-b-2 mb-5 w-full" style={{ borderColor: "var(--border-color)" }}>
      {/* Header */}
      <div
        className="w-full border-b-2 mt-4 flex justify-center"
        style={{ borderColor: "var(--border-color)" }}
      >
        <div
          className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[61.5%] flex items-center justify-between px-4 sm:px-6 md:px-8 py-3 border-x-2"
          style={{
            borderColor: "var(--border-color)",
            color: "var(--text-color)",
          }}
        >
          {/* <Link to="/" className="flex items-center gap-2 hover:opacity-80">
            <ArrowLeft size={18} /> Back
          </Link> */}
          <h1 className="text-xl sm:text-2xl font-semibold">{project.title}</h1>
          {project.link && (
            <a
              href={project.link}
              className="w-10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex justify-center">
        <div
          className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[61.5%] border-x-2 p-6 space-y-6"
          style={{ borderColor: "var(--border-color)" }}
        >
          {/* Main Image */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full object-cover rounded-lg cursor-pointer hover:opacity-90"
            onClick={() => setSelectedImage(project.image)}
          />

          {/* Details */}
          {project.details.map((section, idx) => (
            <div key={idx}>
              <h2
                className="text-lg font-medium mb-2"
                style={{ color: "var(--text-color)" }}
              >
                • {section.heading}
              </h2>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--muted-text-color)" }}
              >
                {section.content}
              </p>
            </div>
          ))}

          {/* Gallery */}
          {project.gallery && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.gallery.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt="gallery"
                  className="w-full h-48 object-cover rounded-md cursor-pointer hover:opacity-90"
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full px-4">
            <button
              className="absolute top-2 right-5 bg-white rounded-full p-1 shadow-md"
              onClick={() => setSelectedImage(null)}
            >
              <X size={20} className="text-black" />
            </button>
            <img
              src={selectedImage}
              alt="enlarged"
              className="w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
