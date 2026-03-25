import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "../styles/CustomStyles.css";
import "../styles/Font.css";
import MobileHamburgerMenuModal from "./MobileHamburgerMenuModal.jsx";

function scrollToElement(id) {
  const element = document.getElementById(id);
  if (!element) return;
  const navbarHeight = 64;
  const position = element.offsetTop - navbarHeight;
  window.scrollTo({ top: position, behavior: "smooth" });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [pastHero, setPastHero] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();
  const navigate = useNavigate();
  const isProjectPage = location.pathname.startsWith("/project/");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (id) => {
    if (isProjectPage) {
      navigate("/", { state: { scrollTo: id } });
    } else {
      scrollToElement(id);
    }
  };

  const handleLogoClick = () => {
    if (isProjectPage) {
      navigate("/");
    } else {
      scrollToTop();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 10) {
        setVisible(true);
      } else if (currentScrollY < lastScrollY.current) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      setPastHero(currentScrollY > window.innerHeight * 0.8);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`navbar fixed top-0 z-50 min-h-0 h-12 xl:h-12 2xl:h-16 items-center px-4 md:px-8 text-black transition-all duration-300 ${visible ? "translate-y-0" : "-translate-y-full"} ${pastHero || isProjectPage ? "bg-[#FBF9FE]/80 backdrop-blur-xs border-b border-slate-200/50" : "bg-transparent"}`}
      >
        <div className="navbar-start">
          <ul className="menu menu-horizontal font-light h-12 xl:h-16 min-h-0 items-center">
            <li>
              <button
                className="px-0 custom-underline hover:bg-transparent text-black text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold hidden md:flex cursor-pointer"
                style={{ fontFamily: "MilkyWalky" }}
                onClick={handleLogoClick}
              >
                Frederikke Ellen Johansen
              </button>
            </li>
          </ul>
        </div>
        <div className="navbar-center">
          <button
            className=" text-black text-2xl sm:text-3xl font-semibold md:hidden cursor-pointer"
            style={{ fontFamily: "MilkyWalky" }}
            onClick={handleLogoClick}
          >
            Frederikke Ellen Johansen
          </button>
        </div>
        <div className="navbar-end">
          <div className="md:hidden">
            <button className="md:hidden cursor-pointer" onClick={toggleMenu}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 6h16M4 12h16 " />
              </svg>
            </button>
          </div>
          <ul className="menu menu-horizontal text-2xs md:text-xs lg:text-xs xl:text-sm 2xl:text-base h-12 xl:h-16 min-h-0 items-center hidden md:flex tracking-widest uppercase">
            <li>
              <button
                className="px-0 mx-4 custom-underline hover:bg-transparent text-black cursor-pointer"
                onClick={() => handleNavClick("selected-projects")}
              >
                Work
              </button>
            </li>
            <li>
              <button
                className="px-0 mx-4 custom-underline hover:bg-transparent text-black cursor-pointer"
                onClick={() => handleNavClick("about")}
              >
                About
              </button>
            </li>
            <li>
              <button
                className="px-0 ml-4 custom-underline hover:bg-transparent text-black cursor-pointer"
                onClick={() => handleNavClick("contact")}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
      <MobileHamburgerMenuModal
        isOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        scrollToElement={handleNavClick}
      />
    </>
  );
}
export default NavBar;
