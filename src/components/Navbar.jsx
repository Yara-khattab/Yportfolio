import { useState, useEffect } from "react";

const socialLinks = [
  { icon: "fa-github", href: "https://github.com/Yara-khattab" },
  { icon: "fa-facebook-f", href: "https://www.facebook.com/yara.khattab.261523" },
  { icon: "fa-linkedin-in", href: "https://www.linkedin.com/in/yara-khattab-8a415a33b/" },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => { document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = "";};
  }, [isOpen]);

  return (
    <nav className="bg-slate-900 text-white fixed top-0 w-full z-50 border-b border-slate-800 shadow-xl">
      <div className="flex justify-between items-center px-6 md:px-10 py-4">
        <h1 className="text-2xl font-bold text-cyan-400">YK</h1>
        <button className="md:hidden text-2xl"   onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen} >
          {isOpen ? "✕" : "☰"}
         </button>
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.href} className="hover:text-cyan-400 transition">
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
          <li className="flex gap-4">
            {socialLinks.map((s) => (
            <a key={s.icon}  href={s.href}  target="_blank" rel="noreferrer"
            className="hover:text-cyan-600 transition border border-cyan-400 size-9 flex justify-center items-center rounded-full cursor-pointer">
            <i className={`fa-brands ${s.icon}`} />
            </a>
            ))}
          </li>
        </ul>
      </div>
      {isOpen && ( <div className="fixed inset-0 top-[64px] bg-black/40 md:hidden" onClick={() => setIsOpen(false)}/>)}
      <ul className={`md:hidden fixed top-[64px] left-0 w-full flex flex-col items-center gap-6 py-6 px-4 bg-slate-900 border-t border-slate-800 transition-all duration-300 ${
      isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}>
        {navLinks.map((link) => (
          <li key={link.href} className="hover:text-cyan-400 transition">
            <a href={link.href} onClick={() => setIsOpen(false)}>
              {link.label}
            </a>
          </li>
        ))}
        <li className="flex gap-8">
          {socialLinks.map((s) => (
            <a key={s.icon}  href={s.href} target="_blank" rel="noreferrer" onClick={() => setIsOpen(false)}
            className="hover:text-cyan-600 transition border border-cyan-400 size-9 flex justify-center items-center rounded-full">
            <i className={`fa-brands ${s.icon}`} />
            </a>
          ))}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;