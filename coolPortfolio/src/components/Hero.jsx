import { FaLongArrowAltDown } from "react-icons/fa";

function scrollToProjects() {
  const projectsGrid = document.getElementById('selected-projects');
  projectsGrid.scrollIntoView({ behavior: 'smooth' });
}


function Hero() {
  return (
    <div className="mx-auto flex flex-col items-center pt-12 md:pt-16 lg:pt-24 mb-8">
      <h1
        className="text-6xl sm:text-6xl md:text-[5rem] lg:text-[7rem]"
        style={{ fontFamily: "MilkyWalky" }}
      >
        Frederikke
      </h1>
      <p className="text-center font-extralight text-xs sm:text-sm md:text-base lg:text-base max-w-lg mx-auto">
        Hi! - I'm a MSc graduate in IT Product Development with interests in
        hardware, front-end development, and UI/UX design. While I'm still early
        in my journey and building my skills, I'm encouraged to learn and
        improve.
      </p>
    </div>
  );
}


export default Hero;
