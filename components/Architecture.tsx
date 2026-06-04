const layers = [
  {
    name: "Frontend",
    items: ["Next.js", "React", "Tailwind", "Framer Motion"],
  },
  {
    name: "API Layer",
    items: ["Node.js", "Express", "REST Routes", "Authentication"],
  },
  {
    name: "Database",
    items: ["MongoDB", "Users", "Posts", "Events", "Dances"],
  },
  {
    name: "Future Intelligence",
    items: ["Recommendations", "Search", "Analytics", "Notifications"],
  },
];

export default function Architecture() {
  return (
    <section className="bg-black px-6 py-32 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-cyan-400">
          System Design
        </p>

        <h2 className="text-5xl font-bold md:text-7xl">
          Thinking beyond the UI.
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-white/60">
          My projects are designed as complete systems: frontend experience,
          backend architecture, data models, and future scalability.
        </p>

        <div className="mt-16 grid gap-6">
          {layers.map((layer, index) => (
            <div
              key={layer.name}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm text-cyan-400">
                    Layer {index + 1}
                  </p>

                  <h3 className="mt-2 text-3xl font-bold">
                    {layer.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {layer.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-cyan-500/30 px-4 py-2 text-sm text-white/70"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}