import Line from "../assets/LandingPageLine.svg";
import { FaLinkedin, FaWhatsapp, FaArrowDown } from "react-icons/fa";

function LandingPage() {
  return (
    <>
      {/* HERO SECTION */}
      <div className="flex items-center justify-between mt-10">
        
        {/* LEFT SOCIALS */}
        <div className="flex-col justify-center items-center gap-5 mx-15">
          <img src={Line} alt="Line" className="m-auto my-5" />

          <FaLinkedin className="my-2 text-white text-2xl cursor-pointer hover:text-blue-500 transition-colors duration-300" />
          <FaWhatsapp className="my-2 text-white text-2xl cursor-pointer hover:text-green-500 transition-colors duration-300" />
        </div>

        {/* CENTER CONTENT */}
        <div className="flex flex-col items-center justify-center gap-5">
          <h2 className="text-white text-2xl font-bold animate-fadeUp delay-100">
            Hi, I'm Tiba
          </h2>

          <h1 className="text-white text-5xl font-bold animate-fadeUp delay-200">
            Software Engineer & Data Analyst
          </h1>

          <div className="flex items-center justify-center gap-5 animate-fadeUp delay-300">
            <button className="
              bg-black border border-white text-white
              px-4 py-2 rounded-full
              transition-all duration-300 ease-out
              hover:bg-white hover:text-black
              hover:-translate-y-0.5
              hover:shadow-[0_6px_20px_rgba(255,255,255,0.25)]
            ">
              Get My CV
            </button>

            <button className="
              bg-black border border-white text-white
              px-4 py-2 rounded-full
              transition-all duration-300 ease-out
              hover:bg-white hover:text-black
              hover:-translate-y-0.5
              hover:shadow-[0_6px_20px_rgba(255,255,255,0.25)]
            ">
              Contact Me
            </button>
          </div>
        </div>

        {/* RIGHT NAME */}
        <p className="text-white text-sm rotate-[-90deg]">
          Tiba Jasim Mohammed
        </p>
      </div>

      {/* SCROLL HINT */}
      <div className="flex items-center justify-center gap-2 mt-12 animate-scrollHint">
        <h3 className="text-white font-bold">Scroll Down</h3>
        <FaArrowDown className="text-white" />
      </div>
    </>
  );
}

export default LandingPage;
