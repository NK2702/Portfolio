
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Technologies from "./components/Technologies";
import EducationCertifications from "./components/EducationCertifications";
import Project from "./components/Project";
import Contact from "./components/Contact";


const App = () => {
  return (
    <div className="relative bg-neutral-950 overflow-hidden text-white">
      <div className="absolute inset-0 z-[-2] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <EducationCertifications />
        <Project />
        <Contact />
      </div>
    </div>
  );
};

export default App;
