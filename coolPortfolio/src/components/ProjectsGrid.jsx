import hyperBoxImage from "../assets/projects/HyperBox/hyperBoxPB.jpg";
function ProjectsGrid() {
  const projects = [
    {
      id: 1,
      title: "HyperBox",
      thumbnail: hyperBoxImage,
      description: "Short description of HyperBox",
      link: "/projects/hyperbox",
    },
    // More projects...
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 py-12 max-w-6xl mx-auto">
      {projects.map((project) => (
        <div key={project.id} className="relative group overflow-hidden">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-center text-white p-4">
              <h3 className="text-xl font-light mb-2">{project.title}</h3>
              <p className="text-sm">{project.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectsGrid;
