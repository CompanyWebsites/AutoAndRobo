import Link from "next/link";

export function PageHero({ title, subtitle, breadcrumb }: { title: string; subtitle?: string; breadcrumb?: { label: string; href: string }[] }) {
  return (
    <div className="bg-[#0F1B2B]">
      <div className="mx-auto max-w-[1280px] px-5 py-10 lg:px-16 lg:py-14">
        {breadcrumb && (
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-1.5 text-[12px] text-[#A9B4BF]">
            {breadcrumb.map((b, i) => (
              <span key={b.href} className="flex items-center gap-1.5">
                {i > 0 && <span className="text-[#5B6774]">/</span>}
                <Link href={b.href} className="hover:text-white transition-colors">
                  {b.label}
                </Link>
              </span>
            ))}
          </nav>
        )}
        <h1 className="max-w-[780px] text-[28px] font-bold leading-[1.15] tracking-[-0.02em] text-white lg:text-[44px]">{title}</h1>
        {subtitle && <p className="mt-3 max-w-[680px] text-[15px] leading-[1.6] text-[#A9B4BF] lg:text-[17px]">{subtitle}</p>}
      </div>
    </div>
  );
}

export function CTABanner({ title, subtitle, ctaLabel = "Contact Us", href = "/contact" }: { title: string; subtitle?: string; ctaLabel?: string; href?: string }) {
  return (
    <div className="bg-[#F5F7FA] border-y border-[#DCE1E6]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-6 px-5 py-10 lg:flex-row lg:items-center lg:px-16">
        <div>
          <h2 className="text-[20px] font-bold tracking-[-0.02em] text-[#0F1B2B] lg:text-[24px]">{title}</h2>
          {subtitle && <p className="mt-1.5 text-[14px] text-[#5B6774]">{subtitle}</p>}
        </div>
        <Link href={href} className="inline-flex h-11 shrink-0 items-center rounded-[4px] bg-[#D98E1F] px-7 text-[14px] font-semibold text-[#0F1B2B] hover:bg-[#BE7D19] transition-colors">
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
}

export function Section({ children, dark, surface, className = "" }: { children: React.ReactNode; dark?: boolean; surface?: boolean; className?: string }) {
  return (
    <section className={`${dark ? "bg-[#0F1B2B] text-white" : surface ? "bg-[#F5F7FA]" : "bg-white"} py-12 lg:py-24 ${className}`}>
      <div className="mx-auto max-w-[1280px] px-5 lg:px-16">{children}</div>
    </section>
  );
}
