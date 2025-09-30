import hyperBoxImage from "../assets/projects/HyperBox/hyperBoxPB.jpg";
import eieioImage from "../assets/projects/EIEIO/eieioPB.jpeg";
import vaerdicentralenImage from "../assets/projects/Vaerdicentralen/vaerdicentralenPB.png";
import designAsImage from "../assets/projects/DesignAs/designAsPB.png";
import bachelorImage from "../assets/projects/Bachelor/bachelorPB.png";
import engineeringImage from "../assets/projects/Engineering/engineeringPB.png";
import strainySleevyImage from "../assets/projects/StrainySleevy/strainySleevyPB.jpeg";
import nightWatchImage from "../assets/projects/NightWatch/nightWatchPB.jpg";
import toWoodToGoImage from "../assets/projects/ToWoodToGo/toWoodToGoPB.png";
import evoliImage from "../assets/projects/Evoli/evoliPB.png";


function ProjectsGrid() {
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
      id: 1,
      title: "HyperBox",
      thumbnail: hyperBoxImage,
      description: "Short description of HyperBox",
      link: "/projects/hyperbox",
    },
    {
      id: 2,
      title: "E-I-E-I-O",
      thumbnail: eieioImage,
      description: "Interactive toy for children. Built with electronic circuits, custom PCBs, laser cutting, 3D printing, Arduino and I²C communication",
      link: "/projects/eieio",
    },
    {
      id: 3,
      title: "Platform for Værdicentralen",
      thumbnail: vaerdicentralenImage,
      description: "Short description of Værdicentralen",
      link: "/projects/vaerdicentralen",
    },
    {
      id: 4,
      title: "Redesign of Stand Mixer",
      thumbnail: designAsImage,
      description: "Short description of project",
      link: "/projects/designAs",
    },
    {
      id: 5,
      title: "Bachelor’s thesis - Traces, Privacy, and Territories within Collaborative Writing Systems",
      thumbnail: bachelorImage,
      description: "Short description of bachelor",
      link: "/projects/designAs",
    },
    {
      id: 6,
      title: "Engineering Interactive Technologies",
      thumbnail: engineeringImage,
      description: "Short description of engineering",
      link: "/projects/engineering",
    },
    {
      id: 7,
      title: "Strainy Sleevy",
      thumbnail: strainySleevyImage,
      description: "Short description of strainy sleevy",
      link: "/projects/strainySleevy",
    },
    {
      id: 8,
      title: "Night Watch",
      thumbnail: nightWatchImage,
      description: "Short description of night watch",
      link: "/projects/nightWatch",
    },
  ];

  return (
    <div>
      <h2 id="selected-projects" className="text-3xl font-extralight mb-8 flex justify-center text-red-500" style={{ fontFamily: "MilkyWalky" }}>
        SELECTED PROJECTS
      </h2>
      <div className="grid grid-cols-2 gap-8 px-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div key={project.id} className="relative group overflow-hidden">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-64 object-cover transition-all duration-600 group-hover:scale-105 group-hover:opacity-20"
            />
            <div className="absolute inset-0 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer">
              <div className="text-center text-black p-4">
                <h3 className="text-4xl font-medium">{project.title}</h3>
                <p className="text-xs font-extralight">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsGrid;
