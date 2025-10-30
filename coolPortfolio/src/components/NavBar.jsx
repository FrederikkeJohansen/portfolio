import { Link } from "react-router-dom";
import "../styles/CustomStyles.css";
import "../styles/Font.css";
import resume from "../assets/resume/genericResume.pdf";

function scrollToProjects() {
  const projectsGrid = document.getElementById('selected-projects');
  const navbarHeight = 64; // h-16 = 64px
  const elementPosition = projectsGrid.offsetTop;
  const offsetPosition = elementPosition - navbarHeight - 20; // Extra 20px for breathing room
  
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

function openResume() {
  window.open(resume, "blank");
}

function NavBar() {


  return (
    <div className="navbar sticky top-0 bg-[#FCF9FE] z-50 min-h-0 h-16 py-4 items-center px-4 ">
      <div className="flex-1">
        <ul className="menu menu-horizontal font-light h-16 min-h-0 items-center">
          <li>
            <Link
              to="/"
              className="px-0 custom-underline hover:bg-transparent text-black text-2xl"
              style={{ fontFamily: "MilkyWalky" }}
            >
              Frederikke Ellen Johansen
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal font-extralight h-16 min-h-0 items-center custom-fontSize">
          <li>
            <Link
              className="px-0 mx-4 custom-underline hover:bg-transparent"
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
    </div>
  );
}
export default NavBar;
