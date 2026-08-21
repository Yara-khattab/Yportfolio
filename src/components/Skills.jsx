import { useState, useEffect } from 'react';
import {
  SiTypescript, SiJavascript, SiReact, SiHtml5, SiCss,
  SiTailwindcss, SiBootstrap, SiPhp, SiMysql, SiNodedotjs,
  SiExpress, SiMongodb, SiCplusplus, SiPython,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { TbStack2, TbBinaryTree, TbPuzzle } from 'react-icons/tb';

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: SiReact, level: 80 },
      { name: "TypeScript", icon: SiTypescript, level: 82 },
      { name: "JavaScript (ES6+)", icon: SiJavascript, level: 85 },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 97 },
      { name: "Bootstrap", icon: SiBootstrap, level: 92 },
      { name: "HTML5", icon: SiHtml5, level: 96 },
      { name: "CSS3", icon: SiCss, level: 93 },
     
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, level: 82 },
      { name: "Express.js", icon: SiExpress, level: 86 },
      { name: "MongoDB", icon: SiMongodb, level: 90 },
      { name: "PHP", icon: SiPhp, level: 65 },
      { name: "MySQL", icon: SiMysql, level: 60 }
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "C++", icon: SiCplusplus, level: 80 },
      { name: "Java", icon: FaJava, level: 78 },
      { name: "Python", icon: SiPython, level: 86 },
    ],
  },
  {
    title: "Fundamentals & Logic",
    skills: [
      { name: "OOP (C++, JS)", icon: TbStack2, level: 84 },
      { name: "Data Structures & Algorithms", icon: TbBinaryTree, level: 82 },
      { name: "Problem Solving", icon: TbPuzzle, level: 80 },
    ],
  },
];

const BREAKPOINTS = [
  { minWidth: 1280, items: 6 },
  { minWidth: 1024, items: 5 },
  { minWidth: 768, items: 4 },
  { minWidth: 640, items: 3 },
  { minWidth: 400, items: 2 },
  { minWidth: 0, items: 1 }
];

function useItemsPerPage() {
  const [itemsPerPage, setItemsPerPage] = useState(2);
  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      const found = BREAKPOINTS.find((bp) => w >= bp.minWidth);
      setItemsPerPage(found.items);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);
  return itemsPerPage;
}

const SkillItem = ({ skill }) => {
  const Icon = skill.icon;
  return (
    <div className="flex flex-col items-center justify-center min-w-[120px]">
      <span className="flex items-center justify-center gap-1.5 text-[14px] text-white whitespace-normal mb-1 w-full h-10 text-center">
        <Icon className="text-cyan-400 text-base shrink-0" />
        <span className="text-center leading-tight whitespace-normal">{skill.name}</span></span>
      <div className="h-[5px] bg-slate-800 rounded-full overflow-hidden w-full mx-auto">
      <div className="h-full bg-cyan-400 rounded-full" style={{ width: `${skill.level}%` }}/>
      </div>
    </div>
  );
};

const SkillRow = ({ title, skills }) => {
  const itemsPerPage = useItemsPerPage();
  const [page, setPage] = useState(0);
  const maxPage = Math.max(0, Math.ceil(skills.length / itemsPerPage) - 1);
  useEffect(() => { setPage(0); }, [itemsPerPage]);

  const visibleSkills = skills.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  const canGoLeft = page > 0;
  const canGoRight = page < maxPage;

  return (
    <div className="border border-slate-800 rounded-2xl p-4 md:p-5 shadow-[0_0_12px_rgba(34,211,238,0.05)]">
      <p className="text-slate-400 text-xs font-semibold mb-4">{title}</p>
      <div className="flex items-center gap-2">
        <button onClick={() => setPage((p) => Math.max(0, p - 1))}  disabled={!canGoLeft} className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 transition-colors
          ${canGoLeft ? "border-slate-700 bg-slate-800 text-cyan-400 hover:border-cyan-400 cursor-pointer" : "border-slate-800 bg-slate-900 text-slate-700 cursor-not-allowed"}`}>‹</button>
        <div className="flex flex-1 items-center justify-center gap-6 py-2 overflow-hidden">
          {visibleSkills.map((skill, i) => ( <SkillItem key={i} skill={skill} /> ))}
          {visibleSkills.length < itemsPerPage &&
          Array.from({ length: itemsPerPage - visibleSkills.length }).map((_, i) => (  <div key={`empty-${i}`} />))}
        </div>
        <button onClick={() => setPage((p) => Math.min(maxPage, p + 1))} disabled={!canGoRight} className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 transition-colors 
        ${canGoRight ? "border-cyan-400 bg-slate-800 text-cyan-400 hover:bg-slate-700 cursor-pointer" : "border-slate-800 bg-slate-900 text-slate-700 cursor-not-allowed"}`}>›</button>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen bg-slate-900 py-5 px-6 md:px-10">
      <div className="w-full max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-1">
          MY <span className="text-cyan-400">TOOLKIT</span>
        </h1>
        <p className="text-slate-400 text-sm mb-4">Technologies and tools I work with</p>
        <div className="h-px bg-slate-800 mb-8" />

        <div className="flex flex-col gap-3">
          {skillCategories.map((category, idx) => (
            <SkillRow key={idx} title={category.title} skills={category.skills} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
