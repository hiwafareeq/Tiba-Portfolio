import { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  animate,
} from "framer-motion";
import Tiba from "../assets/images/Tiba.avif";

/* ---------- CountUp Component ---------- */
function CountUp({ to }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, to, {
      duration: 3,
      ease: "easeOut",
      onUpdate: (latest) => {
        setCount(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, to]);

  return <span ref={ref}>{count}</span>;
}

/* ---------- Main Component ---------- */
function InfoPage() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);

  return (
    <section id="about" ref={ref} className="bg-white overflow-hidden">
      {/* IMAGE */}
      <motion.img
        src={Tiba}
        alt="Tiba"
        className="
          w-full max-w-xl lg:max-w-4xl
          mx-auto
          py-10
        "
        style={{ scale, transformOrigin: "bottom center" }}
      />

      {/* CONTENT */}
      <div className="flex flex-col items-center px-6 sm:px-10 gap-10">
        {/* ROW 1 — TEXT */}
        <div
          className="
            flex flex-col lg:flex-row
            gap-10
            w-full max-w-6xl
          "
        >
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="
              flex-1
              text-black
              text-base sm:text-lg lg:text-xl
              leading-relaxed
            "
          >
            Creating meaningful impact by transforming data into clear, concise,
            and accurate analysis. Supporting informed decision making.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="
              flex-1
              text-black
              text-base sm:text-lg
              leading-relaxed
            "
          >
            Everything I do starts with understanding the goal, clarifying intent,
            and focusing on what truly matters, allowing me to create work that is
            thoughtful, adaptable, and impactful across different contexts.
          </motion.p>
        </div>

        {/* ROW 2 — STATS */}
        <div
          className="
            flex flex-col lg:flex-row
            gap-12
            w-full max-w-6xl
            py-10
          "
        >
          {/* STAT 1 */}
          <div className="flex-1">
            <hr className="border-gray-300 mb-4" />
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-gray-900 mb-1">
              <CountUp to={3} />+
            </h1>
            <p className="text-black font-medium">
              Years of experience
            </p>
          </div>

          {/* STAT 2 */}
          <div className="flex-1">
            <hr className="border-gray-300 mb-4" />
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-gray-900 mb-1">
              <CountUp to={15} />+
            </h1>
            <p className="text-black font-medium">
              Projects Completed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoPage;
