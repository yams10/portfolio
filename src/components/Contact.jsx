import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import SectionReveal from "./SectionReveal.jsx";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <SectionReveal id="contact" className="section-pad py-20">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-5">
          <p className="tag">Contact</p>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Let us build something remarkable
          </h2>
          <p className="text-base text-base-700 dark:text-base-200">
            Have a project in mind or want to collaborate? Send a message and I
            will get back to you within 24 hours.
          </p>
          <div className="flex gap-4">
            {[FiGithub, FiLinkedin, FiTwitter].map((Icon, index) => (
              <button
                key={index}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/60 text-base-700 shadow-glass transition hover:-translate-y-1 hover:text-brand-500 dark:bg-base-800/60 dark:text-base-100"
                aria-label="Social link"
              >
                <Icon />
              </button>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="glass flex flex-col gap-4 rounded-2xl p-8"
        >
          <div>
            <label className="text-sm font-semibold">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/70 px-4 py-3 text-sm text-base-900 shadow-sm outline-none transition focus:border-brand-500 dark:bg-base-900/70 dark:text-base-100"
            />
          </div>
          <div>
            <label className="text-sm font-semibold">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/70 px-4 py-3 text-sm text-base-900 shadow-sm outline-none transition focus:border-brand-500 dark:bg-base-900/70 dark:text-base-100"
            />
          </div>
          <div>
            <label className="text-sm font-semibold">Message</label>
            <textarea
              rows="4"
              placeholder="Tell me about your project"
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/70 px-4 py-3 text-sm text-base-900 shadow-sm outline-none transition focus:border-brand-500 dark:bg-base-900/70 dark:text-base-100"
            />
          </div>
          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center rounded-full bg-base-900 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white transition hover:scale-[1.02] dark:bg-white dark:text-base-900"
          >
            Send Message
          </button>
          <p className="text-xs text-base-600 dark:text-base-200">
            This form is a UI demo. Connect the submit handler to your backend or
            a service like Formspree to receive messages.
          </p>
        </form>
      </div>
    </SectionReveal>
  );
};

export default Contact;
