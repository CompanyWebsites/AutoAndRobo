import Link from "next/link";
import { CTABanner, PageHero, Section } from "@/components/PageHero";
import { FocusIcon } from "@/components/Icons";
import { focusAreas } from "@/data/site";

export default function RenewableHub() {
  return (
    <>
      <PageHero title="Renewable Energy" subtitle="Six focus areas — hydropower, solar, wind, hybrid, storage and grid support — forming an integrated technology platform." />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((f) => (
            <Link key={f.slug} href={`/renewable/${f.slug}`} className="group rounded-[4px] border border-[#DCE1E6] bg-white p-6 hover:border-[#3E6B8A] transition-colors">
              <span className="flex h-10 w-10 items-center justify-center rounded-[4px] bg-[#F5F7FA] text-[#3E6B8A] group-hover:bg-[#0F1B2B] group-hover:text-[#D98E1F] transition-colors">
                <FocusIcon name={f.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-[16px] font-semibold text-[#0F1B2B]">{f.label}</h3>
              <p className="mt-1 text-[14px] leading-[1.6] text-[#5B6774]">{f.desc}</p>
              <span className="mt-4 inline-flex text-[13px] font-semibold text-[#3E6B8A]">Learn more →</span>
            </Link>
          ))}
        </div>
      </Section>
      <CTABanner title="Explore our projects using these technologies" href="/projects" ctaLabel="View Projects" />
    </>
  );
}
