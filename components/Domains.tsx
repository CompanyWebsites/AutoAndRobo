type Domain = {
  code: string;
  title: string;
  dek: string;
  body: string;
  items: string[];
};

const domains: Domain[] = [
  {
    code: "01",
    title: "Automation",
    dek: "A fundamental part of modern manufacturing and industrial development.",
    body: "Our objective is to reduce repetitive human effort, improve consistency and increase process efficiency.",
    items: [
      "Industrial automation",
      "Process automation",
      "Mechanical automation",
      "Automated equipment",
      "Control systems",
      "Automated material handling",
      "Smart machinery",
      "Customized automation solutions",
    ],
  },
  {
    code: "02",
    title: "Robotics",
    dek: "Intelligent machines for real-world applications.",
    body: "Robotics combines mechanical engineering, electronics, control systems, sensors and software to create machines capable of performing defined tasks. We explore robotics not merely as machines, but as complete engineering systems designed around specific applications.",
    items: [
      "Industrial robots",
      "Mobile robotic systems",
      "Automated machines",
      "Robotic mechanisms",
      "Autonomous systems",
      "Remote-controlled systems",
      "Customized robotic applications",
      "Robotics for specialized applications",
    ],
  },
  {
    code: "03",
    title: "Jet Engine & Drone Technology",
    dek: "Aerospace engineering and advanced drone systems.",
    body: "We are engaged in the exploration and development of advanced drone and aerospace technologies, including concepts involving jet-engine propulsion — bringing together propulsion, aerodynamics, structures, electronics, control and automation into advanced aerial systems.",
    items: [
      "Drone technology",
      "Unmanned aerial systems",
      "High-speed aerial platforms",
      "Jet-engine-powered drone concepts",
      "Propulsion systems",
      "Aerodynamic engineering",
      "Flight-control systems",
      "Structural engineering",
      "Payload integration",
    ],
  },
  {
    code: "04",
    title: "Automotive Technology",
    dek: "Engineering mobility.",
    body: "We explore opportunities where mechanical engineering, automation, robotics and intelligent systems can improve mobility and industrial applications.",
    items: [
      "Automotive systems",
      "Mechanical systems",
      "Vehicle automation",
      "Advanced mechanisms",
      "Energy-efficient systems",
      "Vehicle-related engineering",
      "Customized mechanical solutions",
      "Robotics and automation for automotive applications",
    ],
  },
  {
    code: "05",
    title: "Clean Technology",
    dek: "Technology for cleaner environments.",
    body: "One of our significant initiatives is the development and commercialization of innovative air-purification technology, positioned around air purification without conventional electrical power and without direct or indirect emissions, within the scope of the licensed technology and applicable operating conditions.",
    items: ["Air purification", "Technology commercialization"],
  },
];

const aerospaceStack = [
  "Propulsion",
  "Aerodynamics",
  "Structure",
  "Control",
  "Electronics",
  "Automation",
];

export default function Domains() {
  return (
    <section id="domains" className="grid-light rule-bottom">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <span className="font-mono text-sm text-blueprint">Technology domains</span>
        <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-graphite md:text-5xl">
          Five domains, one engineering discipline
        </h2>

        <div className="mt-16 flex flex-col">
          {domains.map((d) => (
            <article
              key={d.code}
              className="grid grid-cols-1 gap-8 border-t border-paper-line py-14 last:border-b md:grid-cols-[140px_1fr_1fr]"
            >
              <div className="flex md:flex-col md:items-start">
                <span className="font-mono text-6xl font-medium leading-none text-graphite/15 md:text-7xl">
                  {d.code}
                </span>
              </div>

              <div>
                <h3 className="font-display text-2xl font-semibold tracking-tight text-graphite">
                  {d.title}
                </h3>
                <p className="mt-2 font-mono text-[13px] text-blueprint">{d.dek}</p>
                <p className="mt-5 max-w-prose leading-relaxed text-graphite/70">{d.body}</p>

                {d.code === "03" && (
                  <div className="mt-8 flex flex-wrap items-center gap-2">
                    {aerospaceStack.map((s, i) => (
                      <span key={s} className="flex items-center gap-2">
                        <span className="border border-paper-line bg-paper px-3 py-1.5 font-mono text-[12px] text-graphite/80">
                          {s}
                        </span>
                        {i < aerospaceStack.length - 1 && (
                          <span className="text-graphite/30">+</span>
                        )}
                      </span>
                    ))}
                    <span className="pl-2 font-mono text-[12px] text-copper">
                      = advanced unmanned aerial systems
                    </span>
                  </div>
                )}
              </div>

              <ul className="flex flex-col gap-2 md:pt-1">
                {d.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-graphite/60"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 bg-steel" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
