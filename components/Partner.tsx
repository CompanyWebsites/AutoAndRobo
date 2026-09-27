const partners = [
  { title: "Technology companies", body: "Organizations with complementary technologies." },
  { title: "Manufacturers", body: "Companies capable of high-quality engineering manufacturing." },
  {
    title: "Research organizations",
    body: "Institutions working on advanced engineering and environmental technologies.",
  },
  { title: "Industrial customers", body: "Organizations seeking innovative technological solutions." },
  { title: "Distributors", body: "Partners interested in bringing our products to new markets." },
  {
    title: "Investors & strategic partners",
    body: "Organizations interested in technology commercialization and scalable engineering businesses.",
  },
  {
    title: "International partners",
    body: "Companies seeking technology, manufacturing or market opportunities in India and internationally.",
  },
];

export default function Partner() {
  return (
    <section id="partner" className="grid-dark">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <span className="font-mono text-sm text-copper">Partner with us</span>
        <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-paper md:text-5xl">
          Let&rsquo;s build the future together
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-0 border-t border-paper/10 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((p) => (
            <div key={p.title} className="border-b border-paper/10 py-8 pr-6 sm:odd:border-r sm:border-paper/10 lg:[&:nth-child(3n)]:border-r-0">
              <h4 className="font-display text-lg font-semibold text-paper">{p.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-paper/55">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start gap-6 border-t border-paper/10 pt-12 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-paper/70">
            Reach out to explore collaboration, licensing, manufacturing or
            distribution opportunities.
          </p>
          {/* TODO: replace with the company's real contact address */}
          <a
            href="mailto:info@thapakautomotive.example"
            className="inline-flex items-center gap-3 border border-copper/50 px-6 py-3 font-mono text-sm text-paper transition-colors hover:border-copper hover:bg-copper/15"
          >
            Start a conversation
          </a>
        </div>
      </div>
    </section>
  );
}
