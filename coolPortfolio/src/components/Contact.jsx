import { IoLogoGithub, IoLogoLinkedin, IoIosMail } from "react-icons/io";

function Contact() {
  return (
    <div id="contact" className="bg-[#FBF9FE] px-4 md:px-12 py-16 md:py-24">
      {/* Header */}
      <div className="flex flex-row items-center mb-2">
        <h2 className="text-sm 2xl:text-base text-slate-700 tracking-[0.2em] uppercase whitespace-nowrap">
          Contact
        </h2>
        <div className="border-b border-slate-300 flex-1 mx-8"></div>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center text-center gap-6">
        <p className="text-[clamp(1.25rem,2.5vw,2.5rem)] font-light text-[#1a1a1a] leading-relaxed max-w-2xl">
          Like what you see? Let's get in touch.
        </p>

        {/* Social icons */}
        <div className="flex gap-6 mt-4">
          <a
            href="https://github.com/FrederikkeJohansen"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF007B] hover:text-[#ff007b59] transition-colors duration-200"
          >
            <IoLogoGithub size={36} />
          </a>
          <a
            href="mailto:frederikke.ek.johansen@gmail.com"
            className="text-[#FF007B] hover:text-[#ff007b59] transition-colors duration-200"
          >
            <IoIosMail size={36} />
          </a>
          <a
            href="https://www.linkedin.com/in/frederikke-ellen-johansen-24791b2bb"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF007B] hover:text-[#ff007b59] transition-colors duration-200"
          >
            <IoLogoLinkedin size={36} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
