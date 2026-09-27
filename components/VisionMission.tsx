const mission = [
  "Develop innovative engineering technologies.",
  "Advance automation and robotics.",
  "Explore next-generation aerospace and drone systems.",
  "Develop practical automotive and mechanical technologies.",
  "Commercialize proprietary and licensed technologies.",
  "Create environmentally responsible engineering solutions.",
  "Build products capable of serving Indian and international markets.",
  "Establish partnerships with technology, manufacturing and industrial organizations.",
];

export default function VisionMission() {
  return (
    <section className="grid-light rule-bottom">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-0 md:grid-cols-2">
        <div className="border-paper-line px-6 py-20 md:border-r md:pr-14">
          <span className="font-mono text-sm text-blueprint">Vision</span>
          <h3 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-graphite">
            To develop and commercialize advanced engineering technologies that
            create meaningful solutions for industry, society and the
            environment.
          </h3>
          <p className="mt-6 max-w-prose text-graphite/70">
            We aspire to build an Indian technology enterprise with capabilities
            spanning robotics, automation, aerospace, automotive engineering and
            clean technologies.
          </p>
        </div>

        <div className="px-6 py-20 md:pl-14">
          <span className="font-mono text-sm text-blueprint">Mission</span>
          <ol className="mt-4 flex flex-col">
            {mission.map((m, i) => (
              <li
                key={m}
                className="flex gap-4 border-t border-paper-line py-3.5 text-graphite/85 last:border-b"
              >
                <span className="font-mono text-sm text-graphite/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{m}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
