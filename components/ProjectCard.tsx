type ProjectCardProps = {
  title: string;
  type: string;
  description: string;
  stack: string[];
};

export default function ProjectCard({
  title,
  type,
  description,
  stack,
}: ProjectCardProps) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:-translate-y-2 hover:border-cyan-400/50 hover:bg-cyan-400/10">
      <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
        {type}
      </p>

      <h3 className="text-3xl font-bold text-white">{title}</h3>

      <p className="mt-5 text-white/60">{description}</p>

      <div className="mt-8 flex flex-wrap gap-3">
        {stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/70"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}