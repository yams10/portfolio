import { Link } from "react-scroll";
import { FiArrowUp, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-white/70 py-10 backdrop-blur-xl dark:bg-base-900/80">
      <div className="section-pad mx-auto flex max-w-6xl flex-col items-center gap-6 text-center sm:flex-row sm:justify-between">
        <p className="text-sm text-base-700 dark:text-base-200">
          © 2026 Yaman Adhikari. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {[FiGithub, FiLinkedin, FiTwitter].map((Icon, index) => (
            <button
              key={index}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/60 text-base-700 shadow-glass transition hover:-translate-y-1 hover:text-brand-500 dark:bg-base-800/60 dark:text-base-100"
              aria-label="Social link"
            >
              <Icon />
            </button>
          ))}
          <Link
            to="home"
            smooth
            duration={600}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-base-900 text-white shadow-glow transition hover:-translate-y-1 dark:bg-white dark:text-base-900"
            aria-label="Back to top"
          >
            <FiArrowUp />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
