import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import ProjectsGrid from "../components/ProjectsGrid";
import Footer from "../components/Footer";
import About from "../components/About";
import Contact from "../components/Contact";

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const id = location.state.scrollTo;
      setTimeout(() => {
        const element = document.getElementById(id);
        if (!element) return;
        const navbarHeight = 64;
        const position = element.offsetTop - navbarHeight;
        window.scrollTo({ top: position, behavior: "smooth" });
      }, 100);
    }
  }, [location.state]);

  return (
    <>
      <Hero />
      <ProjectsGrid />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default HomePage;
