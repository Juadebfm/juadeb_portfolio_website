import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-main_bg overflow-x-hidden text-base text-white">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
