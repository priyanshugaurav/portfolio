import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <div className="border-b-2 w-full" style={{ borderColor: "var(--border-color)" }}>
      {/* Header */}
      <div className="w-full border-b-2 flex justify-center" style={{ borderColor: "var(--border-color)" }}>
        <div
          className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[61.5%] text-2xl sm:text-3xl font-semibold flex items-center px-4 sm:px-6 md:px-8 py-3 border-x-2"
          style={{
            borderColor: "var(--border-color)",
            color: "var(--text-color)",
          }}
        >
          Experiences
        </div>
      </div>

      {/* Projects List */}
      <div className="flex justify-center">
        <div
          className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[61.5%] border-x-2"
          style={{ borderColor: "var(--border-color)" }}
        >
          {projects.map((project, idx) => (
            <Link to={`/projects/${project.id}`}>
            <div key={project.id}>
              <div
                className="flex flex-col md:flex-row border-b cursor-pointer"
                style={{ borderColor: "var(--border-color)" }}
              >
                {/* Image */}
                <Link to={`/projects/${project.id}`} className="w-full md:w-1/3 border-b md:border-b-0 md:border-r" style={{ borderColor: "var(--border-color)" }}>
                  <img src={project.image} alt={project.title} className="w-full h-48 md:h-40 object-cover" />
                </Link>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between p-4">
                  <div className="pb-2 mb-2 border-b" style={{ borderColor: "var(--border-color)" }}>
                    <div className="flex items-center justify-between">
                      
                        <h3 className="text-lg font-medium" style={{ color: "var(--text-color)" }}>
                          {project.title}
                        </h3>
                      
                      {/* {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} className="opacity-60 hover:opacity-100" style={{ color: "var(--text-color)" }} />
                        </a>
                      )} */}
                    </div>
                    <p className="text-sm mt-1" style={{ color: "var(--muted-text-color)" }}>
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((techItem, tIdx) => (
                      <span key={tIdx} className="text-xs rounded-full px-3 py-1" style={{ border: "1px solid var(--border-color)", color: "var(--text-color)" }}>
                        {techItem}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {idx !== projects.length - 1 && (
                <div
                  className="w-full min-h-8 md:min-h-5 border-y-2"
                  style={{
                    borderColor: "var(--border-color)",
                    backgroundImage: `repeating-linear-gradient(-45deg, var(--cover-dot) 0px, var(--cover-dot) 1px, transparent 1px, transparent 8px)`,
                  }}
                />
              )}
            </div>
            </Link>
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

export default Projects;
