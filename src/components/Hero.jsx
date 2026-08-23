import React from 'react';
import yaraImg from '../assets/yara.jpg';
import {SiCodeforces, SiLeetcode} from 'react-icons/si';

const Hero = () => {
  return (
    <section id="about"
    className="w-full max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 bg-slate-900 min-h-screen text-white py-20 md:py-0">
      <div className="text-center md:text-left max-w-[500px]  order-2 md:order-1">
        <h6 className="text-cyan-400 text-lg md:text-xl font-bold tracking-wide mb-3">FULL-STACK DEVELOPER</h6>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 font-heading">Hi, I'm <span className="text-cyan-400">Yara Khattab</span></h3>
        <p className="text-slate-400 text-md md:text-xl leading-relaxed mb-8">
          CS student building end-to-end web apps, from React interfaces to Node.js 
          back-end APIs, with a logic-first mindset from competitive programming.
        </p>
        <div className="flex items-center justify-center md:justify-start gap-3 mb-8">
          <a href="#projects" className="bg-cyan-400 px-5 py-2.5 text-black font-semibold rounded-md text-sm">View work</a>
          <a href="" className="px-5 py-2.5 font-semibold rounded-md border border-slate-700 text-sm">Resume</a>
        </div>
      </div>   <div className="flex flex-col items-center  order-1 md:order-2">
        <img src={yaraImg}  alt="Yara Khattab" className="size-64 md:size-72 rounded-full border-4 border-cyan-400 object-cover shadow-2xl mb-4"/>
        <div className="flex items-center gap-3">
       <a href="https://codeforces.com/profile/Yarakhattab4" target="_blank"  className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400 hover:border-cyan-400 transition-all duration-300">
      <SiCodeforces size={16} /></a>
      <a href="https://leetcode.com/u/Yara-khattab/" target="_blank" className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400 hover:border-cyan-400 transition-all duration-300">
       <SiLeetcode size={16} /></a>
       </div>
      </div>
    </section>
  );
};

export default Hero;