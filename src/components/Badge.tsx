export function Badge({ variant = "planned", children }: { variant?: "success" | "warning" | "planned"; children: React.ReactNode }) {
  const map = {
    success: "bg-[#2E7D51] text-white border-[#2E7D51]",
    warning: "bg-[#B5791A] text-white border-[#B5791A]",
    planned: "bg-white text-[#3E6B8A] border-[#3E6B8A]",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-[2px] border px-2.5 py-1 text-[11px] font-semibold tracking-[0.04em] leading-none ${map[variant]}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-90" aria-hidden />
      {children}
    </span>
  );
}
