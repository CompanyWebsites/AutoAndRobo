const industries = [
  "Manufacturing",
  "Automotive",
  "Aerospace",
  "Defence-related non-sensitive applications",
  "Robotics",
  "Industrial automation",
  "Environmental technology",
  "Buildings and infrastructure",
  "Healthcare",
  "Education",
  "Commercial facilities",
  "Transportation",
  "Research and development",
];

export default function Industries() {
  return (
    <section id="industries" className="grid-light rule-bottom">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <span className="font-mono text-sm text-blueprint">Industries & application areas</span>
        <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-graphite md:text-5xl">
          Where our platforms apply
        </h2>
        <p className="mt-6 max-w-prose text-lg leading-relaxed text-graphite/70">
          Specific applications depend upon the technology, technical
          specifications, regulatory requirements and validation.
        </p>

        <div className="mt-12 flex flex-wrap gap-3">
          {industries.map((ind) => (
            <span
              key={ind}
              className="border border-paper-line px-4 py-2 text-sm text-graphite/80"
            >
              {ind}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
