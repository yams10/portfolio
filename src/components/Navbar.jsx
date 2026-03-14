import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";

const navLinks = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Education", to: "education" },
  { label: "Projects", to: "projects" },
  { label: "Contact", to: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  // Initialize theme from localStorage or OS preference.
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  // Toggle dark/light mode and persist preference.
  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  };

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-white/70 backdrop-blur-xl dark:bg-base-900/80">
      <nav className="section-pad flex h-16 items-center justify-between">
        <Link
          to="home"
          smooth
          duration={600}
          className="cursor-pointer text-lg font-semibold tracking-wide text-base-900 dark:text-base-100"
        >
          Yaman.
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              offset={-80}
              duration={500}
              className="cursor-pointer text-sm font-semibold uppercase tracking-widest text-base-700 transition hover:text-brand-500 dark:text-base-200"
              activeClass="text-brand-500"
              spy
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className="rounded-full border border-white/20 bg-white/60 p-2 text-base-700 shadow-glass transition hover:scale-105 dark:bg-base-800/60 dark:text-base-100"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
        </div>

        <div className="flex items-center gap-4 lg:hidden">
          <button
            onClick={toggleTheme}
            className="rounded-full border border-white/20 bg-white/60 p-2 text-base-700 shadow-glass transition hover:scale-105 dark:bg-base-800/60 dark:text-base-100"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="rounded-full border border-white/20 bg-white/60 p-2 text-base-700 shadow-glass dark:bg-base-800/60 dark:text-base-100"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-white/80 px-6 py-6 backdrop-blur-xl dark:bg-base-900/80 lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                offset={-80}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer text-sm font-semibold uppercase tracking-widest text-base-700 transition hover:text-brand-500 dark:text-base-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
