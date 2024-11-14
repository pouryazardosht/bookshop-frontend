/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "2rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        bgColor: "#F7F8F8",
        primaryColor: "#F21055",
      },
      boxShadow: {
        pz: "0px 0px 4px 0px rgba(0, 0, 0, 0.1);",
      },
      fontFamily: {
        vazir: ["vazirmatn", "sans-serif"],
      },
    },
  },
  plugins: [],
};
