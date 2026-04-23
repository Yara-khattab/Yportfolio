import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
function App() {
  return (
    <div className="bg-slate-900 min-h-screen flex flex-col items-center  text-white">
      <Navbar />
      <Hero />
      <Skills />
    </div>
  )
}
export default App