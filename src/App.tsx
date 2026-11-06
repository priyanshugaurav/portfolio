import { useState, useEffect } from "react";
import { BackgroundGrid } from "./components/BackgroundGrid";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { HireabilityMatrix } from "./components/HireabilityMatrix";
import { TechStack } from "./components/TechStack";
import { FeaturedProjects } from "./components/FeaturedProjects";
import { Experience } from "./components/Experience";
import { ContactSection } from "./components/ContactSection";
import { CommitSnakeGame } from "./components/CommitSnakeGame";
import { QuoteAndVisitor } from "./components/QuoteAndVisitor";
import { Footer } from "./components/Footer";
import { ProjectDetailPage, type ProjectSlug } from "./components/ProjectDetailPage";

export default function App() {
  const [activeProject, setActiveProject] = useState<ProjectSlug | null>(null);

  // Sync with URL hash
  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash === "nanojs" || hash === "orbitform" || hash === "make.design" || hash === "wittyr") {
        setActiveProject(hash as ProjectSlug);
      } else if (hash === "" || hash === "hero" || hash === "projects" || hash === "contact" || hash === "stack") {
        setActiveProject(null);
      }
    };

    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  const handleSelectProject = (slug: ProjectSlug) => {
    window.location.hash = slug;
    setActiveProject(slug);
  };

  const handleBackToPortfolio = () => {
    window.location.hash = "";
    setActiveProject(null);
    setTimeout(() => {
      const el = document.getElementById("projects");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <div className="relative min-h-screen bg-white dark:bg-[#070709] text-[#111111] dark:text-[#ededed] transition-colors duration-200 noise-overlay">
      {/* Dot Grid Background */}
      <BackgroundGrid />

      {/* Fixed Sticky Header with mask gradient and theme switch */}
      <Navbar />

      {/* Main Content Area */}
      <main className="relative z-10 pb-12">
        {activeProject ? (
          <ProjectDetailPage
            projectSlug={activeProject}
            onBack={handleBackToPortfolio}
            onSwitchProject={handleSelectProject}
          />
        ) : (
          <>
            <Hero />

            <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-0">
              <TechStack />
              <HireabilityMatrix />
              <FeaturedProjects onSelectProject={handleSelectProject} />
            </div>

            <Experience />
            <ContactSection />
            <CommitSnakeGame />
            <QuoteAndVisitor />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
