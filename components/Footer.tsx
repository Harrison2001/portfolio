export default function Footer() {
  return (
    <footer id="contact" className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/[0.03] p-10">
        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-cyan-400">
          Contact
        </p>

        <h2 className="text-4xl font-bold md:text-6xl">
          Let&apos;s build something meaningful.
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-white/60">
          I&apos;m interested in data engineering, analytics engineering,
          full-stack development, systems, and research-driven software.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="mailto:wierh2021@gmail.com"
            className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:scale-105"
          >
            Email Me
          </a>

          <a
            href="https://github.com/Harrison2001"
            target="_blank"
            className="rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:bg-white/10"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/harrison-wier-38835b228"
            target="_blank"
            className="rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:bg-white/10"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}