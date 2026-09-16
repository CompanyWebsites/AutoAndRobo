export function IconSun(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <circle cx={12} cy={12} r={4} />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}
export function IconWind(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path d="M9 6h6M4 12h8M7 18h10" />
      <path d="M15 6a2 2 0 1 1 0 4M12 12a2 2 0 1 0 0 4M17 18a2 2 0 1 1 0-4" strokeLinecap="round" />
    </svg>
  );
}
export function IconDroplets(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path d="M12 3s-6 6-6 10a6 6 0 0 0 12 0c0-4-6-10-6-10Z" />
      <path d="M7 16a5 5 0 0 0 9 3" opacity={0.6} />
    </svg>
  );
}
export function IconLayers(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path d="M12 2 2 7l10 5 10-5-10-5Z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
}
export function IconBattery(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <rect x={2} y={7} width={16} height={10} rx={2} />
      <path d="M20 10h2v4h-2z" />
      <path d="M6 11h4" />
    </svg>
  );
}
export function IconActivity(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}
export function IconShield(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    </svg>
  );
}
export function IconFlask(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path d="M9 3h6v6l4 7a2 2 0 0 1-1.7 3H6.7A2 2 0 0 1 5 16l4-7V3Z" />
      <path d="M8 14h8" />
    </svg>
  );
}
const map: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  sun: IconSun,
  wind: IconWind,
  droplets: IconDroplets,
  layers: IconLayers,
  battery: IconBattery,
  activity: IconActivity,
  shield: IconShield,
  flask: IconFlask,
};
export function FocusIcon({ name, className }: { name: string; className?: string }) {
  const C = map[name] ?? IconLayers;
  return <C className={className} />;
}
