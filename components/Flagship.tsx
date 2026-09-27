const characteristics = [
  {
    n: "1",
    title: "No electricity",
    body: "The system is designed to operate without conventional electrical power.",
  },
  {
    n: "2",
    title: "No direct emission",
    body: "The system is designed without direct emissions as part of its operating principle.",
  },
  {
    n: "3",
    title: "No indirect emission",
    body: "The system is designed to avoid indirect emissions associated with conventional electricity-dependent operation, subject to actual system configuration and life-cycle considerations.",
  },
];

const advantages = [
  "Operation without conventional electrical power",
  "Reduced dependence on electricity",
  "No direct operational emissions",
  "Potentially reduced indirect emissions associated with electricity consumption",
  "Suitability for applications where electrical power is unavailable or undesirable",
  "Potential for passive or low-energy operation, depending on configuration",
];

export default function Flagship() {
  return (
    <section id="flagship" className="grid-dark rule-bottom-dark">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <span className="font-mono text-sm text-copper">Flagship technology</span>
        <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-paper md:text-5xl">
          Air purification for closed premises, without electricity
        </h2>
        <p className="mt-6 max-w-prose text-lg leading-relaxed text-paper/70">
          Thapak Automotive and Robotics Pvt. Ltd. holds an exclusive patent licence
          to manufacture and trade an air-purification system designed for closed
          premises without electricity, and without direct or indirect emissions,
          subject to the scope and terms of the applicable patent licence. It
          represents a fundamentally different approach — seeking to operate
          without dependence on conventional electrical power for the purification
          process.
        </p>

        {/* Key concept diagram */}
        <div className="mt-16 flex flex-col items-stretch gap-0 border border-paper/10 md:flex-row">
          {["Closed premises", "Air purification system", "Purified / improved air"].map(
            (step, i, arr) => (
              <div
                key={step}
                className="flex flex-1 items-center justify-between gap-4 border-b border-paper/10 px-6 py-8 md:border-b-0 md:border-r md:last:border-r-0"
              >
                <span className="font-mono text-lg text-paper">{step}</span>
                {i < arr.length - 1 && (
                  <span className="hidden font-mono text-copper md:inline" aria-hidden>
                    →
                  </span>
                )}
              </div>
            )
          )}
        </div>

        {/* Three core characteristics */}
        <div className="mt-20 grid grid-cols-1 gap-0 border-t border-paper/10 md:grid-cols-3">
          {characteristics.map((c) => (
            <div
              key={c.n}
              className="flex flex-col gap-4 border-b border-paper/10 px-0 py-10 md:border-b-0 md:border-r md:border-paper/10 md:px-8 md:last:border-r-0"
            >
              <span className="font-mono text-4xl text-copper/70">{c.n}</span>
              <h3 className="font-display text-xl font-semibold text-paper">{c.title}</h3>
              <p className="text-paper/65 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>

        {/* Why different */}
        <div className="mt-24 grid grid-cols-1 gap-14 md:grid-cols-2">
          <div>
            <h3 className="font-display text-2xl font-semibold tracking-tight text-paper">
              A different approach to air purification
            </h3>
            <p className="mt-5 max-w-prose leading-relaxed text-paper/70">
              Conventional air-purification systems frequently depend upon
              electrically powered fans, blowers, filters, ionization systems or
              other electrically operated components. The question this
              technology addresses: can air inside closed premises be purified
              without relying on conventional electricity-driven purification?
              The licensed technology seeks to provide an answer through its
              patented engineering approach.
            </p>
          </div>
          <div>
            <p className="font-mono text-[13px] text-copper">Potential advantages</p>
            <ul className="mt-4 flex flex-col">
              {advantages.map((a) => (
                <li
                  key={a}
                  className="border-t border-paper/10 py-3.5 text-paper/80 last:border-b"
                >
                  {a}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-paper/45">
              Actual performance, applications, limitations and environmental
              claims should always be presented according to the patent, licence,
              validated testing and applicable technical evidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
