import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Mousewheel } from "swiper/modules";
import "swiper/css";
import { projects, featuredIds } from "../data/projectData";

function ProjectsGrid() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const swiperRef = useRef(null);
  const navigate = useNavigate();

  function handleProjectClick(project) {
    navigate(`/project/${project.slug}`);
  }

  const featuredProjects = featuredIds.map(id => projects.find(p => p.id === id)).filter(Boolean);
  featuredProjects.push({
    id: 0,
    title: "Coming Soon",
    slug: null,
    thumbnail: null,
    description: "A new project is on its way. Stay tuned.",
  });

  const otherProjects = projects.filter(p => !featuredIds.includes(p.id));

  return (
    <div className="mb-8 px-4 md:px-12">
      <div className="flex flex-row items-center mb-2">
        <h2 id="selected-projects" className="text-sm 2xl:text-base text-slate-700 tracking-[0.2em] uppercase whitespace-nowrap">
          Featured Work
        </h2>
        <div className="border-b border-slate-300 flex-1 mx-8"></div>
        <h2 className="text-sm 2xl:text-base text-slate-700 tracking-[0.2em] uppercase whitespace-nowrap">
          Portfolio
        </h2>
      </div>

      {/* Featured Projects */}
      <div className="flex flex-col gap-12 md:gap-16 mb-4">
        {featuredProjects.map((project) => (
          <div key={project.id} className="flex flex-col gap-3">
            <div
              className="w-full overflow-hidden rounded-lg group cursor-pointer"
              onClick={() => project.slug && handleProjectClick(project)}
            >
              {project.thumbnail ? (
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-72 md:h-[28rem] lg:h-[32rem] 2xl:h-[38rem] object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-72 md:h-[28rem] lg:h-[32rem] 2xl:h-[38rem] bg-[#FBF9FE] flex items-center justify-center">
                  <span className="text-slate-400 text-base tracking-[0.2em] uppercase">Coming Soon</span>
                </div>
              )}
            </div>
            <div>
              <h3 className="text-lg md:text-xl 2xl:text-2xl font-medium text-[#1a1a1a] mb-1 uppercase tracking-[0.2em]">{project.title}</h3>
              <p className="text-base md:text-lg 2xl:text-xl font-light text-slate-500">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* All Work Carousel */}
      <h2 className="uppercase text-center mb-4 text-xl text-slate-700 tracking-[0.2em]">All Work</h2>
      <div className="relative">
        {/* Navigation arrows */}
        <div className="flex justify-between ">
          <button
            className="carousel-prev cursor-pointer bg-transparent border-0 p-0 text-black hover:text-slate-500 transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="carousel-next cursor-pointer bg-transparent border-0 p-0 text-black hover:text-slate-500 transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        {/* Swiper carousel */}
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Keyboard, Mousewheel]}
          centeredSlides={true}
          loop={true}
          speed={400}
          grabCursor={true}
          keyboard={{ enabled: true }}
          mousewheel={{ forceToAxis: true }}
          navigation={{
            prevEl: ".carousel-prev",
            nextEl: ".carousel-next",
          }}
          onSlideChange={(swiper) => setActiveSlideIndex(swiper.realIndex)}
          breakpoints={{
            0: { slidesPerView: 2, spaceBetween: 12 },
            768: { slidesPerView: 5, spaceBetween: 24 },
          }}
        >
          {otherProjects.map((project, index) => (
            <SwiperSlide key={project.id}>
              <div
                className="cursor-pointer transition-all duration-400"
                style={{
                  transform: activeSlideIndex === index ? "scale(1)" : "scale(0.85)",
                  opacity: activeSlideIndex === index ? 1 : 0.6,
                }}
                onClick={() => handleProjectClick(project)}
              >
                <div className="w-full rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-48 md:h-64 2xl:h-96 object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div
                  className="transition-opacity duration-400 mt-2 text-center"
                  style={{ opacity: activeSlideIndex === index ? 1 : 0.6 }}
                >
                  <h3 className="text-xs 2xl:text-base font-medium text-[#1a1a1a] uppercase tracking-[0.2em]">{project.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ProjectsGrid;
