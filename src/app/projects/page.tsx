import Link from "next/link";
import { Badge } from "@/components/Badge";
import { CTABanner, PageHero, Section } from "@/components/PageHero";
import { Stepper } from "@/components/Stepper";
import { projects } from "@/data/site";

export default function ProjectsPage() {
  return (
    <>
      <PageHero title="Our Projects" subtitle="Renewable energy infrastructure under development across Madhya Pradesh — with honest, verifiable status on every project." />
      <Section>
        <h2 className="text-[18px] font-bold tracking-[-0.02em] text-[#0F1B2B]">Project Portfolio</h2>
        <div className="mt-6 overflow-hidden rounded-[4px] border border-[#DCE1E6]">
          <div className="hidden overflow-auto lg:block">
            <table className="w-full text-left text-[14px]">
              <thead className="bg-[#F5F7FA] text-[11px] font-semibold tracking-[0.08em] text-[#5B6774]">
                <tr>
                  <th className="px-5 py-3">Project</th>
                  <th className="px-5 py-3">Location</th>
                  <th className="px-5 py-3">Technology</th>
                  <th className="px-5 py-3">Capacity</th>
                  <th className="px-5 py-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DCE1E6]">
                {projects.map((p) => (
                  <tr key={p.slug} className="hover:bg-[#F5F7FA]/50">
                    <td className="px-5 py-4 font-semibold text-[#0F1B2B]"><Link href={`/projects/${p.slug}`} className="hover:text-[#3E6B8A]">{p.name}</Link></td>
                    <td className="px-5 py-4 text-[#5B6774]">{p.shortLocation}</td>
                    <td className="px-5 py-4 text-[#5B6774]">{p.technology}</td>
                    <td className="px-5 py-4 font-mono text-[#0F1B2B]">{p.capacity}</td>
                    <td className="px-5 py-4"><Badge variant={p.statusVariant === "warning" ? "warning" : "success"}>{p.status}</Badge></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="divide-y divide-[#DCE1E6] lg:hidden">
            {projects.map((p) => (
              <div key={p.slug} className="p-5">
                <Link href={`/projects/${p.slug}`} className="text-[15px] font-semibold text-[#0F1B2B]">{p.name}</Link>
                <dl className="mt-3 grid grid-cols-2 gap-2 text-[13px]">
                  <div><dt className="text-[#5B6774]">Location</dt><dd className="font-medium">{p.shortLocation}</dd></div>
                  <div><dt className="text-[#5B6774]">Capacity</dt><dd className="font-mono font-medium">{p.capacity}</dd></div>
                  <div className="col-span-2"><dt className="text-[#5B6774]">Technology</dt><dd>{p.technology}</dd></div>
                  <div className="col-span-2 mt-1"><Badge variant={p.statusVariant === "warning" ? "warning" : "success"}>{p.status}</Badge></div>
                </dl>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section surface>
        <h2 className="text-[18px] font-bold tracking-[-0.02em] text-[#0F1B2B]">Project Details</h2>
        <div className="mt-6 space-y-6">
          {projects.map((p, idx) => (
            <div key={p.slug} className={`flex flex-col gap-6 rounded-[4px] border border-[#DCE1E6] bg-white p-6 lg:flex-row lg:items-center lg:p-0 lg:overflow-hidden ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <div className="flex h-[160px] shrink-0 items-center justify-center bg-[#F5F7FA] px-8 lg:h-[240px] lg:w-[340px]">
                <span className="text-center text-[12px] font-medium tracking-[0.06em] text-[#5B6774]">MAP / SITE IMAGE<br /><span className="text-[11px] font-normal">{p.shortLocation}</span></span>
              </div>
              <div className="flex-1 lg:px-8 lg:py-6">
                <Badge variant={p.statusVariant === "warning" ? "warning" : "success"}>{p.status}</Badge>
                <h3 className="mt-3 text-[18px] font-semibold text-[#0F1B2B]">{p.name}</h3>
                <p className="mt-1 text-[13px] text-[#5B6774]">{p.location} · {p.technology} · {p.capacity}</p>
                <p className="mt-3 text-[14px] leading-[1.6] text-[#5B6774]">{p.description}</p>
                <div className="mt-5">
                  <Stepper steps={p.steps} />
                </div>
                <Link href={`/projects/${p.slug}`} className="mt-5 inline-flex h-10 items-center rounded-[4px] bg-[#0F1B2B] px-5 text-[13px] font-semibold text-white hover:bg-[#1A2E4A] transition-colors">
                  View Project Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CTABanner title="Interested in project partnership or verification inquiries?" subtitle="Contact us for HDA, DPR or site-related information." />
    </>
  );
}
