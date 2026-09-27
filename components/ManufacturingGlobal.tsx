const manufacturingActivities = [
  "Product engineering",
  "Prototype manufacturing",
  "Component manufacturing",
  "Assembly",
  "Testing",
  "Quality control",
  "Production scaling",
  "Supply-chain development",
];

const globalActivities = [
  "Technology licensing",
  "Manufacturing partnerships",
  "Product distribution",
  "Export",
  "International sourcing",
  "Technology collaboration",
  "Strategic partnerships",
  "Overseas market development",
];

export default function ManufacturingGlobal() {
  return (
    <section className="grid-light rule-bottom">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-0 md:grid-cols-2">
        <div className="border-paper-line px-6 py-20 md:border-r md:pr-14">
          <span className="font-mono text-sm text-blueprint">Manufacturing</span>
          <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-graphite">
            From technology to product
          </h3>
          <p className="mt-5 max-w-prose leading-relaxed text-graphite/70">
            We aim to establish manufacturing capabilities and partnerships for
            technologies developed or licensed by the company, and we seek
            capable manufacturing partners who can help transform innovative
            technologies into reliable products.
          </p>
          <ul className="mt-6 flex flex-col">
            {manufacturingActivities.map((a) => (
              <li key={a} className="border-t border-paper-line py-3 text-sm text-graphite/70 last:border-b">
                {a}
              </li>
            ))}
          </ul>
        </div>

        <div className="px-6 py-20 md:pl-14">
          <span className="font-mono text-sm text-blueprint">Global business</span>
          <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-graphite">
            From India to the world
          </h3>
          <p className="mt-5 max-w-prose leading-relaxed text-graphite/70">
            Thapak Automotive and Robotics Pvt. Ltd. aims to develop technologies
            and products for both Indian and international markets. Our exclusive
            patent licence for the air-purification system provides an important
            platform for exploring domestic and international commercialization
            opportunities, subject to the geographic and other rights granted
            under the licence.
          </p>
          <ul className="mt-6 flex flex-col">
            {globalActivities.map((a) => (
              <li key={a} className="border-t border-paper-line py-3 text-sm text-graphite/70 last:border-b">
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
