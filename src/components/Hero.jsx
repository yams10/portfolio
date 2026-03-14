import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-hero-radial pt-20"
    >
      <div className="section-pad relative z-10 mx-auto flex min-h-[80vh] max-w-6xl flex-col items-start justify-center gap-10 py-20">
        <motion.p
          className="tag"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Computer Engineer
        </motion.p>

        <motion.h1
          className="font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Hi, I am <span className="text-gradient">Yaman Adhikari</span>.
          <br />
          I build reliable systems and human-centered interfaces.
        </motion.h1>

        <motion.p
          className="max-w-2xl text-lg text-base-700 dark:text-base-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          I am a computer engineer who enjoys turning complex problems into
          elegant, scalable products. I focus on frontend development, system
          thinking, and performance-aware engineering.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            to="projects"
            smooth
            duration={600}
            offset={-80}
            className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-base-900 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white transition hover:scale-105 dark:bg-white dark:text-base-900"
          >
            View Projects
            <FiArrowUpRight className="transition group-hover:translate-x-1" />
          </Link>
          <Link
            to="contact"
            smooth
            duration={600}
            offset={-80}
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-base-900/20 bg-white/70 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-base-900 shadow-glass transition hover:scale-105 dark:border-white/20 dark:bg-base-800/60 dark:text-white"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 h-48 w-48 rounded-full bg-brand-400/40 blur-3xl" />
        <div className="absolute right-10 top-32 h-64 w-64 rounded-full bg-accent-400/40 blur-3xl" />
        <div className="absolute bottom-20 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-brand-500/30 blur-3xl" />
      </div>
    </section>
  );
};

export default Hero;
