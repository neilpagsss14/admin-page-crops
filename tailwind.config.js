/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins-Regular"],
        "poppins-bold": ["Poppins-Bold"],
      },
      transitionDuration: {
        500: "500ms",
      },
      transitionTimingFunction: {
        "custom-ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
    screens: {
      sm: { min: "250px", max: "650px" },
      md: { min: "650px", max: "1024px" },
      lg: { min: "1024px", max: "1280px" },
      xl: { min: "1280px", max: "1536px" },
    },
  },
  plugins: [],
};
