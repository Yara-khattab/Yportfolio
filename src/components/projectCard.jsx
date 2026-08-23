const sourceStyles = {
  "SEF Academy": { color: "#F2A63C", icon: "fa-solid fa-graduation-cap" },
  "College": { color: "#3DBF94", icon: "fa-solid fa-building-columns" },
  "InnovEgypt": { color: "#C084FC", icon: "fa-solid fa-lightbulb" },
  "Personal": { color: "#F472B6", icon: "fa-solid fa-user" },
};
const ProjectCard = ({ project, activeCategory }) => {
  const renderImageContent = () => {
    if (typeof project.image === "string" && project.image.trim().startsWith("<svg")) {
      return (
        <div 
          className="w-full h-full flex items-center justify-center"
          dangerouslySetInnerHTML={{ __html: project.image }}
        />
      );
    }
    return (
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover absolute inset-0"
        onError={(e) => { e.target.style.display = "none"; }}
      />
    );
  };
  return (
  <div className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-800/40 flex flex-col h-full transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-cyan-500/10 hover:border-slate-700">
    <div className="h-32 sm:h-36 md:h-40 lg:h-48 bg-gradient-to-br from-slate-800 to-slate-900 border-b border-slate-800 relative flex items-center justify-center shrink-0">
     {renderImageContent()}
     <span className="absolute top-2.5 right-2.5 bg-slate-900/85 border lg:text-[10px] text-[8px] px-2 py-1 rounded-full flex items-center gap-1 border-cyan-400 text-cyan-400">
  {project.miniProject && activeCategory !== "Mini Projects"
  ? `Mini · ${project.category}`
  : project.category}
</span>
    </div>

    <div className="p-4 flex flex-col flex-1">
      <p className="text-white font-bold lg:text-lg text-sm mb-1.5">{project.title}</p>
      <p className="text-slate-400 lg:text-sm text-xs leading-relaxed mb-2.5">{project.description}</p>

      {project.team && (
        <div className="flex items-center gap-1.5 bg-slate-900 border border-cyan-400/50 rounded-lg px-2.5 py-1.5 mb-3">
          <i className="fa-solid fa-users text-cyan-400 text-xs" />
          <span className="lg:text-[12px] text-[10px] text-white">
            Team — <span className="text-cyan-400">{project.role}</span>
          </span>
        </div>
      )}

      <div className="flex gap-1.5 flex-wrap mb-3">
        {project.tech.map((t) => (
          <span key={t} className="border border-slate-700 text-cyan-400 lg:text-[12px] text-[10px] px-2 py-1 rounded-md">
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-slate-800 pt-3 mt-auto">
        <div className="flex gap-4">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="text-white lg:text-[13px] text-[11px] flex items-center gap-1.5 hover:text-cyan-300 transition"
            >
              <i className={`${link.icon} text-cyan-400`} />
              {link.label}
            </a>
          ))}
        </div>

        {project.source && (
          <span
            className="flex items-center gap-1 text-[9px] lg:text-[12px]"
            style={{ color: sourceStyles[project.source]?.color }}
          >
            <i className={sourceStyles[project.source]?.icon} style={{ fontSize: "11px" }} />
            {project.source}
          </span>
        )}
      </div>
    </div>
  </div>
);
}
export default ProjectCard;