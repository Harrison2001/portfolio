import { domains } from "@/data/domains";

export default function Domains() {
  return (
    <section className="bg-black px-6 py-32 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-cyan-400">
          Engineering Focus
        </p>

        <h2 className="text-5xl font-bold md:text-7xl">
          Areas of Expertise
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {domains.map((domain) => (
            <div
              key={domain.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
            >
              <h3 className="text-3xl font-bold">
                {domain.title}
              </h3>

              <p className="mt-4 text-white/60">
                {domain.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {domain.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-cyan-500/30 px-4 py-2 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}