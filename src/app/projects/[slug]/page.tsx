import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/Badge";
import { CTABanner, Section } from "@/components/PageHero";
import { Stepper } from "@/components/Stepper";
import { projects } from "@/data/site";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  const others = projects.filter((p) => p.slug !== slug);

  return (
    <>
      <div className="bg-[#0F1B2B]">
        <div className="mx-auto max-w-[1280px] px-5 py-8 lg:px-16 lg:py-10">
          <nav className="mb-3 flex items-center gap-1.5 text-[12px] text-[#A9B4BF]">
            <Link href="/" className="hover:text-white">Home</Link><span className="text-[#5B6774]">/</span>
            <Link href="/projects" className="hover:text-white">Projects</Link><span className="text-[#5B6774]">/</span>
            <span className="text-white">{project.name}</span>
          </nav>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-[28px] font-bold leading-[1.15] tracking-[-0.02em] text-white lg:text-[40px]">{project.name}</h1>
            <Badge variant={project.statusVariant === "warning" ? "warning" : "success"}>{project.status}</Badge>
          </div>
          <p className="mt-2 text-[14px] text-[#A9B4BF]">{project.location} · {project.technology} · <span className="font-mono text-white">{project.capacity}</span></p>
        </div>
        <div className="flex h-[160px] items-center justify-center border-t border-[#2C3E52] bg-[#08111C] lg:h-[220px]">
          <span className="text-[12px] font-medium tracking-[0.08em] text-[#5B6774]">SITE / TERRAIN IMAGE — {project.shortLocation.toUpperCase()}</span>
        </div>
      </div>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[320px_1fr]">
          <div className="rounded-[4px] border border-[#DCE1E6] bg-[#F5F7FA] p-6">
            <p className="text-[11px] font-semibold tracking-[0.1em] text-[#5B6774]">KEY FACTS</p>
            <dl className="mt-4 space-y-3 text-[14px]">
              <div className="flex justify-between border-b border-[#DCE1E6] pb-3"><dt className="text-[#5B6774]">Location</dt><dd className="text-right font-medium text-[#0F1B2B]">{project.shortLocation}</dd></div>
              <div className="flex justify-between border-b border-[#DCE1E6] pb-3"><dt className="text-[#5B6774]">Technology</dt><dd className="text-right font-medium text-[#0F1B2B]">{project.technology}</dd></div>
              <div className="flex justify-between border-b border-[#DCE1E6] pb-3"><dt className="text-[#5B6774]">Capacity</dt><dd className="text-right font-mono font-medium text-[#0F1B2B]">{project.capacity}</dd></div>
              <div className="flex justify-between"><dt className="text-[#5B6774]">Status</dt><dd><Badge variant={project.statusVariant === "warning" ? "warning" : "success"}>{project.status}</Badge></dd></div>
            </dl>
          </div>
          <div>
            <h2 className="text-[20px] font-bold tracking-[-0.02em] text-[#0F1B2B]">Project Overview</h2>
            <p className="mt-3 max-w-[640px] text-[15px] leading-[1.7] text-[#5B6774]">{project.overview}</p>
            <p className="mt-3 max-w-[640px] text-[14px] leading-[1.6] text-[#5B6774]">{project.description}</p>
          </div>
        </div>
      </Section>

      <Section surface>
        <h2 className="text-[18px] font-bold tracking-[-0.02em] text-[#0F1B2B]">Project Development Status</h2>
        <p className="mt-2 text-[13px] text-[#5B6774]">Completed stages in green, current stage in amber, planned stages outlined.</p>
        <div className="mt-8 rounded-[4px] border border-[#DCE1E6] bg-white p-6 lg:p-8">
          <Stepper steps={project.steps} />
        </div>
      </Section>

      {(project.slug === "tamia-hybrid-project" || project.slug === "budhni-solar-thermal-project") && (
        <Section>
          <h2 className="text-[18px] font-bold tracking-[-0.02em] text-[#0F1B2B]">Technical Details</h2>
          <div className="mt-6 max-w-[560px] rounded-[4px] border border-[#DCE1E6] bg-[#F5F7FA] p-6">
            <dl className="space-y-3 text-[14px]">
              <div className="flex justify-between border-b border-[#DCE1E6] pb-3"><dt className="text-[#5B6774]">Planned Capacity</dt><dd className="font-mono font-semibold text-[#0F1B2B]">{project.capacity}</dd></div>
              <div className="flex justify-between border-b border-[#DCE1E6] pb-3"><dt className="text-[#5B6774]">Technology</dt><dd className="font-medium text-[#0F1B2B]">{project.technology}</dd></div>
              <div className="flex justify-between"><dt className="text-[#5B6774]">DPR</dt><dd><Badge variant="success">DPR Completed</Badge></dd></div>
            </dl>
          </div>
        </Section>
      )}

      <Section surface>
        <h2 className="text-[18px] font-bold tracking-[-0.02em] text-[#0F1B2B]">Location</h2>
        <div className="mt-4 flex h-[200px] items-center justify-center rounded-[4px] border border-[#DCE1E6] bg-white">
          <span className="text-[12px] tracking-[0.06em] text-[#5B6774]">MAP — {project.location.toUpperCase()}</span>
        </div>
      </Section>

      <Section>
        <h2 className="text-[16px] font-semibold text-[#0F1B2B]">Related Projects</h2>
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          {others.map((p) => (
            <Link key={p.slug} href={`/projects/${p.slug}`} className="rounded-[4px] border border-[#DCE1E6] p-5 hover:border-[#3E6B8A] transition-colors">
              <Badge variant={p.statusVariant === "warning" ? "warning" : "success"}>{p.status}</Badge>
              <p className="mt-2 text-[15px] font-semibold text-[#0F1B2B]">{p.name}</p>
              <p className="text-[13px] text-[#5B6774]">{p.shortLocation} · {p.capacity}</p>
            </Link>
          ))}
        </div>
      </Section>

      <CTABanner title={`Questions about ${project.name}?`} subtitle="Contact us for detailed project information." />
    </>
  );
}
