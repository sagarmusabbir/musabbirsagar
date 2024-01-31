import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Gradient colors
        neon: {
          blue: "#3b82f6",
          pink: "#ec4899",
          purple: "#a855f7",
          teal: "#14b8a6",
          green: "#22c55e",
          sky: "#0ea5e9",
          amber: "#f59e0b",
          red: "#ef4444",
          emereld: "#10b981",
          slatelight: "#f8fafc",
          slatelightmd: "#cbd5e1",
          slate: "#94a3b8",
          slatedark: "#64748b",
          slatedarker: "#1e293b",
          zinc: "#a1a1aa",
          gray: "#9ca3af",
          orange: "#f97316",
          indigo: "#6366f1",
          violet: "#8b5cf6",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
