import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { VscGithubAlt } from "react-icons/vsc";
import { MdOutlineMailOutline } from "react-icons/md";

function Footer() {
  return (
    <footer className="footer footer-horizontal bg-transparent text-gray-400 items-center min-h-0 h-8 py-12 px-4">
      <aside className="grid-flow-col items-center">
        <p className="font-extralight text-sm">
          This portfolio has been designed and developed by Frederikke Ellen
          Johansen
        </p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end ">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <VscGithubAlt
            size={24}
            className="text-gray-300 hover:text-gray-200 transition-colors duration-100"
          />
        </a>
        <a href="mailto:your.email@example.com">
          <MdOutlineMailOutline
            size={24}
            className="text-gray-300 hover:text-gray-200 transition-colors duration-100"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin
            size={24}
            className="text-gray-300 hover:text-gray-200 transition-colors duration-100"
          />
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
