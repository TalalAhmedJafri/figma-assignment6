import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        foreground: "var(--foreground)",
        White: "#FFFFFF",
        Header: "#F7F7F7",
        divider: "#676767",
        secondary: "#F7F7F7",
        dot: "#8D8D8D",
      },
    },
    screens:{
      "mobile": 428
    }
  },
  plugins: [],
} satisfies Config;
