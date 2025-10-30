import { FaLongArrowAltDown } from "react-icons/fa";



function Hero() {
  return (
    <div className="mx-auto flex flex-col items-center md:pt-16 lg:pt-24 mb-16">
      <h1
        className="text-6xl sm:text-7xl md:text-[8rem] lg:text-[9rem]"
        style={{ fontFamily: "MilkyWalky" }}
      >
        Frederikke
      </h1>
      <p className="text-center font-extralight text-base sm:text-lg md:text-xl lg:text-xl max-w-2xl mx-auto">
        Hi! - I'm a MSc graduate in IT Product Development with interests in
        hardware, front-end development, and UI/UX design. While I'm still early
        in my journey and building my skills, I'm encouraged to learn and
        improve.
      </p>
    </div>
  );
}


export default Hero;
