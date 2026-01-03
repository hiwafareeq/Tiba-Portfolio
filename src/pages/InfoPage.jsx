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

  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  return (
    <div id="info" className="bg-white" ref={ref}>
      {/* IMAGE */}
      <motion.img
        src={Tiba}
        alt="Tiba"
        className="w-250 mx-auto py-5"
        style={{ scale, transformOrigin: "bottom center" }}
      />

      {/* CONTENT */}
      <div className="flex flex-col items-center py-5 px-6 gap-6">

        {/* ROW 1 — TEXT */}
        <div className="flex gap-8 justify-between w-[75vw]">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-[35vw] min-w-[30] text-black text-xl leading-relaxed"
          >
            Creating meaningful impact by transforming data into clear, concise,
            and accurate analysis. Supporting informed decision making.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-[35vw] min-w-[280px] text-black text-lg leading-relaxed"
          >
            Everything I do starts with understanding the goal, clarifying intent,
            and focusing on what truly matters, allowing me to create work that is
            thoughtful, adaptable, and impactful across different contexts.
          </motion.p>
        </div>

        {/* ROW 2 — HR + STATS */}
        <div className="flex gap-8 justify-between w-[75vw] mt-10 py-10">
          <div className="w-[35vw] min-w-[280px]">
            <hr className="border-gray-300 mb-4" />
            <h1 className="text-8xl font-bold text-gray-900 mb-1">
              <CountUp to={3} />+
            </h1>
            <p className="text-black font-medium">Years of experience</p>
          </div>

          <div className="w-[35vw] min-w-[280px]">
            <hr className="border-gray-300 mb-4" />
            <h1 className="text-8xl font-bold text-gray-900 mb-1">
              <CountUp to={15} />+
            </h1>
            <p className="text-black font-medium">Projects Complete</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default InfoPage;
