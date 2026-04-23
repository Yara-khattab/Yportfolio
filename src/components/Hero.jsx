import { useEffect,useState } from "react";
import yaraImg from '../assets/yara.jpg';
const Hero=()=>{
  const statement="I strive to build clean, efficient, and user-friendly digital solutions that make a real impact.";
  const [displayedText,setDisplayedText]=useState("");
  const [isDeleting,setIsDeleting]=useState(false);
  const [index,setIndex]=useState(0);
  useEffect(() => {
    const speed=isDeleting?30:40;
    const timeout=setTimeout(() => {
      if (!isDeleting&&index<statement.length) {
        setDisplayedText((prev)=>prev+statement.charAt(index));
        setIndex(index+1);
      } else if (isDeleting&&index>0) {
        setDisplayedText((prev)=>prev.slice(0,-1));
        setIndex(index-1);
      } else if (!isDeleting && index === statement.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && index === 0) {
        setIsDeleting(false);
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [index, isDeleting]);
  return (
    <section id="about" className="flex flex-col md:flex-row items-center gap-10 lg:gap-28 px-10 py-32 bg-slate-900 min-h-screen text-white">
      <div className="text-center md:text-left max-w-[500px]">
        <h3 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm<span className="text-cyan-400">Yara Khattab</span></h3>
        <p className="text-slate-400 text-md md:text-xl">I am a Computer Science student and a Front-End Developer with a logic-first mindset,
             currently training as a Back-End Developer at SEF Academy. Beyond building interfaces, I leverage my Competitive Programming 
             experience on <a href="" className="text-cyan-500">Codeforces</a>  and <a href="" className="text-cyan-500">LeetCode</a> to
              solve complex problems and build high-performance, scalable web applications. {displayedText}</p>
      </div>
      <div className="">
        <img src={yaraImg} alt="Yarakhattab" className="size-64 md:size-72 md:w-80 md:h-80 rounded-full border-4 border-cyan-400 object-cover shadow-2xl" />
      </div>
    </section>
  );
};
export default Hero;