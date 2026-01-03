import { useEffect, useRef } from "react";
import useSectionBackground from "../hooks/useSectionBackground";
import TibaLogo from "../assets/images/TibaLogo.svg";

function ScrollingXLabels() {
  const sectionRef = useRef(null);
  const strip1Ref = useRef(null);
  const strip2Ref = useRef(null);

  useSectionBackground(sectionRef, "#ffffff", "#000000");

  const logos = Array.from({ length: 12 });

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let offset1 = 0;
    let offset2 = 0;
    let isActive = false;

    const onScroll = () => {
      if (!isActive) return;

      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      offset1 -= delta * 0.6;
      offset2 += delta * 0.6;

      if (strip1Ref.current) {
        strip1Ref.current.style.transform = `translateX(${offset1}px)`;
      }

      if (strip2Ref.current) {
        strip2Ref.current.style.transform = `translateX(${offset2}px)`;
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reset scroll baseline when entering viewport
          lastScrollY = window.scrollY;
          isActive = true;
        } else {
          isActive = false;
        }
      },
      {
        threshold: 0.15, // start when 15% visible
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
      className="relative w-screen h-screen overflow-hidden my-20"
    >
      {/* WHITE STRIP */}
      <div className="absolute inset-0 flex items-center justify-center rotate-12">
        <div className="x-strip white-strip">
          <div ref={strip1Ref} className="x-logos">
            {[...logos, ...logos].map((_, i) => (
              <div key={i} className="x-item">
                <img
                  src={TibaLogo}
                  alt="Tiba Logo"
                  className="x-logo"
                  draggable="false"
                />
                <span className="x-separator text-white">
                  Data Analyst • Software Engineer
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BLACK STRIP */}
      <div className="absolute inset-0 flex items-center justify-center -rotate-12">
        <div className="x-strip black-strip">
          <div ref={strip2Ref} className="x-logos">
            {[...logos, ...logos].map((_, i) => (
              <div key={i} className="x-item">
                <img
                  src={TibaLogo}
                  alt="Tiba Logo"
                  className="x-logo"
                  draggable="false"
                />
                <span className="x-separator text-black">
                  Data Analyst • Software Engineer
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollingXLabels;
