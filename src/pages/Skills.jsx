import {
  SiGoogleanalytics,
  SiNumpy,
  SiPandas,
  SiPolars,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiGit,
  SiFigma,
  SiAdobephotoshop,
  SiUml,
  SiCanva,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { PiMicrosoftPowerpointLogoFill } from "react-icons/pi";
import { TbSql } from "react-icons/tb";
import { FaPython, FaJava, FaDatabase } from "react-icons/fa";
import { MdAnalytics, MdTableChart, MdDesignServices } from "react-icons/md";

/* =========================
   SKILL GROUPS
========================= */

const dataSkills = [
  { name: "SQL", icon: TbSql },
  { name: "Power BI", icon: MdAnalytics },
  { name: "Excel", icon: MdTableChart },
  { name: "Data Studio", icon: SiGoogleanalytics },
  { name: "Polars", icon: SiPolars },
  { name: "Pandas", icon: SiPandas },
  { name: "NumPy", icon: SiNumpy },
];

const programmingSkills = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: SiReact },
  { name: "Node", icon: SiNodedotjs },
  { name: "Java", icon: FaJava },
  { name: "Python", icon: FaPython },
  { name: "Git/Bash", icon: SiGit },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "DBMS", icon: FaDatabase },
];

const designSkills = [
  { name: "Figma", icon: SiFigma },
  { name: "Photoshop", icon: SiAdobephotoshop },
  { name: "UI / UX", icon: MdDesignServices },
  { name: "Canva", icon: SiCanva },
  { name: "UML", icon: SiUml },
  { name: "PowerPoint", icon: PiMicrosoftPowerpointLogoFill },
  { name: "Python", icon: FaPython },
];

/* =========================
   REUSABLE BLOCK
========================= */

function SkillBlock({ title, skills }) {
  return (
    <div className="flex flex-col w-full sm:w-[90%] lg:w-[32%]">
      <div
        className="
          flex flex-wrap gap-2
          border border-white/20
          p-6
          rounded-xl
          backdrop-blur-lg
          bg-white/5
        "
      >
        <h2 className="text-white text-xl sm:text-2xl font-semibold tracking-wide w-full mb-3">
          {title}
        </h2>

        {skills.map(({ name, icon: Icon }, index) => (
          <span
            key={index}
            className="
              group inline-flex items-center gap-2
              px-4 py-2 sm:px-5 sm:py-2.5
              rounded-full
              border border-white/20
              bg-black text-white
              text-sm sm:text-md font-medium
              transition-all duration-300
              hover:border-white/60
              hover:bg-black
              hover:shadow-[0_0_24px_rgba(255,255,255,0.35)]
            "
          >
            <Icon className="text-lg sm:text-2xl opacity-80 group-hover:opacity-100 transition" />
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

/* =========================
   MAIN COMPONENT
========================= */

function Skills() {
  return (
    <section
      id="skills"
      className="
        px-6 sm:px-10
        py-20
        flex flex-col gap-16
      "
    >
      <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-semibold text-center sm:text-left">
        Skills
      </h1>

      <div
        className="
          flex flex-col sm:flex-row
          gap-12
          mx-auto
          max-w-7xl
          justify-center
        "
      >
        <SkillBlock title="Data Analytics" skills={dataSkills} />
        <SkillBlock title="Programming" skills={programmingSkills} />
        <SkillBlock title="Design" skills={designSkills} />
      </div>
    </section>
  );
}

export default Skills;
