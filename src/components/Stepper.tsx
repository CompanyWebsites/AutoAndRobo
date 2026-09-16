export function Stepper({ steps }: { steps: { label: string; state: "done" | "current" | "future" }[] }) {
  return (
    <div className="w-full">
      <div className="hidden md:flex items-center gap-0">
        {steps.map((s, i) => (
          <div key={s.label} className="flex flex-1 items-center">
            <div className="flex flex-col items-center gap-2">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full border-2 text-[12px] font-bold ${
                  s.state === "done"
                    ? "bg-[#2E7D51] border-[#2E7D51] text-white"
                    : s.state === "current"
                      ? "bg-[#B5791A] border-[#B5791A] text-white"
                      : "bg-white border-[#DCE1E6] text-[#5B6774]"
                }`}
              >
                {s.state === "done" ? "✓" : i + 1}
              </div>
              <span className={`text-center text-[12px] font-medium leading-tight ${s.state === "future" ? "text-[#5B6774]" : "text-[#0F1B2B]"}`}>{s.label}</span>
              <span
                className={`rounded-[2px] px-1.5 py-0.5 text-[10px] font-semibold tracking-[0.04em] ${
                  s.state === "done" ? "bg-[#2E7D51]/10 text-[#2E7D51]" : s.state === "current" ? "bg-[#B5791A]/10 text-[#B5791A]" : "bg-[#F5F7FA] text-[#5B6774]"
                }`}
              >
                {s.state === "done" ? "Completed" : s.state === "current" ? "In Progress" : "Planned"}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className={`mx-2 h-[2px] flex-1 ${steps[i + 1].state === "future" ? "bg-[#DCE1E6]" : "bg-[#2E7D51]"}`} />
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-4 md:hidden">
        {steps.map((s, i) => (
          <div key={s.label} className="flex gap-3">
            <div className="flex flex-col items-center">
              <div
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 text-[11px] font-bold ${
                  s.state === "done"
                    ? "bg-[#2E7D51] border-[#2E7D51] text-white"
                    : s.state === "current"
                      ? "bg-[#B5791A] border-[#B5791A] text-white"
                      : "bg-white border-[#DCE1E6] text-[#5B6774]"
                }`}
              >
                {s.state === "done" ? "✓" : i + 1}
              </div>
              {i < steps.length - 1 && <div className="mt-1 w-[2px] flex-1 bg-[#DCE1E6]" style={{ minHeight: 20 }} />}
            </div>
            <div className="pb-4">
              <p className={`text-[14px] font-semibold ${s.state === "future" ? "text-[#5B6774]" : "text-[#0F1B2B]"}`}>{s.label}</p>
              <p className="text-[12px] text-[#5B6774]">{s.state === "done" ? "Completed" : s.state === "current" ? "In Progress" : "Planned"}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
