export const projects = [
  {
    slug: "bina-hydropower-project",
    name: "Bina Hydropower Project",
    location: "Sagar District, Madhya Pradesh",
    shortLocation: "Sagar District, MP",
    technology: "Hydropower",
    technologies: ["Hydropower"],
    capacity: "—",
    capacityNote: "Capacity under DPR review",
    status: "In Progress" as const,
    statusVariant: "warning" as const,
    description: "Hydropower Development Agreement executed with Government of Madhya Pradesh. Security Deposit submitted. Currently in land acquisition and installation phase.",
    overview:
      "The Bina Hydropower Project is Thapak Power's most advanced project, with a Hydropower Development Agreement executed with the Government of Madhya Pradesh and Security Deposit submitted. The project is presently in land acquisition and installation phase.",
    steps: [
      { label: "Project Allotment", state: "done" as const },
      { label: "HDA Executed", state: "done" as const },
      { label: "Security Deposit", state: "done" as const },
      { label: "Land Acquisition", state: "current" as const },
      { label: "Installation", state: "future" as const },
    ],
  },
  {
    slug: "tamia-hybrid-project",
    name: "Tamia Solar–Wind Hybrid Project",
    location: "Tamia, Madhya Pradesh",
    shortLocation: "Tamia, MP",
    technology: "Solar + Wind Hybrid",
    technologies: ["Solar", "Wind", "Hybrid"],
    capacity: "50 MW",
    capacityNote: "Planned capacity",
    status: "DPR Completed" as const,
    statusVariant: "success" as const,
    description: "50 MW solar–wind hybrid plant. DPR completed. Wind technology supported by exclusive patent-licensed technology for improved performance.",
    overview:
      "The Tamia Hybrid Power Plant is a planned 50 MW solar–wind hybrid facility. DPR is completed. Wind generation benefits from exclusive patent-licensed wind turbine technology, supporting integrated renewable power delivery.",
    steps: [
      { label: "Site Assessment", state: "done" as const },
      { label: "DPR Completed", state: "done" as const },
      { label: "Regulatory Clearance", state: "current" as const },
      { label: "Land & EPC", state: "future" as const },
      { label: "Construction", state: "future" as const },
    ],
  },
  {
    slug: "budhni-solar-thermal-project",
    name: "Budhni Solar Thermal Project",
    location: "Budhni, Madhya Pradesh",
    shortLocation: "Budhni, MP",
    technology: "Solar Thermal + Storage",
    technologies: ["Solar Thermal", "Storage"],
    capacity: "100 MW",
    capacityNote: "Planned capacity",
    status: "DPR Completed" as const,
    statusVariant: "success" as const,
    description: "100 MW solar thermal plant with integrated thermal energy storage. DPR completed. Supported by patent-licensed solar thermal power and storage technology.",
    overview:
      "The Budhni Solar Thermal Power Plant is a planned 100 MW solar thermal facility with integrated thermal energy storage, enabling controlled delivery beyond daylight hours. DPR is completed and technology is backed by patent-licensed solar thermal power & storage systems.",
    steps: [
      { label: "Site Assessment", state: "done" as const },
      { label: "DPR Completed", state: "done" as const },
      { label: "Regulatory Clearance", state: "current" as const },
      { label: "Land & EPC", state: "future" as const },
      { label: "Construction", state: "future" as const },
    ],
  },
];

export const focusAreas = [
  { slug: "hydropower", label: "Hydropower", desc: "Run-of-river and reservoir-based generation.", icon: "droplets" },
  { slug: "solar-energy", label: "Solar Energy", desc: "Utility-scale PV and solar thermal systems.", icon: "sun" },
  { slug: "wind-energy", label: "Wind Energy", desc: "Patent-licensed wind turbine technology.", icon: "wind" },
  { slug: "hybrid", label: "Hybrid Renewable", desc: "Solar + wind integration for firmer output.", icon: "layers" },
  { slug: "storage", label: "Energy Storage", desc: "Short-time and thermal storage systems.", icon: "battery" },
  { slug: "grid-support", label: "Grid Support", desc: "Fluctuation reduction and grid performance.", icon: "activity" },
];

export const patentTechs = [
  { title: "Wind Turbine Technology", desc: "Exclusive patent license covering advanced wind turbine design for improved performance and reliability." },
  { title: "Grid Fluctuation Reduction Technology", desc: "Systems that smooth generation variability to improve grid stability and power quality." },
  { title: "Short-Time Power Storage Technology", desc: "Rapid-response storage for bridging intermittency and supporting controlled delivery." },
  { title: "Solar Thermal Power & Storage Technology", desc: "Concentrated solar thermal generation coupled with integrated thermal energy storage." },
];

export const whyPoints = [
  { title: "Technology Driven", desc: "Engineering-led development across generation technologies." },
  { title: "Multi-Technology Approach", desc: "Hydro, solar, wind, hybrid, storage and grid support under one platform." },
  { title: "Intellectual Property", desc: "Proprietary IP and exclusive patent-licensed technologies." },
  { title: "In-House R&D", desc: "Dedicated testing facility for development and performance evaluation." },
  { title: "Project Development Capability", desc: "Full lifecycle from allotment and DPR through land acquisition and installation." },
  { title: "Integrated Energy Approach", desc: "Generation integrated with storage and grid-support for resilient power." },
];

export const values = ["Innovation", "Sustainability", "Engineering Excellence", "Research", "Reliability", "Long-Term Thinking"];

export const vision = "To be a technology-driven renewable energy enterprise enabling a cleaner, reliable and resilient power system for India.";
export const mission = [
  "Develop renewable energy projects with advanced technologies.",
  "Commercialize intellectual property through exclusive patent-licensed solutions.",
  "Integrate solar, wind and hydro with energy storage systems.",
  "Support grid performance through fluctuation-reduction and storage technologies.",
  "Strengthen in-house R&D, testing and technology evaluation capabilities.",
  "Develop scalable, replicable project models for wider deployment.",
  "Contribute to India's sustainable energy transition and energy security.",
  "Operate with engineering rigor, transparency and long-term discipline.",
];
