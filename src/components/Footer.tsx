import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#08111C] text-[#E7EBEF]">
      <div className="mx-auto max-w-[1280px] px-5 py-14 lg:px-16 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-[4px] bg-[#D98E1F] text-[13px] font-bold text-[#0F1B2B]">TP</span>
              <span className="leading-none">
                <span className="block text-[14px] font-bold tracking-[-0.02em] text-white">THAPAK POWER</span>
                <span className="block text-[10px] tracking-[0.14em] text-[#A9B4BF]">PVT. LTD.</span>
              </span>
            </div>
            <p className="mt-4 max-w-[28ch] text-[13px] leading-[1.6] text-[#A9B4BF]">
              Technology-driven renewable energy developer — hydropower, solar, wind, hybrid, storage and grid support. Madhya Pradesh, India.
            </p>
            <p className="mt-4 text-[12px] text-[#5B6774]">Registered office address — to be updated.</p>
          </div>
          <div>
            <p className="text-[11px] font-semibold tracking-[0.1em] text-white">NAVIGATION</p>
            <ul className="mt-4 space-y-2.5 text-[14px] text-[#A9B4BF]">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/projects" className="hover:text-white">Projects</Link></li>
              <li><Link href="/technology" className="hover:text-white">Technology & IP</Link></li>
              <li><Link href="/research" className="hover:text-white">R&amp;D</Link></li>
              <li><Link href="/sustainability" className="hover:text-white">Sustainability</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-semibold tracking-[0.1em] text-white">FOCUS AREAS</p>
            <ul className="mt-4 space-y-2.5 text-[14px] text-[#A9B4BF]">
              <li><Link href="/renewable/hydropower" className="hover:text-white">Hydropower</Link></li>
              <li><Link href="/renewable/solar-energy" className="hover:text-white">Solar Energy</Link></li>
              <li><Link href="/renewable/wind-energy" className="hover:text-white">Wind Energy</Link></li>
              <li><Link href="/renewable/hybrid" className="hover:text-white">Hybrid Renewable</Link></li>
              <li><Link href="/renewable/storage" className="hover:text-white">Energy Storage</Link></li>
              <li><Link href="/renewable/grid-support" className="hover:text-white">Grid Support</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-semibold tracking-[0.1em] text-white">CONTACT</p>
            <p className="mt-4 text-[14px] text-[#A9B4BF]">contact@thapakpower.com<br />+91 — to be updated</p>
            <Link href="/contact" className="mt-5 inline-flex h-10 items-center rounded-[4px] bg-[#D98E1F] px-6 text-[14px] font-semibold text-[#0F1B2B] hover:bg-[#BE7D19] transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-[#1E2E44] pt-6 text-[12px] text-[#6B7A8A] lg:flex-row lg:items-center lg:justify-between">
          <span>© {new Date().getFullYear()} Thapak Power Pvt. Ltd. All rights reserved.</span>
          <span className="flex gap-4">
            <Link href="#" className="hover:text-[#A9B4BF]">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#A9B4BF]">Terms of Use</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
