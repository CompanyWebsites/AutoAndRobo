import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/Badge";
import { CTABanner, PageHero, Section } from "@/components/PageHero";
import { FocusIcon } from "@/components/Icons";
import { focusAreas, projects } from "@/data/site";

const details: Record<string, { role: string; overview: string; relatedTech: string }> = {
  hydropower: { role: "Hydro → Power Generation", overview: "Hydropower generation leveraging run-of-river and reservoir resources — including the Bina Hydropower Project currently in land acquisition phase.", relatedTech: "Grid Support & Storage integration for dispatchable hydro output." },
  "solar-energy": { role: "Solar → Power Generation", overview: "Utility-scale solar PV and solar thermal generation, including the 100 MW Budhni Solar Thermal plant with integrated thermal storage.", relatedTech: "Solar Thermal Power & Storage — patent-licensed technology." },
  "wind-energy": { role: "Wind → Power Generation · Solar + Wind → Hybrid", overview: "Wind generation supported by exclusive patent-licensed wind turbine technology — deployed in the 50 MW Tamia hybrid plant.", relatedTech: "Wind Turbine Technology — exclusive patent license." },
  hybrid: { role: "Solar + Wind → Hybrid Power", overview: "Hybrid renewable generation combining solar and wind for firmer, more predictable output — as demonstrated by the Tamia project.", relatedTech: "Hybrid control and grid-support integration." },
  storage: { role: "Generation → Storage → Controlled Delivery", overview: "Short-time and thermal energy storage enabling controlled delivery and bridging intermittency across the portfolio.", relatedTech: "Short-Time Power Storage & Solar Thermal Storage technologies." },
  "grid-support": { role: "Fluctuation → Grid Support Tech → Grid Performance", overview: "Technologies that reduce generation fluctuation and improve grid stability and power quality.", relatedTech: "Grid Fluctuation Reduction Technology — patent-licensed." },
};

export function generateStaticParams() {
  return focusAreas.map((f) => ({ slug: f.slug }));
}

export default async function FocusPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = focusAreas.find((f) => f.slug === slug);
  if (!area) notFound();
  const d = details[slug] ?? { role: "", overview: "", relatedTech: "" };
  const relatedProjects = projects.filter((p) => p.technologies.some((t) => area.label.toLowerCase().includes(t.toLowerCase()) || t.toLowerCase().includes(area.label.toLowerCase().split(" ")[0])));

  return (
    <>
      <PageHero title={area.label} subtitle={d.role} breadcrumb={[{ label: "Home", href: "/" }, { label: "Renewable Energy", href: "/renewable" }, { label: area.label, href: `/renewable/${slug}` }]} />
      <Section>
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[4px] bg-[#0F1B2B] text-[#D98E1F]">
            <FocusIcon name={area.icon} className="h-6 w-6" />
          </span>
          <div>
            <p className="max-w-[640px] text-[16px] leading-[1.7] text-[#5B6774]">{d.overview}</p>
            <p className="mt-4 max-w-[640px] text-[14px] leading-[1.6] text-[#5B6774]">Detailed technical content for {area.label} will be expanded once confirmed. The platform relationship below reflects the current verified scope.</p>
          </div>
        </div>
        <div className="mt-8 rounded-[4px] border border-[#DCE1E6] bg-[#F5F7FA] p-6">
          <p className="text-[11px] font-semibold tracking-[0.08em] text-[#5B6774]">PLATFORM ROLE</p>
          <p className="mt-2 font-mono text-[14px] text-[#0F1B2B]">{d.role}</p>
          <p className="mt-3 text-[13px] text-[#5B6774]">Related IP: {d.relatedTech}</p>
        </div>
      </Section>
      {relatedProjects.length > 0 && (
        <Section surface>
          <h2 className="text-[16px] font-semibold text-[#0F1B2B]">Related Projects</h2>
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            {relatedProjects.map((p) => (
              <Link key={p.slug} href={`/projects/${p.slug}`} className="rounded-[4px] border border-[#DCE1E6] bg-white p-5 hover:border-[#3E6B8A] transition-colors">
                <Badge variant={p.statusVariant === "warning" ? "warning" : "success"}>{p.status}</Badge>
                <p className="mt-2 text-[15px] font-semibold text-[#0F1B2B]">{p.name}</p>
                <p className="text-[13px] text-[#5B6774]">{p.shortLocation} · {p.capacity}</p>
              </Link>
            ))}
          </div>
        </Section>
      )}
      <CTABanner title={`Questions about ${area.label}?`} />
    </>
  );
}
