import { CTABanner, PageHero, Section } from "@/components/PageHero";

export default function NewsPage() {
  return (
    <>
      <PageHero title="News & Insights" subtitle="Updates on project milestones, technology developments and renewable energy in India." />
      <Section>
        <div className="rounded-[4px] border border-[#DCE1E6] bg-[#F5F7FA] px-6 py-10 text-center">
          <p className="text-[15px] font-medium text-[#0F1B2B]">We&apos;re preparing updates on our latest project milestones and technology developments.</p>
          <p className="mt-2 text-[13px] text-[#5B6774]">Check back soon — articles will appear here as they are published.</p>
        </div>
        <div className="mt-8 grid gap-6 opacity-40 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-[4px] border border-dashed border-[#DCE1E6] bg-white p-6">
              <span className="rounded-[2px] bg-[#F5F7FA] px-2 py-1 text-[11px] font-medium text-[#5B6774]">Article placeholder</span>
              <p className="mt-3 h-4 w-3/4 rounded bg-[#F5F7FA]" />
              <p className="mt-2 h-3 w-full rounded bg-[#F5F7FA]" />
              <p className="mt-1 h-3 w-5/6 rounded bg-[#F5F7FA]" />
            </div>
          ))}
        </div>
      </Section>
      <CTABanner title="Media inquiries?" subtitle="Contact us for press and information requests." />
    </>
  );
}
