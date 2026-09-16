import { CTABanner, PageHero, Section } from "@/components/PageHero";
import { mission, values, vision, whyPoints } from "@/data/site";

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Thapak Power" subtitle="A technology- and IP-driven renewable energy developer building power infrastructure across Madhya Pradesh, India." />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.85fr]">
          <div>
            <h2 className="text-[22px] font-bold tracking-[-0.02em] text-[#0F1B2B]">Company Overview</h2>
            <p className="mt-4 max-w-[680px] text-[16px] leading-[1.7] text-[#5B6774]">
              Thapak Power Pvt. Ltd., founded in 2018, is a technology-driven power and renewable energy company working across hydropower, solar, wind, hybrid systems, energy storage and grid-support technology. We combine project development, proprietary intellectual property and in-house R&amp;D and testing to develop scalable, reliable energy infrastructure.
            </p>
            <p className="mt-3 max-w-[680px] text-[16px] leading-[1.7] text-[#5B6774]">
              Our work sits between a pure EPC / independent power producer and a technology licensor — positioned as an engineering-led developer with a genuine technical moat: exclusive patent-licensed technologies for wind turbines, grid-fluctuation reduction, short-time storage and solar thermal storage.
            </p>
          </div>
          <div className="rounded-[4px] border border-[#DCE1E6] bg-[#F5F7FA] p-6">
            <p className="text-[11px] font-semibold tracking-[0.1em] text-[#5B6774]">FACT SHEET</p>
            <dl className="mt-4 space-y-3 text-[14px]">
              <div className="flex justify-between border-b border-[#DCE1E6] pb-3"><dt className="text-[#5B6774]">Legal Name</dt><dd className="font-medium text-[#0F1B2B]">Thapak Power Pvt. Ltd.</dd></div>
              <div className="flex justify-between border-b border-[#DCE1E6] pb-3"><dt className="text-[#5B6774]">Founded</dt><dd className="font-medium text-[#0F1B2B]">2018</dd></div>
              <div className="flex justify-between border-b border-[#DCE1E6] pb-3"><dt className="text-[#5B6774]">Headquarters</dt><dd className="font-medium text-[#0F1B2B]">Madhya Pradesh, India</dd></div>
              <div className="flex justify-between"><dt className="text-[#5B6774]">Active Projects</dt><dd className="font-medium text-[#0F1B2B]">3</dd></div>
            </dl>
          </div>
        </div>
      </Section>

      <Section surface>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[4px] border border-[#DCE1E6] bg-white p-7">
            <p className="text-[11px] font-semibold tracking-[0.12em] text-[#3E6B8A]">VISION</p>
            <p className="mt-3 text-[18px] font-medium leading-[1.5] text-[#0F1B2B]">“{vision}”</p>
          </div>
          <div className="rounded-[4px] border border-[#DCE1E6] bg-white p-7">
            <p className="text-[11px] font-semibold tracking-[0.12em] text-[#3E6B8A]">MISSION</p>
            <ul className="mt-3 space-y-2">
              {mission.map((m) => (
                <li key={m} className="flex gap-2 text-[14px] leading-[1.6] text-[#5B6774]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D98E1F]" />{m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-[22px] font-bold tracking-[-0.02em] text-[#0F1B2B]">Our Values</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {values.map((v) => (
            <div key={v} className="rounded-[4px] border border-[#DCE1E6] bg-[#F5F7FA] px-5 py-5 text-center">
              <span className="text-[14px] font-semibold text-[#0F1B2B]">{v}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section surface>
        <h2 className="text-[22px] font-bold tracking-[-0.02em] text-[#0F1B2B]">Why Thapak Power</h2>
        <div className="mt-6 space-y-5">
          {whyPoints.map((w, i) => (
            <div key={w.title} className="flex gap-5 rounded-[4px] border border-[#DCE1E6] bg-white p-6">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[4px] bg-[#0F1B2B] text-[13px] font-bold text-white">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-[15px] font-semibold text-[#0F1B2B]">{w.title}</h3>
                <p className="mt-1 text-[14px] leading-[1.6] text-[#5B6774]">{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-[4px] border border-[#DCE1E6] bg-[#F5F7FA] p-8 text-center">
          <h2 className="text-[18px] font-bold text-[#0F1B2B]">Leadership & Team</h2>
          <p className="mx-auto mt-2 max-w-[520px] text-[14px] leading-[1.6] text-[#5B6774]">Leadership profiles will appear here once confirmed. Thapak Power is an engineering-led organization — detail on key technical and project leadership is being prepared.</p>
          <p className="mt-3 text-[12px] font-medium tracking-[0.04em] text-[#3E6B8A]">Information to be supplied by Thapak Power.</p>
        </div>
      </Section>

      <CTABanner title="Get in touch with our team" />
    </>
  );
}
