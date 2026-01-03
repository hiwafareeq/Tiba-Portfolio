import React from "react";

/* =========================
   EXPERIENCE DATA
========================= */

const experiences = [
  {
    title: "Data Analyst Intern",
    organization: "Eco Iraq",
    type: "Internship",
    period: "2024",
    image: "./src/assets/images/WomenInTech.svg",
    points: [
      "Built analytical dashboards for environmental datasets",
      "Worked with Power BI, Excel, and data cleaning workflows",
      "Translated raw data into clear insights for stakeholders",
    ],
  },
  {
    title: "Software Engineering Intern",
    organization: "Pure Platform",
    type: "Internship",
    period: "2023",
    image: "./src/assets/images/SheCodesToo.svg",
    points: [
      "Developed full-stack features using React and Node.js",
      "Implemented APIs and handled database interactions",
      "Collaborated with cross-functional teams in agile workflow",
    ],
  },
  {
    title: "IT & Communications Lead",
    organization: "Raparin Youth Organization",
    type: "Leadership",
    period: "2022 – Present",
    image: "./src/assets/images/TurningCollege.svg",
    points: [
      "Led IT operations and digital communication strategies",
      "Managed platforms, reports, and technical coordination",
      "Supported youth-focused projects and events",
    ],
  },
  {
    title: "Backend Developer (Java & Node.js)",
    organization: "AUIS Dorm Booking System",
    type: "Academic Project",
    period: "2024",
    image: "./src/assets/images/DigitalExplorers.svg",
    points: [
      "Designed and implemented backend services using Node.js and Java",
      "Worked with PostgreSQL, authentication, and role-based access control",
      "Applied software engineering principles and clean architecture",
    ],
  },
  {
    title: "Frontend Developer",
    organization: "Eco Iraq Platform",
    type: "Project",
    period: "2024",
    image: "./src/assets/images/GrowthLine.svg",
    points: [
      "Built responsive user interfaces using React and Tailwind CSS",
      "Focused on accessibility, animations, and clean UI/UX design",
      "Collaborated with backend and content teams for integration",
    ],
  },
  {
    title: "Cybersecurity & Networking Trainee",
    organization: "IQ Summer Internship",
    type: "Training",
    period: "2023",
    image: "./src/assets/images/injah.svg",
    points: [
      "Trained on networking fundamentals, SOC concepts, and cybersecurity basics",
      "Worked with VLANs, routing, and network security scenarios",
      "Gained hands-on exposure to enterprise IT environments",
    ],
  },
  {
    title: "Data & Reporting Assistant",
    organization: "Youth Development Projects",
    type: "Assistant",
    period: "2023",
    image: "./src/assets/images/TIEC.svg",
    points: [
      "Prepared analytical reports and KPIs for training programs",
      "Worked with Excel and Power BI to visualize program impact",
      "Supported decision-making through data-driven insights",
    ],
  },
  {
    title: "Project Coordinator",
    organization: "Community & NGO Initiatives",
    type: "Coordination",
    period: "2022 – 2023",
    image: "./src/assets/images/AUIS.svg",
    points: [
      "Coordinated project activities, timelines, and documentation",
      "Communicated with stakeholders and managed reporting workflows",
      "Strengthened leadership, organization, and communication skills",
    ],
  },
  {
    title: "UI / UX & Visual Design Contributor",
    organization: "Freelance & Academic Projects",
    type: "Design",
    period: "2022 – Present",
    image: "./src/assets/images/TryMe.svg",
    points: [
      "Designed interfaces and presentations using Figma and Canva",
      "Created visuals and layouts aligned with user experience principles",
      "Supported projects with clear, professional design assets",
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
    <section className="px-6 py-20 flex flex-col gap-14">
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
