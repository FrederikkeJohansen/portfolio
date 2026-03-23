import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Mousewheel } from "swiper/modules";
import "swiper/css";
import hyperBoxImage from "../assets/projects/HyperBox/hyperBoxPB.jpg";
import eieioImage from "../assets/projects/EIEIO/eieioPB.png";
import vaerdicentralenImage from "../assets/projects/Vaerdicentralen/vaerdicentralenPB.png";
import designAsImage from "../assets/projects/DesignAs/designAsPB.png";
import bachelorImage from "../assets/projects/Bachelor/bachelorPB.png";
import uxImage from "../assets/projects/UXLogbook/uxPB.png";
import strainySleevyImage from "../assets/projects/StrainySleevy/strainySleevyPB.png";
import nightWatchImage from "../assets/projects/NightWatch/nightWatchPB.png";
import toWoodToGoImage from "../assets/projects/ToWoodToGo/toWoodToGoPB.png";
import evoliImage from "../assets/projects/Evoli/evoliPB.png";
import logoENVAImage from "../assets/projects/LogoENVA/logoEnvaPB.png";
import PersonalGifts from "../assets/projects/PersonalGifts/personalGiftsPB.png";
import ProjectNotReadyModal from "./ProjectNotReadyModal.jsx";

function ProjectsGrid() {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const swiperRef = useRef(null);

  const developedProjects = [
    // Add project IDs here as you build their pages
    // Example: 10, 5, 3
  ];

  function handleProjectClick(project) {
    if (developedProjects.includes(project.id)) {
      // Open project page
    } else {
      setSelectedProject(project);
      setIsProjectModalOpen(true);
    }
  }

  function closeModal() {
    setIsProjectModalOpen(false);
    setSelectedProject(null);
  }

  const projects = [
    {
      id: 10,
      title: "Evoli",
      thumbnail: evoliImage,
      description: "Master Thesis: A mobile application and a wearable designed to reduce loneliness among university students. Features include self-reflection through an AI generated personal podcast and discreet in-situ support through haptic feedback.",
      link: "/projects/evoli",
    },
    {
      id: 9,
      title: "To-Wood-To-Go",
      thumbnail: toWoodToGoImage,
      description: "A web application enabling craftsmen to sell leftover building materials back to STARK, promoting circular economy and reducing waste for a more sustainable construction industry.",
      link: "/projects/toWoodToGo",
    },
    {
      id: 6,
      title: "UX Design Logbook",
      thumbnail: uxImage,
      description: "Selected pages from my UX logbook, including comparisons of UX maps and mental models, exploring newcomers' experiences at the Burning Man festival through benchmarking and digital ethnography, and the creation of Burner Sphere.",
      link: "/projects/ux",
    },
    {
      id: 5,
      title: "Traces, Privacy, and Territories",
      thumbnail: bachelorImage,
      description: "Bachelor Thesis: Explored the use of traces in collaborative writing by developing and evaluating a Google Docs–style prototype with features supporting private work and territorial boundaries.",
      link: "/projects/bachelor",
    },
    {
      id: 3,
      title: "System Design for Værdicentralen",
      thumbnail: vaerdicentralenImage,
      description: "Collaborative project with Værdicentralen (thrift shop) involving participatory design, field studies, and agile development to design and develop a platform supporting workflow and coordination.",
      link: "/projects/vaerdicentralen",
    },
    {
      id: 8,
      title: "Night Watch",
      thumbnail: nightWatchImage,
      description: "Wearable designed to enhance personal safety during night time walks. Key components include a soft button for activation, vibration motors for discreet feedback, and optical fibers for emitting light. ",
      link: "/projects/nightWatch",
    },
    {
      id: 1,
      title: "HyperBox",
      thumbnail: hyperBoxImage,
      description: "A physical learning device for high school students to explore machine learning by adjusting hyperparameters and observing the outcomes.",
      link: "/projects/hyperbox",
    },
    {
      id: 2,
      title: "E-I-E-I-O",
      thumbnail: eieioImage,
      description: "Interactive toy for children. Built with electronic circuits, custom PCBs, laser cutting, 3D printing, Arduino and I²C communication.",
      link: "/projects/eieio",
    },
    {
      id: 11,
      title: "Logo Design",
      thumbnail: logoENVAImage,
      description: "Logo design for the choir ENVA, reflecting a sleek and modern aesthetic.",
      link: "/projects/logoENVA",
    },
    {
      id: 7,
      title: "Strainy Sleevy",
      thumbnail: strainySleevyImage,
      description: "Critical Design Project on Sustainability: An elbow sleeve for children that restricts movement based on parental energy consumption to provoke reflection and awareness.",
      link: "/projects/strainySleevy",
    },
    {
      id: 4,
      title: "Redesign of Stand Mixer",
      thumbnail: designAsImage,
      description: "Redesign of a stand mixer through six distinct design periods; Arts & Crafts, Bauhaus, Ulm, Streamline, Postmodernism, and Eco-design.",
      link: "/projects/designAs",
    },
    {
      id: 12,
      title: "Personalized Projects",
      thumbnail: PersonalGifts,
      description: "A collection of small personalized projects, including bookmarks, placecards, decorations, and christmas ornaments.",
      link: "/projects/personalGifts",
    },
  ];

  const featuredIds = [10, 9, 6];
  const featuredProjects = featuredIds.map(id => projects.find(p => p.id === id)).filter(Boolean);
  // Add placeholder for the upcoming project
  featuredProjects.push({
    id: 0,
    title: "Coming Soon",
    thumbnail: null,
    description: "A new project is on its way. Stay tuned.",
    link: "#",
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
            <div className="w-full overflow-hidden rounded-lg group cursor-pointer" onClick={() => handleProjectClick(project)}>
              {project.thumbnail ? (
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-72 md:h-[28rem] lg:h-[32rem] object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-72 md:h-[28rem] lg:h-[32rem] bg-[#FBF9FE] flex items-center justify-center">
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
                    className="w-full h-48 md:h-64 2xl:h-80 object-cover transition-transform duration-500 hover:scale-105"
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
      <ProjectNotReadyModal
        isOpen={isProjectModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </div>
  );
}

export default ProjectsGrid;