/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins-Regular"],
        "poppins-bold": ["Poppins-Bold"],
      },
    },
    screens: {
      sm: { min: "250px", max: "650px" },
      md: { min: "650px", max: "1024px" },
      lg: { min: "1024px", max: "1280px" },
      xl: { min: "1280", max: "1536" },
    },
  },
  plugins: [],
};
