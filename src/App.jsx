import About from "./components/About";
import Cta from "./components/Cta";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="bg-main_bg overflow-x-hidden text-base text-white">
      <Navbar />
      <Hero />
      <About />
      <Cta />
      <Projects />
    </div>
  );
}

export default App;
