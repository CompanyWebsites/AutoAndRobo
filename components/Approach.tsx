const rdInterests = [
  "Automation",
  "Robotics",
  "Mechanical engineering",
  "Automotive technology",
  "Drone technology",
  "Aerospace engineering",
  "Propulsion",
  "Air purification",
  "Environmental engineering",
  "Product development",
  "Technology integration",
];

const stacks = [
  { name: "Robotics", parts: ["Mechanical systems", "Electronics", "Control", "Automation"] },
  { name: "Drones", parts: ["Aerodynamics", "Propulsion", "Structures", "Electronics", "Control"] },
  {
    name: "Automotive",
    parts: ["Mechanical engineering", "Automation", "Electronics", "Intelligent systems"],
  },
  {
    name: "Air purification",
    parts: ["Fluid dynamics", "Mechanical engineering", "Environmental science", "Product engineering"],
  },
];

const capabilities = ["Engineered", "Manufactured", "Tested", "Validated", "Scaled", "Maintained", "Commercialized"];

export default function Approach() {
  return (
    <section className="grid-light rule-bottom">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <div>
            <span className="font-mono text-sm text-blueprint">Engineering approach</span>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-graphite">
              From concept to commercial technology
            </h2>
            <p className="mt-5 max-w-prose leading-relaxed text-graphite/70">
              A technology becomes commercially meaningful only when it can be
              taken all the way through:
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {capabilities.map((c) => (
                <span
                  key={c}
                  className="border border-paper-line px-3 py-1.5 font-mono text-[12px] text-graphite/75"
                >
                  {c}
                </span>
              ))}
            </div>
            <p className="mt-6 max-w-prose leading-relaxed text-graphite/70">
              Our engineering approach considers both the scientific and technical
              principle and its practical implementation.
            </p>

            <div className="mt-10 border-t border-paper-line pt-8">
              <span className="font-mono text-sm text-blueprint">Research & development</span>
              <p className="mt-3 max-w-prose leading-relaxed text-graphite/70">
                We encourage multidisciplinary engineering, because many of
                today&rsquo;s difficult problems cannot be solved within a single
                technological discipline. Our R&amp;D interests span:
              </p>
              <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                {rdInterests.map((r) => (
                  <li key={r} className="text-sm text-graphite/60">
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <span className="font-mono text-sm text-blueprint">Integrated technology</span>
            <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-graphite">
              Where different technologies meet
            </h3>
            <p className="mt-4 max-w-prose leading-relaxed text-graphite/70">
              Our technology portfolio is deliberately multidisciplinary — enabling
              solutions that may not be possible through a single engineering
              discipline.
            </p>

            <div className="mt-8 flex flex-col gap-6">
              {stacks.map((s) => (
                <div key={s.name} className="border-t border-paper-line pt-5">
                  <p className="font-display text-lg font-semibold text-graphite">{s.name}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    {s.parts.map((p, i) => (
                      <span key={p} className="flex items-center gap-2">
                        <span className="bg-blueprint/8 px-2.5 py-1 font-mono text-[12px] text-blueprint-dim">
                          {p}
                        </span>
                        {i < s.parts.length - 1 && <span className="text-graphite/25">+</span>}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
