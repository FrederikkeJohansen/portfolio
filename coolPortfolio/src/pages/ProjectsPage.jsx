function ProjectsPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project cards will go here */}
        <div className="card bg-base-100 shadow-xl">
          <figure><img src="https://via.placeholder.com/300x200" alt="Project" /></figure>
          <div className="card-body">
            <h2 className="card-title">Project Title</h2>
            <p>Short description of the project</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
