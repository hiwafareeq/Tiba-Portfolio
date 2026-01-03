import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import useTypewriter from "../hooks/useTypewriter.jsx";
import aboutMeTools from "../assets/images/AboutMeTools.svg";

function AboutMe() {
  const sectionRef = useRef(null);
  const toolsRef = useRef(null);

  // Trigger typing only when section enters viewport
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

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let offsetX = 0;
    let isActive = false;

    const onScroll = () => {
      if (!isActive || !toolsRef.current) return;

      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      // Move LEFT on scroll down
      offsetX -= delta * 0.4;

      toolsRef.current.style.transform = `translateX(${offsetX}px)`;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          lastScrollY = window.scrollY;
          isActive = true;
        } else {
          isActive = false;
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="text-center pt-20 mx-10 text-white bg-black overflow-hidden"
    >
      <p className="text-2xl max-w-[70vw] mx-auto mt-10 min-h-[5rem]">
        {first.text}
      </p>

      <p className="text-lg max-w-[75vw] mx-auto mt-5 min-h-[3rem]">
        {second.text}
      </p>

<div className="tools-marquee">
  <img
    src={aboutMeTools}
    alt="aboutMeTools"
    className="tools-item mx-3"
    draggable="false"
  />
  <img
    src={aboutMeTools}
    alt="aboutMeTools"
    className="tools-item mx-3"
    draggable="false"
  />
</div>
    </section>
  );
}

export default AboutMe;
