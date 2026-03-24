import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { projects } from "../data/projectData";
import Footer from "../components/Footer";

// Predefined grid spans for visual variety in the image gallery
const gridPatterns = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-2",
  "md:col-span-2 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-2 md:row-span-1",
];

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

      {/* Project title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-light text-[#1a1a1a] mb-4">
        {project.title}
      </h1>

      {/* Year */}
      <p className="text-sm 2xl:text-base font-light text-slate-400 tracking-[0.2em] uppercase mb-6 md:mb-6">
        {project.year}
      </p>

      {/* Hero image */}
      <div className="w-full overflow-hidden rounded-lg mb-10 md:mb-14">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-72 md:h-[28rem] lg:h-[32rem] 2xl:h-[38rem] object-cover rounded-lg"
        />
      </div>

      {/* Description */}
      <div className="max-w-full">
        <h2 className="text-sm 2xl:text-base font-medium text-[#FF007B] uppercase tracking-[0.2em] mb-2">
          About this project
        </h2>
        {Array.isArray(project.description) ? (
          project.description.map((paragraph, i) => (
            <p key={i} className="text-base xl:text-lg 2xl:text-xl font-light text-slate-700 leading-relaxed mb-4">
              {paragraph}
            </p>
          ))
        ) : (
          <p className="text-base xl:text-lg 2xl:text-xl font-light text-slate-700 leading-relaxed mb-6">
            {project.description}
          </p>
        )}

        {/* Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap items-center text-sm 2xl:text-base font-light text-slate-500 mb-8">
            {project.tags.map((tag, i) => (
              <span key={tag} className="flex items-center">
                {i > 0 && <span className="mx-3 text-slate-300">|</span>}
                <span>{tag}</span>
              </span>
            ))}
          </div>
        )}
      </div>

      {project.caseStudyReady ? (
        <>
          {/* Responsibility */}
          {project.responsibility && (
            <div className="max-w-full mb-8 md:mb-12">
              <h2 className="text-sm 2xl:text-base font-medium text-[#FF007B] uppercase tracking-[0.2em] mb-2">
                My Role
              </h2>
              <p className="text-base xl:text-lg 2xl:text-xl font-light text-slate-700 leading-relaxed">
                {project.responsibility}
              </p>
            </div>
          )}

          {/* Image gallery */}
          {project.images && project.images.length > 0 && (
            <div className="mb-8">
              <div className="flex flex-row items-center mb-2">
                <h2 className="text-sm 2xl:text-base text-slate-700 tracking-[0.2em] uppercase whitespace-nowrap">
                  Gallery
                </h2>
                <div className="border-b border-slate-300 flex-1 mx-8"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[160px] md:auto-rows-[180px] 2xl:auto-rows-[220px]">
                {project.images.map((img, i) => (
                  <div
                    key={i}
                    className={`overflow-hidden rounded-lg ${gridPatterns[i % gridPatterns.length]}`}
                  >
                    <img
                      src={img}
                      alt={`${project.title} - ${i + 1}`}
                      className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="border-t border-slate-200 mt-8 pt-8 pb-16">
          <p className="text-sm font-light text-slate-400 tracking-[0.2em] uppercase text-center">
            Full case study coming soon
          </p>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default ProjectPage;
