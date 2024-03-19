import React from "react";
import About from "./components/About";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MainCta from "./components/MainCta";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";

function App() {
  // Function to get background color and corresponding text color based on time of day
  const getColors = () => {
    const currentHour = new Date().getHours();

    if (currentHour >= 6 && currentHour < 8) {
      // Orange gradient from 6am to 8am
      return {
        background: "linear-gradient(to right, #0A0A0A, #28231d)",
        color: "#fff",
      };
    } else if (currentHour >= 8 && currentHour < 18) {
      // from 8am to 6pm
      return {
        background: "linear-gradient(to right, #0A0A0A, #040406)",
        color: "#fff",
      };
    } else {
      // Default background color for night time
      return { background: "#0A0A0A", color: "#f2f2f2" };
    }
  };

  const { background, color } = getColors();

  return (
    <div className="overflow-x-hidden text-base" style={{ background, color }}>
      <Navbar />
      <Hero />
      <About />
      <Cta />
      <Projects />
      <Services />
      <MainCta />
      <Footer />
    </div>
  );
}

export default App;
