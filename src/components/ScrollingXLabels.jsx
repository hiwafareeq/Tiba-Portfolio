import { useRef } from "react";
import useSectionBackground from "../hooks/useSectionBackground";

function ScrollingXLabels() {
  const sectionRef = useRef(null);

  // White background while this section is visible
  useSectionBackground(sectionRef, "#ffffff", "#000000");

  return (
    <section
      ref={sectionRef}
      className="relative w-screen h-[100vh] overflow-visible my-20"
    >
      {/* WHITE STRIP */}
      <div className="absolute inset-0 flex items-center justify-center rotate-12">
        <div className="x-strip white-strip">
          <div className="x-text scroll-left">
            Data Analyst • Software Engineer • Data Analyst • Software Engineer •
            Data Analyst • Software Engineer •
          </div>
        </div>
      </div>

      {/* BLACK STRIP */}
      <div className="absolute inset-0 flex items-center justify-center -rotate-12">
        <div className="x-strip black-strip">
          <div className="x-text scroll-right">
            Data Analyst • Software Engineer • Data Analyst • Software Engineer •
            Data Analyst • Software Engineer •
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollingXLabels;
