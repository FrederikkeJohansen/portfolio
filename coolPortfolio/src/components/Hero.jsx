import "../styles/CustomStyles.css";

function Hero() {

  return (
    <div
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(180deg, #FBF9FE 0%, #CADAFF 40%, #FBF9FE 100%)" }}
    >
      {/* Text content */}
      <div className="flex flex-col items-center text-center px-6 sm:px-12 lg:px-0 gap-4 sm:gap-5 lg:gap-6 max-w-5xl">
        <h1
          className="animate-fade-up text-5xl sm:text-7xl lg:text-9xl font-bold"
          style={{ animationDelay: "0.6s", color: "#1a1a1a" }}
        >
          Hi! I'm Frederikke
        </h1>
        <p
          className="animate-fade-up text-sm sm:text-lg lg:text-2xl font-semibold uppercase tracking-[0.2em] text-slate-700"
          style={{ animationDelay: "1.0s" }}
        >
          <span className="relative inline-block">
            <span className="relative">UX/UI Designer & Software Developer</span>
          </span>
        </p>
        <p
          className="animate-fade-up text-sm sm:text-lg lg:text-xl font-light text-slate-500 max-w-[640px]"
          style={{ animationDelay: "1.4s" }}
        >
          I craft intuitive digital experiences with a strong interest in design, front-end development, and hardware.
        </p>
      </div>
    </div>
  );
}

export default Hero;
