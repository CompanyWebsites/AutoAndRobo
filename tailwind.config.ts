import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        graphite: {
          DEFAULT: "#15181B",
          soft: "#1D2126",
          line: "#2B3036",
        },
        paper: {
          DEFAULT: "#E9E9E2",
          dim: "#DEDED5",
          line: "#C7C7BC",
        },
        blueprint: {
          DEFAULT: "#2A5DA8",
          dim: "#1E4278",
          tint: "#B9CBE3",
        },
        copper: {
          DEFAULT: "#B5652B",
          dim: "#8A4B1F",
          tint: "#E3C1A0",
        },
        steel: {
          DEFAULT: "#767D87",
          light: "#9AA0A8",
          dark: "#4B515A",
        },
      },
      fontFamily: {
        display: ["var(--font-archivo)", "sans-serif"],
        body: ["var(--font-plex-sans)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      maxWidth: {
        prose: "68ch",
      },
      letterSpacing: {
        tightest2: "-0.045em",
      },
    },
  },
  plugins: [],
};
export default config;
