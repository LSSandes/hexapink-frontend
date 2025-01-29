import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark: "#333333",
        green: "#39AC39",
        "light-dark": "#666666",
        "light-gray": "#FBFBFE",
        "light-gray1": "#ECECF9",
        "light-gray3": "#D9D9F2",
        "dark-blue": "#4040BF",
        "dark-red": "#BF4040",
        "light-green": "#D9F2D9",
      },
      fontFamily: {
        "redacted-script": ['"Redacted Script"', "cursive"],
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide")
  ],
} satisfies Config;
