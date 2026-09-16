import { CTABanner, PageHero, Section } from "@/components/PageHero";

export default function CareersPage() {
  return (
    <>
      <PageHero title="Careers at Thapak Power" subtitle="Join an engineering-led team building renewable energy infrastructure in Madhya Pradesh." />
      <Section>
        <h2 className="text-[18px] font-bold tracking-[-0.02em] text-[#0F1B2B]">Why Work Here</h2>
        <p className="mt-3 max-w-[640px] text-[15px] leading-[1.6] text-[#5B6774]">Thapak Power offers the opportunity to work at the intersection of project development, intellectual property and R&amp;D — across hydropower, solar, wind, hybrid, storage and grid-support technologies. We value innovation, engineering excellence, research, reliability and long-term thinking.</p>
        <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-3">
          {["Innovation", "Engineering Excellence", "Research", "Reliability", "Long-Term Thinking", "Sustainability"].map((v) => (
            <div key={v} className="rounded-[4px] border border-[#DCE1E6] bg-[#F5F7FA] px-4 py-3 text-[14px] font-medium text-[#0F1B2B]">{v}</div>
          ))}
        </div>
      </Section>
      <Section surface>
        <h2 className="text-[18px] font-bold tracking-[-0.02em] text-[#0F1B2B]">General Interest</h2>
        <p className="mt-2 text-[14px] text-[#5B6774]">No specific roles are listed at this time. Submit your interest below and we will keep your profile on file.</p>
        <form className="mt-6 max-w-[560px] space-y-4 rounded-[4px] border border-[#DCE1E6] bg-white p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-[12px] font-semibold tracking-[0.04em] text-[#0F1B2B]">Full Name *</span>
              <input required placeholder="Your name" className="mt-1.5 h-11 w-full rounded-[4px] border border-[#DCE1E6] px-3 text-[14px] outline-none focus:border-[#D98E1F] focus:ring-2 focus:ring-[#D98E1F]/20" />
            </label>
            <label className="block">
              <span className="text-[12px] font-semibold tracking-[0.04em] text-[#0F1B2B]">Email *</span>
              <input required type="email" placeholder="you@company.com" className="mt-1.5 h-11 w-full rounded-[4px] border border-[#DCE1E6] px-3 text-[14px] outline-none focus:border-[#D98E1F] focus:ring-2 focus:ring-[#D98E1F]/20" />
            </label>
          </div>
          <label className="block">
            <span className="text-[12px] font-semibold tracking-[0.04em] text-[#0F1B2B]">Area of Interest *</span>
            <select required className="mt-1.5 h-11 w-full rounded-[4px] border border-[#DCE1E6] bg-white px-3 text-[14px] outline-none focus:border-[#D98E1F]">
              <option value="">Select an area</option>
              <option>Hydropower</option><option>Solar Energy</option><option>Wind Energy</option><option>Hybrid</option><option>Energy Storage</option><option>Grid Support</option><option>R&amp;D</option><option>Project Development</option>
            </select>
          </label>
          <label className="block">
            <span className="text-[12px] font-semibold tracking-[0.04em] text-[#0F1B2B]">Message</span>
            <textarea rows={3} placeholder="Tell us about your background..." className="mt-1.5 w-full rounded-[4px] border border-[#DCE1E6] px-3 py-2.5 text-[14px] outline-none focus:border-[#D98E1F] focus:ring-2 focus:ring-[#D98E1F]/20" />
          </label>
          <label className="flex items-start gap-2 text-[12px] text-[#5B6774]">
            <input type="checkbox" required className="mt-0.5" /> I agree to the Privacy Policy *
          </label>
          <button type="submit" className="inline-flex h-11 items-center rounded-[4px] bg-[#D98E1F] px-7 text-[14px] font-semibold text-[#0F1B2B] hover:bg-[#BE7D19] transition-colors">Submit Interest</button>
        </form>
      </Section>
      <CTABanner title="Have questions about working with us?" />
    </>
  );
}
