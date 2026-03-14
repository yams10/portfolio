import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiGit,
  SiTailwindcss,
  SiFigma,
} from "react-icons/si";
import SectionReveal from "./SectionReveal.jsx";

const skills = [
  { name: "HTML", level: 92, icon: SiHtml5 },
  { name: "CSS", level: 90, icon: SiCss },
  { name: "JavaScript", level: 88, icon: SiJavascript },
  { name: "React", level: 90, icon: SiReact },
  { name: "Node", level: 78, icon: SiNodedotjs },
  { name: "Git", level: 85, icon: SiGit },
  { name: "Tailwind", level: 86, icon: SiTailwindcss },
  { name: "Figma", level: 70, icon: SiFigma },
];

const Skills = () => {
  return (
    <SectionReveal id="skills" className="section-pad py-20">
      <div className="mx-auto max-w-6xl space-y-10">
        <div>
          <p className="tag">Skills</p>
          <h2 className="font-display mt-4 text-3xl font-semibold sm:text-4xl">
            Tools I use to craft experiences
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((skill) => (
            <div key={skill.name} className="glass rounded-2xl p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-base-900/90 text-white dark:bg-white/90 dark:text-base-900">
                  <skill.icon />
                </div>
                <div>
                  <p className="text-lg font-semibold">{skill.name}</p>
                  <p className="text-sm text-base-600 dark:text-base-200">
                    {skill.level}% Proficiency
                  </p>
                </div>
              </div>
              <div className="mt-6 h-2 overflow-hidden rounded-full bg-base-200 dark:bg-base-800">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-brand-400 via-brand-500 to-accent-400"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
};

export default Skills;
