import { sourceStyles } from "./certificatesData";

const categoryBadgeMap = {
  "Internships": "Internship",
  "Development Tracks": "Track",
  "Competitive Programming": "Contest",
  "Technical Courses": "Course",
  "AI & Emerging Tech": "AI/ML",
};

const CertificateCard = ({ cert }) => {
  const style = sourceStyles[cert.source] || { color: "#22D3EE" };
  return (
    <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-800/40 flex flex-col h-full transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-cyan-500/10 hover:border-slate-700">
      <div className="h-32 sm:h-36 md:h-40 bg-gradient-to-br from-slate-800 to-slate-900 border-b border-slate-800 relative flex items-center justify-center shrink-0">
        <img
        src={cert.image}
        alt={cert.title}
        className="w-full h-full object-cover absolute inset-0"
        onError={(e) => { e.target.style.display = "none"; }}
      />
        <span className="absolute top-2 right-2 bg-slate-900/85 border border-cyan-400 text-cyan-400 lg:text-[10px] text-[8px] px-2 py-0.5 rounded-full z-10">
          {categoryBadgeMap[cert.category] || cert.category}
        </span>
      </div>

      <div className="p-3 flex flex-col flex-1">
        <p className="text-white font-bold lg:text-lg text-xs mb-2 leading-snug">{cert.title}</p>
        <div className="flex items-center justify-between border-t border-slate-800 pt-2.5 mt-auto">
          <a
            href={cert.url}
            target="_blank"
            rel="noreferrer"
            className="text-white lg:text-[13px] text-[10px] flex items-center gap-2 hover:text-cyan-300 transition"
          >
            <i className="fa-solid fa-arrow-up-right-from-square text-cyan-400" />
            View
          </a>
          <span
            className="flex items-center gap-1 lg:text-[12px] text-[9px]"
            style={{ color: style.color }}
          >
            <i className={sourceStyles[cert.source].icon} style={{ fontSize: "11px" }} />
            {cert.source}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;