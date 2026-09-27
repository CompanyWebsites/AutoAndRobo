const applications = [
  { title: "Residential premises", body: "Homes, apartments and enclosed living spaces." },
  { title: "Offices", body: "Workplaces and enclosed commercial environments." },
  { title: "Schools & educational institutions", body: "Classrooms and other enclosed spaces." },
  {
    title: "Hospitals & healthcare facilities",
    body: "Selected applications subject to applicable healthcare standards and validation.",
  },
  { title: "Public buildings", body: "Enclosed areas in public and institutional buildings." },
  { title: "Industrial premises", body: "Selected enclosed industrial environments." },
  {
    title: "Transportation",
    body: "Potential applications in enclosed transportation environments, subject to engineering requirements.",
  },
  {
    title: "Rural & low-electricity areas",
    body: "Applications where reliable electricity availability is limited.",
  },
  {
    title: "Emergency & temporary structures",
    body: "Applications where conventional powered purification may not be practical.",
  },
];

export default function Applications() {
  return (
    <section className="grid-dark">
      <div className="mx-auto max-w-6xl px-6 pb-24">
        <p className="font-mono text-[13px] text-copper">Potential applications</p>
        <p className="mt-3 max-w-prose leading-relaxed text-paper/60">
          The air-purification technology may be evaluated for applications such as:
        </p>
        <div className="mt-10 grid grid-cols-1 gap-0 border-t border-paper/10 sm:grid-cols-2 lg:grid-cols-3">
          {applications.map((a) => (
            <div
              key={a.title}
              className="border-b border-r-0 border-paper/10 px-0 py-8 pr-6 sm:border-r lg:[&:nth-child(3n)]:border-r-0"
            >
              <h4 className="font-display text-lg font-semibold text-paper">{a.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-paper/55">{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
