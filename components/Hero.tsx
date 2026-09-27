export default function Hero() {
  const domains = [
    { label: "Automation", x: 90, y: 60 },
    { label: "Robotics", x: 90, y: 150 },
    { label: "Aerospace & Drones", x: 90, y: 240 },
    { label: "Automotive", x: 90, y: 330 },
    { label: "Clean Technology", x: 90, y: 420 },
  ];

  return (
    <section id="top" className="grid-dark relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 pb-24 pt-20 md:grid-cols-[1.1fr_0.9fr] md:pb-32 md:pt-28">
        <div className="flex flex-col justify-center gap-8">
          <p className="hero-fade-1 font-mono text-sm text-blueprint-tint">
            Thapak Automotive and Robotics Pvt. Ltd. — est. 2018
          </p>
          <h1 className="hero-fade-2 font-display text-5xl font-semibold leading-[1.02] tracking-tight text-paper md:text-7xl">
            Engineering
            <br />
            the future.
          </h1>
          <p className="hero-fade-3 max-w-prose text-lg leading-relaxed text-paper/70 md:text-xl">
            We are a technology and engineering company working across automation,
            robotics, aerospace and drone technologies, automotive engineering, and
            environmental technology — building an Indian engineering enterprise with
            capabilities for Indian and international markets.
          </p>
          <div className="hero-fade-3 flex flex-wrap gap-x-8 gap-y-3 pt-4">
            {["Automation", "Robotics", "Aerospace", "Drones", "Automotive", "Clean Technology"].map(
              (t) => (
                <span key={t} className="font-mono text-[13px] text-paper/50">
                  {t}
                </span>
              )
            )}
          </div>
        </div>

        <div className="flex items-center justify-center">
          <svg
            viewBox="0 0 420 480"
            className="draw-in h-auto w-full max-w-sm"
            fill="none"
            aria-labelledby="hero-diagram-title"
            role="img"
          >
            <title id="hero-diagram-title">
              Five technology domains converging on Thapak Automotive and Robotics
            </title>
            {domains.map((d, i) => (
              <line
                key={d.label}
                x1={d.x}
                y1={d.y}
                x2={300}
                y2={240}
                stroke="#B9CBE3"
                strokeOpacity="0.45"
                strokeWidth="1"
                style={{ "--len": 260 } as React.CSSProperties}
              />
            ))}
            {domains.map((d) => (
              <g key={d.label + "-node"}>
                <circle
                  cx={d.x}
                  cy={d.y}
                  r="4"
                  fill="#15181B"
                  stroke="#B9CBE3"
                  strokeWidth="1.5"
                  style={{ "--len": 28 } as React.CSSProperties}
                />
                <text
                  x={d.x - 10}
                  y={d.y - 12}
                  textAnchor="end"
                  className="font-mono"
                  fontSize="11"
                  fill="#E9E9E2"
                  opacity="0.75"
                >
                  {d.label}
                </text>
              </g>
            ))}
            <circle
              cx="300"
              cy="240"
              r="34"
              fill="#1D2126"
              stroke="#2A5DA8"
              strokeWidth="1.5"
              style={{ "--len": 214 } as React.CSSProperties}
            />
            <text
              x="300"
              y="236"
              textAnchor="middle"
              className="font-mono"
              fontSize="10"
              fill="#E9E9E2"
            >
              THAPAK
            </text>
            <text
              x="300"
              y="250"
              textAnchor="middle"
              className="font-mono"
              fontSize="9"
              fill="#B9CBE3"
            >
              A &amp; R
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}
