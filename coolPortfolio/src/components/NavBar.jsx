import { useState } from 'react';
import { Link } from "react-router-dom";
import "../styles/CustomStyles.css";
import "../styles/Font.css";
import resume from "../assets/resume/genericResume.pdf";
import ResumeModal from "./ResumeModal";

function scrollToProjects() {
  const projectsGrid = document.getElementById('selected-projects');
  projectsGrid.scrollIntoView({ behavior: 'smooth' });
}

function NavBar() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  function openResume() {
    setIsResumeOpen(true);
  }

  function closeResume() {
    setIsResumeOpen(false);
  }

  return (
    <div className="navbar min-h-0 h-8 py-0 items-center px-4">
      <div className="flex-1">
        <ul className="menu menu-horizontal font-light h-8 min-h-0 items-center">
          <li>
            <Link
              to="/"
              className="px-0 custom-underline hover:bg-transparent text-black font-bold text-md"
              style={{ fontFamily: "MilkyWalky" }}
            >
              Frederikke Ellen Johansen
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal font-extralight h-8 min-h-0 items-center custom-fontSize">
          <li>
            <Link
              className="px-0 mx-4   custom-underline hover:bg-transparent"
              onClick={scrollToProjects}
            >
              PROJECTS
            </Link>
          </li>
          <li>
            <Link className="px-0 custom-underline hover:bg-transparent"
              onClick={openResume}>
              RESUME
            </Link>
          </li>
        </ul>
      </div>
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={closeResume}
        resumeUrl={resume}
      />
    </div>
  );
}
export default NavBar;
