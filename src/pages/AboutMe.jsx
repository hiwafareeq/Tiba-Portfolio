import { useRef } from "react";
import { useInView } from "framer-motion";
import useTypewriter from "../hooks/useTypewriter.jsx";
import aboutMeTools from "../assets/images/aboutMeTools.svg";

function AboutMe() {
  const sectionRef = useRef(null);

  // 👇 Trigger typing only when section enters viewport
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px",
  });

  const first = useTypewriter(
    "I’m Tiba Jasim — a software engineer & data analyst transforming raw data into clear, actionable insights that drive informed decision-making. I specialize in data cleaning, analysis, and visualization.",
    10,
    isInView
  );

  const second = useTypewriter(
    "Building dashboards and reports that uncover trends, optimize performance, and support strategic planning using tools like Python, SQL, Excel, and BI platforms.",
    10,
    first.isFinished
  );

  return (
    <div
      ref={sectionRef}
      className="text-center pt-20 mx-10 text-white bg-black"
    >
      <p className="text-2xl max-w-[70vw] mx-auto mt-10 min-h-[5rem]">
        {first.text}
      </p>

      <p className="text-lg max-w-[75vw] mx-auto mt-5 min-h-[3rem]">
        {second.text}
      </p>

      <img
        src={aboutMeTools}
        alt="aboutMeTools"
        className="mx-auto py-20 w-3/4"
      />
    </div>
  );
}

export default AboutMe;
