import Line from "../assets/LandingPageLine.svg";
import { FaLinkedin, FaWhatsapp, FaArrowDown } from "react-icons/fa";

function LandingPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        id="home"
        className="
          flex flex-col lg:flex-row
          items-center lg:items-center
          justify-center lg:justify-between
          mt-16 lg:mt-10
          px-6 lg:px-16
        "
      >
        {/* LEFT SOCIALS — DESKTOP ONLY */}
        <div className="hidden lg:flex flex-col items-center gap-5 w-10">
          <img src={Line} alt="Line" className="my-5" />

          <FaLinkedin className="text-white text-2xl cursor-pointer hover:text-blue-500 transition-colors" />
          <FaWhatsapp className="text-white text-2xl cursor-pointer hover:text-green-500 transition-colors" />
        </div>

        {/* CENTER CONTENT */}
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <h2 className="text-white text-lg sm:text-xl font-bold animate-fadeUp delay-100">
            Hi, I'm Tiba
          </h2>

          <h1
            className="
              text-white
              text-3xl sm:text-4xl lg:text-5xl
              font-bold
              max-w-2xl
              animate-fadeUp delay-200
            "
          >
            Software Engineer & Data Analyst
          </h1>

          <div
            className="
              flex flex-col sm:flex-row
              items-center justify-center
              gap-4 sm:gap-5
              animate-fadeUp delay-300
            "
          >
            <a
              href="./src/Tiba Jasim Cv.pdf"
              download
              className="
              inline-block
              bg-black border border-white text-white
              px-6 py-3 rounded-full
              transition-all duration-300 ease-out
              hover:bg-white hover:text-black
              hover:-translate-y-0.5
              hover:shadow-[0_6px_20px_rgba(255,255,255,0.25)]
            "
            >
              Download CV
            </a>
            <button
              className="
                bg-black border border-white text-white
                px-6 py-3 rounded-full
                transition-all duration-300 ease-out
                hover:bg-white hover:text-black
                hover:-translate-y-0.5
                hover:shadow-[0_6px_20px_rgba(255,255,255,0.25)]
              "
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* RIGHT NAME — DESKTOP ONLY */}
        <p className="hidden lg:flex items-center justify-center w-10 text-white text-sm rotate-[-90deg] whitespace-nowrap">
          Tiba Jasim Mohammed
        </p>
      </section>

      {/* SCROLL HINT — HIDDEN ON MOBILE */}
      <div className="hidden sm:flex items-center justify-center gap-2 mt-9 animate-scrollHint">
        <h3 className="text-white font-bold">Scroll Down</h3>
        <FaArrowDown className="text-white" />
      </div>
    </>
  );
}

export default LandingPage;
