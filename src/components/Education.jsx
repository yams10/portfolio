import SectionReveal from "./SectionReveal.jsx";

const education = [
  {
    degree: "B.E. in Computer Engineering",
    school: "Sagarmatha Engineering College, Sanepa, Kathmandu",
    year: "2021 - 2025",
    description:
      "Focused on software engineering, data structures, and human-computer interaction with project-based learning.",
  },
  {
    degree: "Higher Secondary (+2) Science",
    school: "Kathmandu",
    year: "2019 - 2021",
    description:
      "Studied physics, mathematics, and computer science foundations.",
  },
];

const Education = () => {
  return (
    <SectionReveal id="education" className="section-pad py-20">
      <div className="mx-auto max-w-5xl space-y-8">
        <div>
          <p className="tag">Education</p>
          <h2 className="font-display mt-4 text-3xl font-semibold sm:text-4xl">
            A timeline of my engineering journey
          </h2>
        </div>
        <div className="space-y-6 border-l border-base-200 pl-6 dark:border-white/10">
          {education.map((item) => (
            <div key={item.degree} className="relative">
              <div className="absolute -left-[30px] top-2 h-4 w-4 rounded-full bg-brand-500 shadow-glow" />
              <div className="glass rounded-2xl p-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-brand-500">
                  {item.year}
                </p>
                <h3 className="mt-2 text-xl font-semibold">{item.degree}</h3>
                <p className="text-sm text-base-700 dark:text-base-200">
                  {item.school}
                </p>
                <p className="mt-3 text-sm text-base-700 dark:text-base-200">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
};

export default Education;
