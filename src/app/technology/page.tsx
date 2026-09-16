import { CTABanner, PageHero, Section } from "@/components/PageHero";
import { patentTechs } from "@/data/site";

export default function TechnologyPage() {
  return (
    <>
      <PageHero title="Technology & Intellectual Property" subtitle="Proprietary IP and exclusive patent-licensed technologies across wind, grid support, storage and solar thermal." />
      <Section>
        <p className="max-w-[680px] text-[16px] leading-[1.7] text-[#5B6774]">
          Thapak Power holds proprietary IP assets and exclusive patent licenses covering wind turbine technology, grid-fluctuation reduction, short-time power storage and solar thermal power & storage. These technologies form the core technical differentiation supporting our project pipeline.
        </p>
      </Section>
      <Section surface>
        <h2 className="text-[20px] font-bold tracking-[-0.02em] text-[#0F1B2B]">Patent-Licensed Technologies</h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {patentTechs.map((t) => (
            <div key={t.title} className="rounded-[4px] border border-[#DCE1E6] bg-white p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-[4px] bg-[#0F1B2B] text-[#D98E1F]">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /></svg>
              </div>
              <h3 className="mt-4 text-[15px] font-semibold text-[#0F1B2B]">{t.title}</h3>
              <p className="mt-1.5 text-[14px] leading-[1.6] text-[#5B6774]">{t.desc}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section dark>
        <h2 className="text-center text-[20px] font-bold tracking-[-0.02em] text-white">Renewable Energy Technology Platform</h2>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {[
            { title: "Renewable Generation", flow: "Solar / Wind / Hydro → Power Generation" },
            { title: "Hybrid Generation", flow: "Solar + Wind → Hybrid Power" },
            { title: "Energy Storage", flow: "Renewable Generation → Storage → Controlled Delivery" },
            { title: "Grid Support", flow: "Generation Fluctuation → Grid Support Tech → Improved Grid Performance" },
          ].map((f) => (
            <div key={f.title} className="rounded-[4px] border border-[#2C3E52] bg-white/[0.04] p-6">
              <p className="text-[13px] font-semibold tracking-[0.04em] text-[#D98E1F]">{f.title.toUpperCase()}</p>
              <p className="mt-2 font-mono text-[13px] leading-[1.5] text-[#E7EBEF]">{f.flow}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section surface>
        <h2 className="text-[18px] font-bold tracking-[-0.02em] text-[#0F1B2B]">Future Technology Roadmap</h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-4">
          {[
            ["Renewable Generation", ["Solar PV advances", "Wind turbine optimization", "Hydro efficiency"]],
            ["Hybrid Systems", ["Solar–wind integration", "Hybrid control systems"]],
            ["Storage", ["Short-time storage", "Thermal storage", "Controlled dispatch"]],
            ["Grid Technologies", ["Fluctuation reduction", "Grid stability systems"]],
          ].map(([title, items]) => (
            <div key={title as string}>
              <p className="text-[12px] font-semibold tracking-[0.08em] text-[#3E6B8A]">{title as string}</p>
              <ul className="mt-3 space-y-1.5">
                {(items as string[]).map((it) => (
                  <li key={it} className="text-[13px] text-[#5B6774]">· {it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
      <CTABanner title="Interested in technology licensing or partnership?" />
    </>
  );
}
