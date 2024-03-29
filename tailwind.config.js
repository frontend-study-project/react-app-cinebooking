/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from "tailwind-scrollbar";
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#ec4899",
        "black-1": "#1b1b1b",
        "black-a": "#aaaaaa",
        "age-all": "#239c57",
        "age-12": "#e8b62f",
        "age-15": "#dd7430",
        "age-18": "#d92b35",
        "week-sat": "#1d4ed8",
        "week-sun": "#dc2626",
        selected: "#1b1b1b30",
      },
    },
  },
  plugins: [tailwindScrollbar],
};
