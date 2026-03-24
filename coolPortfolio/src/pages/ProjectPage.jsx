import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { projects } from "../data/projectData";

function ProjectPage() {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FBF9FE] px-4">
        <h1 className="text-2xl font-medium text-[#1a1a1a] mb-4">Project not found</h1>
        <Link to="/" className="text-[#FF007B] hover:text-[#ff007b59] transition-colors duration-200 underline">
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FBF9FE] pt-20 md:pt-24 px-4 md:px-12">
      {/* Back link */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#FF007B] transition-colors duration-200 mb-8 tracking-[0.2em] uppercase"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
        </svg>
        Back
      </Link>

      {/* Project header */}
      <div className="flex flex-row items-center mb-8 md:mb-12">
        <h1 className="text-sm 2xl:text-base text-slate-700 tracking-[0.2em] uppercase whitespace-nowrap">
          {project.title}
        </h1>
        <div className="border-b border-slate-300 flex-1 mx-8"></div>
      </div>

      {/* Hero image */}
      <div className="w-full overflow-hidden rounded-lg mb-10 md:mb-14">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-72 md:h-[28rem] lg:h-[32rem] 2xl:h-[38rem] object-cover rounded-lg"
        />
      </div>

      {/* Description */}
      <div className="max-w-3xl">
        <h2 className="text-sm 2xl:text-base font-medium text-[#FF007B] uppercase tracking-[0.2em] mb-4">
          About this project
        </h2>
        <p className="text-base xl:text-lg 2xl:text-xl font-light text-slate-700 leading-relaxed mb-8">
          {project.description}
        </p>
      </div>

      {/* Placeholder for future content */}
      <div className="border-t border-slate-200 pt-10 pb-16">
        <p className="text-sm font-light text-slate-400 tracking-[0.2em] uppercase text-center">
          Full case study coming soon
        </p>
      </div>
    </div>
  );
}

export default ProjectPage;
