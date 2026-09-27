type Props = {
  index?: string;
  title: string;
  dek?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
};

export default function SectionHeading({
  index,
  title,
  dek,
  tone = "light",
  align = "left",
}: Props) {
  const isDark = tone === "dark";
  return (
    <div
      className={`flex flex-col gap-4 ${
        align === "center" ? "items-center text-center" : "items-start text-left"
      }`}
    >
      <div className="flex items-baseline gap-4">
        {index && (
          <span
            className={`font-mono text-sm ${
              isDark ? "text-blueprint-tint" : "text-blueprint"
            }`}
          >
            {index}
          </span>
        )}
        <h2
          className={`font-display text-4xl md:text-5xl font-semibold leading-[1.05] tracking-tight ${
            isDark ? "text-paper" : "text-graphite"
          }`}
        >
          {title}
        </h2>
      </div>
      {dek && (
        <p
          className={`max-w-prose text-lg leading-relaxed ${
            isDark ? "text-paper/70" : "text-graphite/70"
          }`}
        >
          {dek}
        </p>
      )}
    </div>
  );
}
