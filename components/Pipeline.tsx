const stages = [
  "Patent / licensed technology",
  "Engineering evaluation",
  "Prototype",
  "Testing & validation",
  "Product engineering",
  "Manufacturing",
  "Certification / compliance",
  "Commercialization",
  "India & global markets",
];

export default function Pipeline() {
  return (
    <section className="grid-light rule-bottom">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <span className="font-mono text-sm text-blueprint">Technology development</span>
        <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-graphite md:text-5xl">
          From patent to product
        </h2>
        <p className="mt-6 max-w-prose text-lg leading-relaxed text-graphite/70">
          Our objective is to take licensed and proprietary technology from
          intellectual property to a scalable commercial product.
        </p>

        <ol className="mt-16 grid grid-cols-1 gap-x-6 gap-y-0 sm:grid-cols-3 lg:grid-cols-9">
          {stages.map((s, i) => (
            <li key={s} className="relative border-t-2 border-blueprint pt-5">
              <span className="font-mono text-xs text-graphite/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 pb-8 text-sm leading-snug text-graphite/85 lg:pr-2">{s}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
