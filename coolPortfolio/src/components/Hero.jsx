import { useState, useEffect, useMemo } from "react";
import "../styles/CustomStyles.css";

function Sparkle({ size, opacity, fading, style }) {
  return (
    <svg
      className={`absolute ${fading ? "animate-sparkle-fade-out" : "animate-twinkle"}`}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"
        fill="#FF007B"
        fillOpacity={opacity}
      />
    </svg>
  );
}

function getSparkleCount() {
  if (typeof window === "undefined") return 10;
  const width = window.innerWidth;
  if (width < 640) return 7;
  if (width < 1024) return 9;
  return 11;
}

function getMaxSparkleSize() {
  if (typeof window === "undefined") return 20;
  const width = window.innerWidth;
  if (width < 640) return 14;
  if (width < 1024) return 18;
  return 20;
}

function generateSparkles(count, maxSize) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    top: `${Math.random() * 80 + 5}%`,
    left: `${Math.random() * 85 + 5}%`,
    size: Math.random() * (maxSize - 8) + 8,
    opacity: Math.random() * 0.5 + 0.3,
    animationDuration: `${Math.random() * 1.5 + 0.8}s`,
    animationDelay: `${Math.random() * 0.5}s`,
  }));
}

function Hero() {
  const [sparklesVisible, setSparklesVisible] = useState(true);
  const [fading, setFading] = useState(false);

  const sparkles = useMemo(
    () => generateSparkles(getSparkleCount(), getMaxSparkleSize()),
    []
  );

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 3500);
    const removeTimer = setTimeout(() => setSparklesVisible(false), 4300);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Sparkles */}
      {sparklesVisible &&
        sparkles.map((s) => (
          <Sparkle
            key={s.id}
            size={s.size}
            opacity={s.opacity}
            fading={fading}
            style={{
              top: s.top,
              left: s.left,
              animationDuration: s.animationDuration,
              animationDelay: s.animationDelay,
            }}
          />
        ))}

      {/* Text content */}
      <div className="flex flex-col items-center text-center px-6 sm:px-12 lg:px-0 gap-3 sm:gap-4 lg:gap-5">
        <h1
          className="animate-fade-up text-3xl sm:text-5xl lg:text-7xl font-bold text-black"
          style={{ animationDelay: "0.6s" }}
        >
          Hi! I'm Frederikke
        </h1>
        <p
          className="animate-fade-up text-sm sm:text-lg lg:text-2xl font-medium tracking-wide text-black"
          style={{ animationDelay: "1.0s" }}
        >
          UX/UI Designer & Software Developer
        </p>
        <p
          className="animate-fade-up text-xs sm:text-base lg:text-lg font-light text-gray-600 max-w-[600px]"
          style={{ animationDelay: "1.4s" }}
        >
          Crafting intuitive digital experiences with a strong interest in
          design, frontend development and hardware
        </p>
      </div>
    </div>
  );
}

export default Hero;
