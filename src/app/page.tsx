import Link from "next/link";
import { Badge } from "@/components/Badge";
import { CTABanner, Section } from "@/components/PageHero";
import { FocusIcon } from "@/components/Icons";
import { projects, focusAreas, whyPoints } from "@/data/site";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#0F1B2B]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F1B2B] via-[#0F1B2B] to-[#1A2E4A]" />
          <svg className="absolute inset-0 h-full w-full opacity-[0.07]" viewBox="0 0 800 500" preserveAspectRatio="none">
            <g stroke="#3E6B8A" strokeWidth={0.7} fill="none">
              <path d="M0 120 H800 M0 240 H800 M0 360 H800" />
              <path d="M120 0 V500 M300 0 V500 M480 0 V500 M660 0 V500" />
            </g>
            <g stroke="#D98E1F" strokeWidth={1} fill="none" opacity={0.5}>
              <circle cx={560} cy={220} r={70} />
              <circle cx={560} cy={220} r={42} />
              <path d="M560 120 V80 M560 360 V320 M460 220 H420 M700 220 H660" />
            </g>
          </svg>
        </div>
        <div className="relative mx-auto max-w-[1280px] px-5 py-14 lg:px-16 lg:py-24">
          <div className="max-w-[640px]">
            <p className="inline-flex items-center gap-2 rounded-[2px] border border-[#2C3E52] bg-white/5 px-3 py-1.5 text-[11px] font-semibold tracking-[0.08em] text-[#A9B4BF] backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D98E1F]" />
              EST. 2018 · MADHYA PRADESH, INDIA
            </p>
            <h1 className="mt-6 text-[32px] font-bold leading-[1.05] tracking-[-0.03em] text-white lg:text-[56px]">
              Engineering India&apos;s next generation of renewable power.
            </h1>
            <p className="mt-5 max-w-[560px] text-[16px] leading-[1.6] text-[#A9B4BF] lg:text-[18px]">
              Thapak Power develops hydropower, solar, wind, hybrid and energy storage projects — backed by proprietary patent-licensed technology and an in-house R&amp;D and testing facility.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/projects" className="inline-flex h-12 items-center justify-center rounded-[4px] bg-[#D98E1F] px-7 text-[15px] font-semibold text-[#0F1B2B] hover:bg-[#BE7D19] transition-colors">
                View Our Projects
              </Link>
              <Link href="/technology" className="inline-flex h-12 items-center justify-center rounded-[4px] border border-[#2C3E52] px-7 text-[15px] font-medium text-white hover:bg-white/10 transition-colors">
                Explore Our Technology →
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="rounded-[2px] border border-[#2C3E52] bg-white/5 px-2.5 py-1 text-[11px] font-medium tracking-[0.04em] text-[#A9B4BF]">Hydropower</span>
              <span className="rounded-[2px] border border-[#2C3E52] bg-white/5 px-2.5 py-1 text-[11px] font-medium tracking-[0.04em] text-[#A9B4BF]">Solar · Wind</span>
              <span className="rounded-[2px] border border-[#2C3E52] bg-white/5 px-2.5 py-1 text-[11px] font-medium tracking-[0.04em] text-[#A9B4BF]">Hybrid · Storage · Grid Support</span>
            </div>
          </div>
        </div>
      </section>

      <Section surface className="!py-10 lg:!py-12">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {[
            { k: "2018", l: "Established" },
            { k: "3", l: "Active Projects" },
            { k: "6", l: "Technology Focus Areas" },
            { k: "4", l: "Patent-Licensed Technologies" },
          ].map((s) => (
            <div key={s.l} className="border-l-2 border-[#D98E1F] pl-4">
              <p className="font-mono text-[28px] font-medium leading-none tracking-[-0.02em] text-[#0F1B2B] lg:text-[32px]">{s.k}</p>
              <p className="mt-1.5 text-[12px] font-medium tracking-[0.06em] text-[#5B6774]">{s.l}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.12em] text-[#3E6B8A]">WHO WE ARE</p>
            <h2 className="mt-3 text-[24px] font-bold leading-[1.2] tracking-[-0.02em] text-[#0F1B2B] lg:text-[32px]">A technology-driven power infrastructure developer.</h2>
            <p className="mt-4 max-w-[680px] text-[16px] leading-[1.7] text-[#5B6774]">
              Thapak Power Pvt. Ltd. is an engineering-led renewable energy developer working across hydropower, solar, wind, hybrid systems, energy storage and grid-support technology. We combine project development capability with intellectual property and in-house R&amp;D to build scalable, reliable power infrastructure in Madhya Pradesh.
            </p>
            <p className="mt-3 max-w-[680px] text-[16px] leading-[1.7] text-[#5B6774]">
              Our differentiator is technical depth: an in-house testing facility and exclusive patent licenses across wind turbines, grid-fluctuation reduction, short-time storage and solar thermal storage.
            </p>
            <Link href="/about" className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#3E6B8A] hover:text-[#0F1B2B] transition-colors">
              Learn more about us <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="rounded-[4px] border border-[#DCE1E6] bg-[#F5F7FA] p-6 lg:p-8">
            <p className="text-[11px] font-semibold tracking-[0.1em] text-[#5B6774]">AT A GLANCE</p>
            <dl className="mt-4 space-y-4">
              {[
                ["Headquarters", "Madhya Pradesh, India"],
                ["Founded", "2018"],
                ["Focus", "Hydro · Solar · Wind · Hybrid · Storage · Grid Support"],
                ["Capability", "Project Development · IP · R&D · Testing"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 border-b border-[#DCE1E6] pb-3 last:border-0">
                  <dt className="text-[12px] font-semibold tracking-[0.04em] text-[#5B6774]">{k}</dt>
                  <dd className="text-right text-[13px] font-medium text-[#0F1B2B]">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      <Section surface>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-[24px] font-bold tracking-[-0.02em] text-[#0F1B2B] lg:text-[32px]">Our Projects</h2>
            <p className="mt-2 max-w-[560px] text-[15px] leading-[1.6] text-[#5B6774]">Three active projects across Madhya Pradesh — each at a clearly stated development stage.</p>
          </div>
          <Link href="/projects" className="text-[14px] font-semibold text-[#3E6B8A] hover:text-[#0F1B2B]">View all projects →</Link>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {projects.map((p) => (
            <Link key={p.slug} href={`/projects/${p.slug}`} className="group flex flex-col rounded-[4px] border border-[#DCE1E6] bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(15,23,32,0.06)]">
              <div className="flex items-start justify-between gap-3">
                <Badge variant={p.statusVariant === "warning" ? "warning" : "success"}>{p.status}</Badge>
                <span className="rounded-[2px] bg-[#F5F7FA] px-2 py-1 text-[11px] font-medium text-[#5B6774]">{p.technology}</span>
              </div>
              <h3 className="mt-4 text-[18px] font-semibold leading-[1.3] text-[#0F1B2B] group-hover:text-[#3E6B8A] transition-colors">{p.name}</h3>
              <p className="mt-1 text-[13px] text-[#5B6774]">{p.shortLocation} · {p.capacity}</p>
              <p className="mt-3 line-clamp-3 text-[14px] leading-[1.6] text-[#5B6774]">{p.description}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-[13px] font-semibold text-[#3E6B8A]">View project <span aria-hidden>→</span></span>
            </Link>
          ))}
        </div>
      </Section>

      <Section dark>
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="text-[24px] font-bold tracking-[-0.02em] text-white lg:text-[32px]">Our Technology Platform</h2>
          <p className="mt-3 text-[15px] leading-[1.6] text-[#A9B4BF]">Six focus areas — from generation to storage and grid support — underpinned by patent-licensed IP and in-house R&D.</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((f) => (
            <Link key={f.slug} href={`/renewable/${f.slug}`} className="group flex items-start gap-4 rounded-[4px] border border-[#2C3E52] bg-white/[0.04] p-5 backdrop-blur hover:bg-white/[0.07] transition-colors">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[4px] bg-white/10 text-[#D98E1F]">
                <FocusIcon name={f.icon} className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-[14px] font-semibold text-white group-hover:text-[#D98E1F] transition-colors">{f.label}</span>
                <span className="mt-1 block text-[13px] leading-[1.5] text-[#A9B4BF]">{f.desc}</span>
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/technology" className="inline-flex h-11 items-center rounded-[4px] bg-[#D98E1F] px-7 text-[14px] font-semibold text-[#0F1B2B] hover:bg-[#BE7D19] transition-colors">
            Explore Technology & IP
          </Link>
        </div>
      </Section>

      <Section surface>
        <h2 className="text-[24px] font-bold tracking-[-0.02em] text-[#0F1B2B] lg:text-[32px]">Why Thapak Power</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyPoints.map((w) => (
            <div key={w.title} className="rounded-[4px] border border-[#DCE1E6] bg-white p-6">
              <h3 className="text-[15px] font-semibold text-[#0F1B2B]">{w.title}</h3>
              <p className="mt-1.5 text-[14px] leading-[1.6] text-[#5B6774]">{w.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section dark className="!py-10 lg:!py-14">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-[11px] font-semibold tracking-[0.14em] text-[#D98E1F]">OUR VISION</p>
          <p className="mt-4 text-[20px] font-medium leading-[1.5] text-white lg:text-[26px]">“To be a technology-driven renewable energy enterprise enabling a cleaner, reliable and resilient power system for India.”</p>
        </div>
      </Section>

      <CTABanner title="Interested in partnering with Thapak Power?" subtitle="For project, investment, technology licensing or general inquiries — we’d like to hear from you." />
    </>
  );
}
