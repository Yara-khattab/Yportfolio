import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects"; 
import Certificates from "./components/Certificates"; 
import Contact from "./components/contact"; 

function App() {
  return (
    <div className="bg-slate-900 flex flex-col gap-5 lg:gap-20 text-white ">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
    </div>
  )
}
export default App