import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects"; 
import Certificates from "./components/Certificates"; 
function App() {
  return (
    <div className="bg-slate-900 min-h-screen flex flex-col text-white ">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Certificates />
    </div>
  )
}
export default App