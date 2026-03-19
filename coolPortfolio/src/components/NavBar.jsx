import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/CustomStyles.css";
import "../styles/Font.css";
import MobileHamburgerMenuModal from "./MobileHamburgerMenuModal.jsx";

function scrollToProjects() {
  const projectsGrid = document.getElementById('selected-projects');
  const navbarHeight = 64; // h-16 = 64px
  const projectPosition = projectsGrid.offsetTop - navbarHeight;

  window.scrollTo({
    top: projectPosition,
    behavior: 'smooth'
  });
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }


  return (
    <>
      <div className="navbar top-0 bg-transparent z-50 min-h-0 h-16 py-4 items-center px-4 text-black">
        <div className="navbar-start">
          <ul className="menu menu-horizontal font-light h-16 min-h-0 items-center">
            <li>
              <button
                className="px-0 custom-underline hover:bg-transparent text-black text-xl font-semibold hidden md:flex"
                style={{ fontFamily: "MilkyWalky" }} onClick={scrollToTop}
              >
                Frederikke Ellen Johansen
              </button>
            </li>
          </ul>
        </div>
        <div className="navbar-center ">
          <button
            className="text-black text-lg font-semibold md:hidden"
            style={{ fontFamily: "MilkyWalky" }} onClick={scrollToTop}
          >
            Frederikke Ellen Johansen
          </button>
        </div>
        <div className="navbar-end">
          <div className="md:hidden">
            <button className="md:hidden" onClick={toggleMenu}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 6h16M4 12h16 " />
              </svg>
            </button>
          </div>
          <ul className="menu menu-horizontal text-sm h-16 min-h-0 items-center hidden md:flex tracking-widest uppercase">
            <li>
              <Link
                className="px-0 mx-4 custom-underline hover:bg-transparent"
                onClick={scrollToProjects}
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                className="px-0 mx-4 custom-underline hover:bg-transparent"
                onClick={scrollToProjects}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="px-0 mx-4 custom-underline hover:bg-transparent"
                onClick={scrollToProjects}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <MobileHamburgerMenuModal
        isOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        scrollToProjects={scrollToProjects}
      />
    </>
  );
}
export default NavBar;