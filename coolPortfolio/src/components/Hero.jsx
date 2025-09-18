function Hero() {
  return (
    <div className="mx-auto h-full flex flex-col items-start pt-12 md:pt-16 lg:pt-24 pl-20">
      <h1
        className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
        style={{ fontFamily: "MilkyWalky" }}
      >
        Frederikke
      </h1>
      <p className="font-extralight text-xs sm:text-sm md:text-base xs:w-6/12 sm:w-3/4 md:w-2/3 lg:w-1/2 mt-4">
        Hi! - I'm a MSc graduate in IT Product Development with interests in
        hardware, front-end development, and UI/UX design. While I'm still early
        in my journey and building my skills, I'm encouraged to learn and
        improve.
      </p>
    </div>
  );
}

export default Hero;
