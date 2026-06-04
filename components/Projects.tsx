import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="bg-black px-6 py-28 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-cyan-400">
          Featured Work
        </p>

        <h2 className="text-5xl font-bold md:text-7xl">
          Projects with real architecture.
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-white/60">
          Each project is built to show more than code: system design, data
          thinking, product decisions, and business value.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}