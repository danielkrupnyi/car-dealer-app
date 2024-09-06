import daisyui from "daisyui";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fill": "repeat(auto-fill, minmax(280px, 1fr))",
      },
      height: {
        "screen-sized": "calc(100vh - 212px)",
      },
      minHeight: {
        "screen-sized": "calc(100vh - 212px)",
      },
    },
  },
  plugins: [daisyui],
};
export default config;
