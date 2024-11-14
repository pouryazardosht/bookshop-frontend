/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#F7F8F8",
      },
      fontFamily: {
        vazir: ["vazirmatn", "sans-serif"],
      },
    },
  },
  plugins: [],
};
