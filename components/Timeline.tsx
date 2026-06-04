import { experiences } from "@/data/experience";

export default function Timeline() {
  return (
    <section className="bg-black px-6 py-32 text-white">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-cyan-400">
          Journey
        </p>

        <h2 className="text-5xl font-bold md:text-7xl">
          Experience Timeline
        </h2>

        <div className="mt-20 space-y-12">
          {experiences.map((item) => (
            <div
              key={`${item.year}-${item.title}`}
              className="border-l-2 border-cyan-500 pl-8"
            >
              <p className="text-cyan-400">{item.year}</p>

              <h3 className="mt-2 text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-1 text-white/60">
                {item.company}
              </p>

              <p className="mt-4 text-white/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}