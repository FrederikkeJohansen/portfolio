import { FaLongArrowAltDown } from "react-icons/fa";

function scrollToProjects() {
  const projectsGrid = document.getElementById('selected-projects');
  projectsGrid.scrollIntoView({ behavior: 'smooth' });
}


function Hero() {
  return (
    <div className="mx-auto h-screen flex flex-col items-start pt-12 md:pt-16 lg:pt-24 pl-20 releative">
      <h1
        className="text-6xl sm:text-6xl md:text-[5rem] lg:text-[7rem]"
        style={{ fontFamily: "MilkyWalky" }}
      >
        Frederikke
      </h1>
      <p className="font-extralight text-xs sm:text-sm md:text-base lg:text-base xs:w-6/12 sm:w-3/4 md:w-2/3 lg:w-1/2">
        Hi! - I'm a MSc graduate in IT Product Development with interests in
        hardware, front-end development, and UI/UX design. While I'm still early
        in my journey and building my skills, I'm encouraged to learn and
        improve.
      </p>
      <div className="absolute bottom-2 left-0 right-0 flex justify-center">
        <button
          onClick={scrollToProjects}
        ><FaLongArrowAltDown size={24} className="animate-pulse text-pink-500 hover:text-black-400 transition-colors duration-150" />
        </button>
      </div>
    </div>
  );
}


export default Hero;
