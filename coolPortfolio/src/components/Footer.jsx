import { FaGithub, FaLinkedin } from "react-icons/fa";
import { VscGithubAlt } from "react-icons/vsc";
import { MdOutlineMailOutline } from "react-icons/md";
import { SlSocialLinkedin } from "react-icons/sl";
import { GoMail } from "react-icons/go";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { IoIosMail } from "react-icons/io";

function Footer() {
  return (
    <footer className="bg-[#CADAFF] text-gray-500 pt-8 pb-2 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-8">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-xs font-bold mb-1">Frederikke Ellen Johansen</h1>
          <p className="font-light text-[0.700rem] max-w-md">
            This portfolio was <span className="font-semibold">designed and developed by me</span> • I used <span className="font-semibold">Figma</span> for continuous design iteration • I built the code with <span className="font-semibold">React</span> and <span className="font-semibold">Tailwind CSS</span>.</p>
          <p className="font-light text-[0.700rem] max-w-md italic">Actively maintained. Last updated: October 2025.</p>

        </div>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-xs font-bold mb-1">Connect</h2>
          <div className="flex gap-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF007B] hover:text-[#ff007b59] transition-colors duration-200"
            >
              <IoLogoGithub size={22} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-[#FF007B] hover:text-[#ff007b59] transition-colors duration-200"
            >
              <IoIosMail size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF007B] hover:text-[#ff007b59] transition-colors duration-200"
            >
              <IoLogoLinkedin size={22} />
            </a>
          </div>
          <div className=" text-center text-[0.500rem] text-gray-400 pt-2">
            © {new Date().getFullYear()} Frederikke Ellen Johansen. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;