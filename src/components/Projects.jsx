import { useState, useMemo } from "react";
import ProjectCard from "./projectCard";
import projects from "./projectsData";

const categories = ["Overview", "All", "Full-Stack", "Frontend", "Backend", "Hardware / IoT", "Mini Projects"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("Overview");

  const featuredProjects = useMemo(() =>
    projects
      .filter((p) => p.featured === true)
      .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99)),
  []
);

  const counts = useMemo(() => {
    const map = { All: projects.length, Overview: featuredProjects.length };
    categories.slice(2).forEach((cat) => {
      if (cat === "Mini Projects") {
        map[cat] = projects.filter((p) => p.miniProject === true).length;
      } else {
        map[cat] = projects.filter((p) => p.category === cat && !p.miniProject).length;
      }
    });
    return map;
  }, [featuredProjects]);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "Overview") return featuredProjects;
    if (activeCategory === "All") return projects;
    if (activeCategory === "Mini Projects") {
      return projects.filter((p) => p.miniProject === true);
    }
    return projects.filter((p) => p.category === activeCategory && !p.miniProject);
  }, [activeCategory, featuredProjects]);

  return (
    <section id="projects" className="min-h-screen bg-slate-900 py-5 px-6 md:px-10">
      <div className="w-full max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-6">
          My <span className="text-cyan-400">Projects</span>
        </h1>

        <div className="flex gap-5 border-b border-slate-800 mb-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex items-center gap-1.5 pb-3 lg:text-md text-sm transition-colors ${
                activeCategory === cat
                  ? "text-cyan-400 font-bold border-b-2 border-cyan-400"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {cat}
              {cat !== "Overview" && (
        <span className="lg:text-[14px] text-[12px]">({counts[cat]})</span>
      )}
            </button>
          ))}
        </div>

        {activeCategory === "Overview" && (
          <p className="text-slate-500 lg:text-[14px] text-xs mb-2">
            A quick look at my strongest work — browse by category above for everything else.
          </p>
        )}

        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${activeCategory === "Overview" ? "mt-4" : ""}`}>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} activeCategory={activeCategory} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="text-slate-500 lg:text-lg text-sm text-center py-10">
            {activeCategory === "Overview"
              ? "No featured projects marked yet."
              : "No projects in this category yet."}
          </p>
        )}
      </div>
    </section>
  );
};

export default Projects;