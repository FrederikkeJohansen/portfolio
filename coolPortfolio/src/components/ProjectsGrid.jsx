import { useState } from "react";
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
import ProjectNotReadyModal from "./ProjectNotReadyModal.jsx";

function ProjectsGrid() {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

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
      title: "ToWoodToGo",
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
  ];

  return (
    <div className="mb-8 px-4 md:px-12">
      <h2 id="selected-projects" className="text-sm font-extralight mb-2 flex justify-center text-black">
        SELECTED PROJECTS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 md:gap-8 max-w-9xl">
        {projects.map((project) => (
          <div key={project.id} className="relative group overflow-hidden">
            <button
              className="relative group overflow-hidden w-full h-full cursor-pointer bg-transparent border-0"
              onClick={() => handleProjectClick(project)}
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-60 md:h-100 object-cover transition-all duration-600 md:group-hover:scale-105 md:group-hover:opacity-10"
              />
              <div className="hidden md:flex absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-black p-4">
                  <h3 className="text-5xl font-medium">{project.title}</h3>
                  <p className="text-lg font-extralight">{project.description}</p>
                </div>
              </div>
              <div className="md:hidden mt-2 text-black">
                <div className="mt-2 text-left">
                  <h3 className="text-xl font-medium ">{project.title}</h3>
                  <p className="text-sm font-extralight mb-4 text-left">{project.description}</p>
                </div>
              </div>
            </button>
          </div>
        ))}
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