import { CTABanner, PageHero, Section } from "@/components/PageHero";

const activities = [
  "Renewable-energy technologies",
  "Wind-turbine technologies",
  "Solar-energy systems",
  "Solar thermal systems",
  "Energy-storage technologies",
  "Grid-support systems",
  "Hybrid power-generation systems",
  "Engineering and technology integration",
  "Testing and performance evaluation",
  "Product and system improvement",
];

export default function ResearchPage() {
  return (
    <>
      <PageHero title="Research & Development" subtitle="In-house R&D and testing facility supporting study, development, evaluation and improvement of renewable-energy and power-system technologies." />
      <Section>
        <p className="max-w-[680px] text-[16px] leading-[1.7] text-[#5B6774]">
          Thapak Power operates an in-house R&amp;D and testing facility for the study, development, evaluation and improvement of renewable-energy and power-system technologies. The facility enables continuous refinement across wind, solar, storage and grid-support platforms.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {activities.map((a) => (
            <div key={a} className="flex items-center gap-3 rounded-[4px] border border-[#DCE1E6] bg-[#F5F7FA] px-4 py-3">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#D98E1F]" />
              <span className="text-[14px] text-[#0F1B2B]">{a}</span>
            </div>
          ))}
        </div>
      </Section>
      <Section surface>
        <h2 className="text-[18px] font-bold tracking-[-0.02em] text-[#0F1B2B]">Engineering & Technology Development Capabilities</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {["Technology Development", "Engineering", "Project Development", "Technology Integration", "Testing & Validation"].map((c) => (
            <div key={c} className="rounded-[4px] border border-[#DCE1E6] bg-white p-5 text-center">
              <span className="text-[13px] font-semibold text-[#0F1B2B]">{c}</span>
            </div>
          ))}
        </div>
      </Section>
      <Section>
        <div className="flex h-[220px] items-center justify-center rounded-[4px] border border-dashed border-[#DCE1E6] bg-[#F5F7FA]">
          <span className="text-[12px] tracking-[0.06em] text-[#5B6774]">R&amp;D / TESTING FACILITY IMAGE — TO BE SUPPLIED</span>
        </div>
      </Section>
      <CTABanner title="Interested in research collaboration?" />
    </>
  );
}
