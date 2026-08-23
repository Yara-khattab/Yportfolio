import { useState, useMemo } from "react";
import CertificateCard from "./certificatesCard";
import certificates from "./certificatesData";

const categories = [
  "Overview",
  "All",
  "Internships",
  "Development Tracks",
  "Competitive Programming",
  "Technical Courses",
  "AI & Emerging Tech",
];

const Certificates = () => {
  const [activeCategory, setActiveCategory] = useState("Overview");

  const featuredCertificates = useMemo(
  () =>
    certificates
      .filter((c) => c.featured === true)
      .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99)),
  []
);

  const counts = useMemo(() => {
    const map = { All: certificates.length };
    categories.slice(2).forEach((cat) => {
      map[cat] = certificates.filter((c) => c.category === cat).length;
    });
    return map;
  }, []);

  const filteredCertificates = useMemo(() => {
    if (activeCategory === "Overview") return featuredCertificates;
    if (activeCategory === "All") return certificates;
    return certificates.filter((c) => c.category === activeCategory);
  }, [activeCategory, featuredCertificates]);

  return (
    <section id="certificates" className="min-h-screen bg-slate-900 py-5 px-6 md:px-10">
      <div className="w-full max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-6">
          My <span className="text-cyan-400">Certificates</span>
        </h1>

        <div className="flex gap-4 border-b border-slate-800 mb-3 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex items-center gap-1.5 pb-3 text-sm lg:text-[15px] transition-colors ${
                activeCategory === cat
                  ? "text-cyan-400 font-bold border-b-2 border-cyan-400"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {cat}
              {cat !== "Overview" && (
                <span className="text-[12px] lg:text-[14px]">({counts[cat]})</span>
              )}
            </button>
          ))}
        </div>

        {activeCategory === "Overview" && (
          <p className="text-slate-500 lg:text-[15px] text-xs">
            A few standout moments from the journey so far
          </p>
        )}

        <div className={`grid grid-cols-2 lg:grid-cols-3 gap-4 ${activeCategory === "Overview" ? "mt-4" : ""}`}>
          {filteredCertificates.map((cert, i) => (
            <CertificateCard key={i} cert={cert} />
          ))}
        </div>

        {filteredCertificates.length === 0 && (
          <p className="text-slate-500 text-sm text-center py-10">
            {activeCategory === "Overview"
              ? "No featured certificates marked yet."
              : "No certificates in this category yet."}
          </p>
        )}
      </div>
    </section>
  );
};

export default Certificates;