const focusAreas = [
  "Automation",
  "Robotics",
  "Automotive engineering",
  "Aerospace technologies",
  "Drone systems",
  "Jet-engine-powered drone concepts",
  "Advanced mechanical systems",
  "Air purification",
  "Technology commercialization",
];

export default function About() {
  return (
    <section id="about" className="grid-light rule-bottom">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="font-mono text-sm text-blueprint">01 — About us</span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-graphite md:text-5xl">
              Who we are
            </h2>
            <p className="mt-6 max-w-prose text-lg leading-relaxed text-graphite/70">
              Thapak Automotive and Robotics Pvt. Ltd. was established in 2018 with
              the objective of developing and working with advanced engineering
              technologies. We identify challenging problems, understand the
              underlying engineering principles, and develop practical
              technological solutions.
            </p>
            <p className="mt-4 max-w-prose text-lg leading-relaxed text-graphite/70">
              We believe the future belongs to technologies that combine
              engineering intelligence, automation, efficiency and sustainability.
            </p>
          </div>

          <div>
            <p className="font-mono text-[13px] uppercase tracking-normal text-graphite/50">
              Our activities span multiple technology domains
            </p>
            <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {focusAreas.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 border-t border-paper-line py-3 text-graphite/85"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-blueprint" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
