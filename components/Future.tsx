const roadmap = [
  "Automation",
  "Robotics",
  "Automotive engineering",
  "Aerospace & drones",
  "Clean technology",
  "Advanced engineering",
  "Technology commercialization",
];

export default function Future() {
  return (
    <section className="grid-light">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <span className="font-mono text-sm text-blueprint">Our future</span>
        <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-graphite md:text-5xl">
          Engineering the next generation
        </h2>
        <p className="mt-6 max-w-prose text-lg leading-relaxed text-graphite/70">
          We are building a technology platform around multiple future-oriented
          engineering domains — technologies that are not only innovative, but
          also practical, scalable and commercially useful.
        </p>

        <div className="mt-14 flex flex-wrap items-center gap-x-3 gap-y-4">
          {roadmap.map((r, i) => (
            <span key={r} className="flex items-center gap-3">
              <span className="border border-blueprint/40 px-4 py-2 font-mono text-sm text-blueprint-dim">
                {r}
              </span>
              {i < roadmap.length - 1 && <span className="text-graphite/25">/</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
