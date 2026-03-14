import aboutEngineerImage from "../assets/aboutengineer.png";
import SectionReveal from "./SectionReveal.jsx";

const About = () => {
  return (
    <SectionReveal id="about" className="section-pad py-20">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <p className="tag">About Me</p>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Computer engineer with a product mindset.
          </h2>
          <p className="text-base text-base-700 dark:text-base-200">
            I am Yaman Adhikari, a computer engineer based in Kathmandu. I enjoy
            blending engineering fundamentals with modern web technologies to
            craft clean, reliable, and user-focused digital experiences.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                title: "Passion",
                text: "Building scalable web apps with thoughtful UX.",
              },
              {
                title: "Interests",
                text: "Frontend engineering, systems, and performance tuning.",
              },
              {
                title: "Goal",
                text: "Deliver products that solve real-world problems.",
              },
            ].map((item) => (
              <div key={item.title} className="glass rounded-2xl p-4">
                <p className="text-sm font-semibold uppercase tracking-widest text-brand-500">
                  {item.title}
                </p>
                <p className="mt-2 text-sm text-base-700 dark:text-base-200">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={aboutEngineerImage}
            alt="About engineer"
            className="w-full max-w-sm rounded-3xl shadow-glass"
          />
        </div>
      </div>
    </SectionReveal>
  );
};

export default About;
