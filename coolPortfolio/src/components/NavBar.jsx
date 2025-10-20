import { Link } from "react-router-dom";
import "../styles/CustomStyles.css";
import "../styles/Font.css";

function scrollToProjects() {
  const projectsGrid = document.getElementById('selected-projects');
  projectsGrid.scrollIntoView({ behavior: 'smooth' });
}

function NavBar() {

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
            <Link to="/resume" className="px-0 custom-underline hover:bg-transparent">
              RESUME
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default NavBar;
