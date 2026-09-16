import { CTABanner, PageHero, Section } from "@/components/PageHero";

export default function SustainabilityPage() {
  return (
    <>
      <PageHero title="Sustainability" subtitle="Our commitment to sustainable, technology-driven renewable energy development and India's clean energy transition." />
      <Section>
        <p className="max-w-[680px] text-[16px] leading-[1.7] text-[#5B6774]">
          Thapak Power&apos;s sustainability commitment is grounded in its core mission: developing renewable energy projects that integrate solar, wind and hydro with energy storage, supporting grid performance and contributing to India&apos;s sustainable energy transition.
        </p>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {[
            { title: "Clean Generation", desc: "Renewable generation across hydro, solar, wind and hybrid — displacing fossil-based power." },
            { title: "Storage & Grid Support", desc: "Energy storage and fluctuation-reduction technology enabling reliable, dispatchable renewable power." },
            { title: "Long-Term Discipline", desc: "Project development with engineering rigor, transparency and lifecycle responsibility." },
          ].map((c) => (
            <div key={c.title} className="rounded-[4px] border border-[#DCE1E6] bg-[#F5F7FA] p-6">
              <h3 className="text-[14px] font-semibold text-[#0F1B2B]">{c.title}</h3>
              <p className="mt-1.5 text-[13px] leading-[1.6] text-[#5B6774]">{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-[4px] border border-[#DCE1E6] bg-white p-6">
          <p className="text-[13px] font-medium text-[#5B6774]">Detailed sustainability policy, environmental practices and ESG data will be published here once confirmed. No specific environmental claims beyond the mission statement above are made at this stage.</p>
        </div>
      </Section>
      <CTABanner title="Learn more about our approach" />
    </>
  );
}
