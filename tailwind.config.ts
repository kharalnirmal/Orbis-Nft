import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#010828",
        cream: "#EFF4FF",
        neon: "#6FFF00",
      },
      fontFamily: {
        grotesk: ["Anton", "sans-serif"],
        condiment: ["Condiment", "cursive"],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "SF Mono",
          "Cascadia Mono",
          "Segoe UI Mono",
          "Roboto Mono",
          "monospace",
        ],
      },
      boxShadow: {
        glass: "inset 0 1px 1px rgba(255, 255, 255, 0.1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
