"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { focusAreas } from "@/data/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileRenewableOpen, setMobileRenewableOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-[100] border-b transition-all duration-200 ${
        scrolled ? "bg-[#0F1B2B] border-[#2C3E52] h-[72px]" : "bg-[#0F1B2B] border-transparent h-[72px] lg:h-[96px]"
      }`}
    >
      <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between px-5 lg:px-16">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-[4px] bg-[#D98E1F] text-[13px] font-bold leading-none text-[#0F1B2B]">TP</span>
          <span className="leading-none">
            <span className="block text-[15px] font-bold tracking-[-0.02em] text-white">THAPAK POWER</span>
            <span className="block text-[10px] font-medium tracking-[0.14em] text-[#A9B4BF]">PVT. LTD.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          <Link href="/about" className="text-[14px] font-medium text-[#E7EBEF] hover:text-white transition-colors">
            About Us
          </Link>
          <div className="relative">
            <button
              onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
              className="hidden"
              aria-hidden
            />
            <Link href="/projects" className="text-[14px] font-medium text-[#E7EBEF] hover:text-white transition-colors">
              Projects
            </Link>
          </div>
          <Link href="/technology" className="text-[14px] font-medium text-[#E7EBEF] hover:text-white transition-colors">
            Technology & IP
          </Link>
          <Link href="/research" className="text-[14px] font-medium text-[#E7EBEF] hover:text-white transition-colors">
            R&amp;D
          </Link>
          <div className="relative">
            <button
              onClick={() => setMegaOpen(!megaOpen)}
              className="flex items-center gap-1 text-[14px] font-medium text-[#E7EBEF] hover:text-white transition-colors"
              aria-expanded={megaOpen}
            >
              Renewable Energy
              <svg
                className={`h-3.5 w-3.5 transition-transform ${megaOpen ? "rotate-180" : ""}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {megaOpen && (
              <>
                <button
                  aria-label="Close menu"
                  onClick={() => setMegaOpen(false)}
                  className="fixed inset-0 z-10"
                />
                <div className="absolute left-1/2 top-[44px] z-20 w-[720px] -translate-x-1/2 rounded-[4px] border border-[#DCE1E6] bg-white p-6 shadow-[0_12px_40px_rgba(15,27,43,0.12)]">
                  <div className="grid grid-cols-3 gap-5">
                    {focusAreas.map((f) => (
                      <Link
                        key={f.slug}
                        href={`/renewable/${f.slug}`}
                        onClick={() => setMegaOpen(false)}
                        className="rounded-[4px] border border-transparent p-3 hover:border-[#DCE1E6] hover:bg-[#F5F7FA] transition-colors"
                      >
                        <span className="block text-[14px] font-semibold text-[#0F1B2B]">{f.label}</span>
                        <span className="mt-1 block text-[13px] leading-[1.4] text-[#5B6774]">{f.desc}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
          <Link href="/sustainability" className="text-[14px] font-medium text-[#E7EBEF] hover:text-white transition-colors">
            Sustainability
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="inline-flex h-10 items-center rounded-[4px] bg-[#D98E1F] px-6 text-[14px] font-semibold text-[#0F1B2B] hover:bg-[#BE7D19] transition-colors"
          >
            Contact Us
          </Link>
        </div>

        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-[4px] border border-[#2C3E52] text-white lg:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[200] lg:hidden">
          <button aria-label="Close menu" onClick={() => setOpen(false)} className="absolute inset-0 bg-black/50" />
          <div className="absolute right-0 top-0 flex h-full w-[84%] max-w-[380px] flex-col bg-white shadow-2xl">
            <div className="flex h-[64px] items-center justify-between border-b border-[#DCE1E6] px-5">
              <span className="text-[14px] font-bold tracking-[-0.02em] text-[#0F1B2B]">Menu</span>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-[4px] border border-[#DCE1E6]"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 overflow-auto px-5 py-4">
              <nav className="flex flex-col">
                <Link href="/about" onClick={() => setOpen(false)} className="border-b border-[#F5F7FA] py-3.5 text-[15px] font-medium text-[#101820]">
                  About Us
                </Link>
                <button
                  onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                  className="flex w-full items-center justify-between border-b border-[#F5F7FA] py-3.5 text-left text-[15px] font-medium text-[#101820]"
                >
                  Projects
                  <svg className={`h-4 w-4 transition-transform ${mobileProjectsOpen ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                {mobileProjectsOpen && (
                  <div className="pb-2">
                    {[
                      { slug: "bina-hydropower-project", label: "Bina Hydropower" },
                      { slug: "tamia-hybrid-project", label: "Tamia Hybrid (50 MW)" },
                      { slug: "budhni-solar-thermal-project", label: "Budhni Solar Thermal (100 MW)" },
                    ].map((p) => (
                      <Link
                        key={p.slug}
                        href={`/projects/${p.slug}`}
                        onClick={() => setOpen(false)}
                        className="block py-2 pl-4 text-[14px] text-[#5B6774] hover:text-[#0F1B2B]"
                      >
                        {p.label}
                      </Link>
                    ))}
                  </div>
                )}
                <Link href="/technology" onClick={() => setOpen(false)} className="border-b border-[#F5F7FA] py-3.5 text-[15px] font-medium text-[#101820]">
                  Technology & IP
                </Link>
                <Link href="/research" onClick={() => setOpen(false)} className="border-b border-[#F5F7FA] py-3.5 text-[15px] font-medium text-[#101820]">
                  R&amp;D
                </Link>
                <button
                  onClick={() => setMobileRenewableOpen(!mobileRenewableOpen)}
                  className="flex w-full items-center justify-between border-b border-[#F5F7FA] py-3.5 text-left text-[15px] font-medium text-[#101820]"
                >
                  Renewable Energy
                  <svg className={`h-4 w-4 transition-transform ${mobileRenewableOpen ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                {mobileRenewableOpen && (
                  <div className="pb-2">
                    {focusAreas.map((f) => (
                      <Link
                        key={f.slug}
                        href={`/renewable/${f.slug}`}
                        onClick={() => setOpen(false)}
                        className="block py-2 pl-4 text-[14px] text-[#5B6774] hover:text-[#0F1B2B]"
                      >
                        {f.label}
                      </Link>
                    ))}
                  </div>
                )}
                <Link href="/sustainability" onClick={() => setOpen(false)} className="border-b border-[#F5F7FA] py-3.5 text-[15px] font-medium text-[#101820]">
                  Sustainability
                </Link>
                <Link href="/news" onClick={() => setOpen(false)} className="border-b border-[#F5F7FA] py-3.5 text-[15px] font-medium text-[#101820]">
                  News
                </Link>
                <Link href="/careers" onClick={() => setOpen(false)} className="border-b border-[#F5F7FA] py-3.5 text-[15px] font-medium text-[#101820]">
                  Careers
                </Link>
              </nav>
            </div>
            <div className="border-t border-[#DCE1E6] p-5">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex h-11 w-full items-center justify-center rounded-[4px] bg-[#D98E1F] text-[15px] font-semibold text-[#0F1B2B]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
