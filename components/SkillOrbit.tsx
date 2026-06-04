"use client";

import { skills } from "@/data/skills";

export default function SkillOrbit() {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h2 className="text-5xl font-bold mb-16">
        Technical Universe
      </h2>

      <div className="flex flex-wrap justify-center gap-6 max-w-5xl">
        {skills.map((skill) => (
          <div
            key={skill}
            className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-6 py-3 text-lg transition hover:scale-110 hover:border-cyan-400"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}