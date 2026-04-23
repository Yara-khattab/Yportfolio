import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 
   return(
    <nav className="bg-slate-900 text-white fixed w-full z-20 border-b border-slate-800 shadow-xl">
      <div className="flex justify-between items-center px-10 py-4">
        <h1 className="text-2xl font-bold text-cyan-400">YK</h1>
        <div className="md:hidden cursor-pointer text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✕" : "☰"}
        </div>
        <ul className="hidden md:flex gap-8 items-center">
          <li className="hover:text-cyan-400 transition"><a href="#about">About</a></li>
          <li className="hover:text-cyan-400 transition"><a href="#skills">Skills</a></li>
          <li className="hover:text-cyan-400 transition"><a href="#projects">Projects</a></li>
          <li className="hover:text-cyan-400 transition"><a href="#certificates">Certificates</a></li>
          <li className="hover:text-cyan-400 transition"><a href="#contact">Contact</a></li>
          <li><ul className="flex gap-4">
            <li className="hover:text-cyan-600 transition border border-cyan-400 size-9 flex justify-center items-center rounded-full"><a href="#"><i className="fa-brands fa-github"></i></a></li>
            <li className="hover:text-cyan-600 transition border border-cyan-400 size-9 flex justify-center items-center rounded-full"><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
            <li className="hover:text-cyan-600 transition border border-cyan-400 size-9 flex justify-center items-center rounded-full"><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
          </ul></li>
        </ul>
      </div>
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-6 py-6 px-4 bg-slate-900 border-t border-slate-800 animate-fadeIn">
          <li className="hover:text-cyan-400 transition ml-auto" onClick={() => setIsOpen(false)}><a href="#about">About</a></li>
          <li className="hover:text-cyan-400 transition ml-auto" onClick={() => setIsOpen(false)}><a href="#skills">Skills</a></li>
          <li className="hover:text-cyan-400 transition ml-auto" onClick={() => setIsOpen(false)}><a href="#projects">Projects</a></li>
          <li className="hover:text-cyan-400 transition ml-auto" onClick={() => setIsOpen(false)}><a href="#certificates">Certificates</a></li>
          <li className="hover:text-cyan-400 transition ml-auto" onClick={() => setIsOpen(false)}><a href="#contact">Contact</a></li>
          <li><ul className="flex gap-8">
            <li className="hover:text-cyan-600 transition border border-cyan-400 size-9 flex justify-center items-center rounded-full" onClick={() => setIsOpen(false)}><a href="#"><i className="fa-brands fa-github"></i></a></li>
            <li className="hover:text-cyan-600 transition border border-cyan-400 size-9 flex justify-center items-center rounded-full" onClick={() => setIsOpen(false)}><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
            <li className="hover:text-cyan-600 transition border border-cyan-400 size-9 flex justify-center items-center rounded-full" onClick={() => setIsOpen(false)}><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
          </ul></li>
        </ul>
      )}
    </nav>
  );
};
export default Navbar;