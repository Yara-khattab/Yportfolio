import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
const Skills = () => {
  const skills = [
    { name: "HTML5", percentage: 97 },
    { name: "CSS3", percentage: 94 },
    { name: "JavaScript(ES6+)", percentage: 89 },
    { name: "TypeScript", percentage: 85 },
    { name: "React.js", percentage: 80 },
    { name: "Responsive design", percentage: 85 },
    { name: "Tailwind CSS", percentage: 99 },
    { name: "Bootstrap", percentage: 96 },
    { name: "C++", percentage: 81 },
    { name: "Java", percentage: 90 },
    { name: "Python", percentage: 93 },
    { name: "OOP", percentage: 83 },
    { name: "Data Structures&Algorithms", percentage: 80 },
    { name: "Git & GitHub", percentage: 85 },
    { name: "Problem Solving", percentage: 85 },
    { name: "PHP", percentage: 87 },
  ];
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center bg-slate-900 py-10">
      <div className="bg-black/20 py-8 px-6 md:py-12 md:px-18 rounded-[25px] md:rounded-[35px] text-center shadow-2xl border border-slate-800 w-full max-w-xs md:max-w-4xl md:mt-16">
        <h1 className="text-cyan-500 text-2xl md:text-4xl font-bold mb-2">Skills</h1>
        <p className="text-md md:text-lg text-slate-500">You Can See My Skills Here</p>
        <Swiper modules={[Navigation]} spaceBetween={-40} slidesPerView={1} loop={false} navigation={true} autoplay={false}         
        breakpoints={{640:{slidesPerView:1},728:{slidesPerView:2},1024:{slidesPerView:3},}}className="skills-swiper">
          {skills.map((skill, index) => (
            <SwiperSlide key={index}> 
             <div className="flex flex-col items-center gap-3 pb-5 mt-12">
                <div className="relative size-32 md:size-36 flex items-center justify-center">
                  <svg className="size-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="7" className="text-slate-800" />
                    <circle   cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="7" 
                      strokeDasharray="251.2" strokeDashoffset={251.2 * (1 - skill.percentage / 100)} 
                      strokeLinecap="round" className="text-cyan-500 transition-all duration-1000" />
                  </svg>
                  <span className="absolute text-xl md:text-3xl font-medium text-white">{skill.percentage}%</span>
                </div>
                <p className="text-slate-200 font-medium text-md md:text-xl">{skill.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Skills;
