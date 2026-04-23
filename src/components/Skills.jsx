const Skills =()=>{
  const skills = [
    { name:"HTML5",percentage: 97 },
    { name:"CSS3",percentage: 94 },
    { name:"Responsive design",percentage: 90 }
  ];
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="bg-black/20 py-12 px-12 md:px-24 rounded-[35px] text-center shadow-2xl border border-slate-800/50 mt-8 md:mt-20">
        <h1 className="text-cyan-500 text-2xl font-medium">Skills</h1>
        <p className="text-lg text-slate-500 mt-1">You Can See My Skills Here</p>
        <div className="flex flex-wrap justify-center items-center gap-12 mt-10 md:mt-14">
          {skills.map((skill,index)=>(
            <div ele={index} className="flex flex-col items-center gap-3">
              <div className="relative size-36 flex items-center justify-center">
                <svg className="size-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="7"className="text-slate-800" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="7" strokeDasharray={`${2 * Math.PI * 40}`}
                   strokeDashoffset={`${2 * Math.PI * 40 * (1 - skill.percentage / 100)}`} strokeLinecap="round" className="text-cyan-500 transition-all duration-1000" />
                </svg>
                 <span className="absolute text-3xl font-medium text-white">
                  {skill.percentage}%
                </span>
              </div>
              <p className="text-slate-200 font-medium text-xl">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;