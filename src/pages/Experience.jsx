import WomenInTech from "../assets/images/WomenInTech.svg";
import SheCodesToo from "../assets/images/SheCodesToo.svg";
import TurningCollege from "../assets/images/TurningCollege.svg";
import DigitalExplorers from "../assets/images/DigitalExplorers.svg";
import GrowthLine from "../assets/images/GrowthLine.svg";
import Injah from "../assets/images/injah.svg";
import TIEC from "../assets/images/TIEC.svg";
import AUIS from "../assets/images/AUIS.svg";
import TryMe from "../assets/images/TryMe.svg";

// this page contains the data and components for the Experience section

/* =========================
   DATA BLOCK
========================= */

const experiences = [
  {
    title: "Data Analyst Intern",
    organization: "Women In Tech",
    type: "Intern",
    period: "2025",
    image: {WomenInTech},
    points: [
      "Built analytical dashboards for environmental and program datasets using Power BI",
      "Performed data cleaning and analysis using Python (Polars) for efficient data processing",
      "Translated raw datasets into clear, actionable insights for stakeholders",
    ],
  },
  {
    title: "Data Analysis",
    organization: "She Codes Too",
    type: "Intern",
    period: "2023",
    image: {SheCodesToo},
    points: [
      "Completed She Codes – Data Analysis program using Python (NumPy & Pandas)",
      "Performed data cleaning, manipulation, and exploratory analysis on datasets",
      "Strengthened analytical thinking and data-driven problem-solving skills",
    ],
  },
  {
    title: "Data Analyst",
    organization: "Turning College",
    type: "Intern",
    period: "2024 – 2025",
    image: {TurningCollege},
    points: [
      "Completed Digital Explorers II – Data Analytics program with Turing College",
      "Applied Excel, SQL, and Power BI to analyze data and build dashboards",
      "Strengthened problem-solving, data storytelling, and presentation skills",
    ],
  },
  {
    title: "Digital Explorer II",
    organization: "Digital Explorers",
    type: "Intern",
    period: "2024 - 2025",
    image: {DigitalExplorers},
    points: [
      "Highly competitive, skills-based data analytics program",
      "Completed practical assessments and real-world analytics tasks under time constraints",
      "Collaborated with peers to analyze data and present clear, insight-driven outcomes",
    ],
  },
  {
    title: "Project Manager",
    organization: "GrowthLine",
    type: "Employee",
    period: "2024",
    image: {GrowthLine},
    points: [
      "Managed project scope, milestones, and team coordination",
      "Assisted in implementing project activities in line with approved work plans",
      "Supported budget tracking, scheduling, and internal reporting",
    ],
  },
  {
    title: "TOT Trainee",
    organization: "Injah",
    type: "TOT",
    period: "2025",
    image: {Injah},
    points: [
      "Completed Training of Trainers (ToT) program",
      "Gained skills in training delivery and facilitation",
      "Improved communication and presentation skills",
    ],
  },
  {
    title: "Exchange Student",
    organization: "TIEC",
    type: "Program",
    period: "2024",
    image: {TIEC},
    points: [
      "Completed the Virtual Exchange Program with Texas International Education Consortium (TIEC)",
      "Gained insights into the U.S. economy, entrepreneurship, and startup development",
      "Engaged in cross-cultural discussions on innovation and global business strategies",
    ],
  },
  {
    title: "Trainee",
    organization: "AUIS",
    type: "Program",
    period: "2024",
    image: {AUIS},
    points: [
      "Participated in an idea pitching competition, developing a business concept",
      "Contributed to profit estimation and marketing strategy planning",
      "Received mentorship from Takween, strengthening business and strategic thinking skills",
    ],
  },
  {
    title: "Data Analyst",
    organization: "TLTD TryMe",
    type: "Intern",
    period: "2024",
    image: {TryMe},
    points: [
      "Completed TryMe2024, a free online internship focused on career readiness",
      "Enhanced professional skills through practical tasks and guided support",
      "Gained exposure to real-world job market challenges and solutions",
    ],
  },
];

/* =========================
   CARD COMPONENT
========================= */

function ExperienceCard({
  title,
  organization,
  type,
  period,
  image,
  points,
}) {
  return (
    <div
      className="
        group
        flex flex-col
        w-[30vw]
        border border-white/20
        rounded-xl
        bg-white/5
        backdrop-blur-lg
        overflow-hidden
        transition-all duration-300
        hover:border-white/50
        hover:shadow-[0_0_28px_rgba(255,255,255,0.35)]
      "
    >
      {/* LOGO */}
      <div className="w-full flex justify-center items-center py-6">
        <div className="w-32 h-32 flex items-center justify-center">
          <img
            src={image}
            alt={organization}
            className="
              max-w-[200%]
              max-h-full
              object-contain
              transition-transform duration-500
              group-hover:scale-105
            "
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6 flex flex-col gap-4 text-white">
        {/* TITLE + TYPE */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold leading-snug">
              {title}
            </h3>
            <p className="text-white/70 text-sm">
              {organization} • {period}
            </p>
          </div>

          <span
            className="
              shrink-0
              px-3 py-1
              text-xs font-medium
              rounded-full
              border border-white/30
              text-white/80
              bg-white/5
              backdrop-blur
            "
          >
            {type}
          </span>
        </div>

        {/* POINTS */}
        <ul className="list-disc list-inside text-white/85 text-sm space-y-2">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* =========================
   MAIN COMPONENT
========================= */

function Experiences() {
  return (
    <section id="experience" className="px-6 py-20 flex flex-col gap-14">
      <h1 className="ml-4 text-white text-5xl md:text-6xl font-semibold">
        Experience
      </h1>

      <div className="flex flex-wrap justify-center gap-10">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </section>
  );
}

export default Experiences;
