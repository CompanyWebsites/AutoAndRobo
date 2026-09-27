const questions = [
  { q: "Can it work?", a: "Technical feasibility." },
  { q: "Can it be built?", a: "Engineering and manufacturing feasibility." },
  { q: "Can it create value?", a: "Commercial and practical feasibility." },
];

export default function Philosophy() {
  return (
    <section className="grid-dark rule-bottom-dark">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <span className="font-mono text-sm text-blueprint-tint">Our technology philosophy</span>
        <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-paper md:text-5xl">
          Think different. Engineer precisely. Build practically.
        </h2>
        <p className="mt-6 max-w-prose text-lg leading-relaxed text-paper/65">
          We believe technological innovation should answer three questions before
          it moves from concept to application.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-0 border-t border-paper/10 md:grid-cols-3">
          {questions.map((item, i) => (
            <div
              key={item.q}
              className="border-b border-paper/10 py-10 pr-8 md:border-b-0 md:border-r md:border-paper/10 md:last:border-r-0"
            >
              <span className="font-mono text-sm text-paper/35">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-4 font-display text-2xl font-semibold text-paper">{item.q}</p>
              <p className="mt-3 text-paper/60">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
