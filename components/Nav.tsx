const links = [
  { href: "#about", label: "About" },
  { href: "#domains", label: "Technology" },
  { href: "#flagship", label: "Air Purification" },
  { href: "#industries", label: "Industries" },
  { href: "#partner", label: "Partner" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-paper-line/60 bg-graphite/95 backdrop-blur supports-[backdrop-filter]:bg-graphite/90">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-sm font-semibold tracking-tight text-paper">
          Thapak <span className="text-blueprint-tint">Automotive &amp; Robotics</span>
        </a>
        <ul className="hidden gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-[13px] text-paper/70 transition-colors hover:text-paper"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#partner"
          className="hidden rounded-none border border-blueprint-tint/40 px-4 py-2 font-mono text-[13px] text-paper transition-colors hover:border-blueprint-tint hover:bg-blueprint/20 md:inline-block"
        >
          Start a conversation
        </a>
      </nav>
    </header>
  );
}
