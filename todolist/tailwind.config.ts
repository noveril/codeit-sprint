import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        slate: {
          900: "#0f172a",
          800: "#1e293b",
          500: "#64748b",
          400: "#94a3b8",
          300: "#cbd5e1",
          200: "#e2e8f0",
          100: "#f1f5f9",
        },
        violet: {
          600: "#7c3aed",
          100: "#ede9fe",
        },
        rose: {
          500: "#f43f5e",
        },
        lime: {
          300: "#bef264",
        },
        amber: {
          800: "#92400e",
        },
      },
    },
    fontSize: {
      small: "16px",
      medium: "18px",
      large: "20px",
    },
    fontWeight: {
      bold: "700",
    },
    fontFamily: {
      nanum: ["NanumSquare", "sans-serif"],
    },
  },
  plugins: [],
} satisfies Config;
