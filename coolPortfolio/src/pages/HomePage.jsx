import Hero from "../components/Hero";
import ProjectsGrid from "../components/ProjectsGrid";
import Footer from "../components/Footer";
import About from "../components/About";
import Contact from "../components/Contact";

function HomePage() {
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
