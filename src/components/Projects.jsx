import { FiGithub, FiExternalLink } from "react-icons/fi";
import SectionReveal from "./SectionReveal.jsx";
import projectOne from "../assets/project-1.svg";
import projectTwo from "../assets/project-2.svg";
import projectThree from "../assets/project-3.svg";

const projects = [
  {
    title: "Aurora Finance Dashboard",
    description:
      "A responsive analytics dashboard with real-time KPIs, designed for fintech teams.",
    tags: ["React", "Tailwind", "Charts"],
    image: projectOne,
  },
  {
    title: "Nomad Booking Platform",
    description:
      "A travel booking experience focused on fast search, curated stays, and clean UI.",
    tags: ["React", "Vite", "UX"],
    image: projectTwo,
  },
  {
    title: "Studio Portfolio",
    description:
      "A visual portfolio system with case studies, animations, and CMS-ready layout.",
    tags: ["Framer Motion", "Design System"],
    image: projectThree,
  },
];

const Projects = () => {
  return (
    <SectionReveal id="projects" className="section-pad py-20">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="tag">Projects</p>
            <h2 className="font-display mt-4 text-3xl font-semibold sm:text-4xl">
              Recent work showcasing my craft
            </h2>
          </div>
          <p className="max-w-xl text-sm text-base-700 dark:text-base-200">
            Each project is designed to solve a clear user problem with delightful
            visuals, motion, and performance.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="glass group rounded-2xl p-5">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-5 space-y-3">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-base-700 dark:text-base-200">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-base-200/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-base-700 dark:border-white/10 dark:text-base-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <button className="inline-flex items-center gap-2 rounded-full bg-base-900 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition hover:scale-105 dark:bg-white dark:text-base-900">
                    <FiGithub /> GitHub
                  </button>
                  <button className="inline-flex items-center gap-2 rounded-full border border-base-900/20 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-base-900 shadow-glass transition hover:scale-105 dark:border-white/20 dark:bg-base-800/60 dark:text-white">
                    <FiExternalLink /> Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
};

export default Projects;
