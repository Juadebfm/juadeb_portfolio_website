/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
        quickSand: ["Quicksand", "sans-serif"],
        leagueSpartan: ["League Spartan", "sans-serif"],
        maven: ["Maven Pro", "sans-serif"],
      },
      colors: {
        juadeb_gray: "#5F5F5F",
        juadeb_dark_gray: "#484E53",
        juadeb_light_gray: "#CBCBCB",
        juadeb_green: "#1D6400",
        main_bg: "#0A0A0A",
        dot: "#D46868",
      },
      fontSize: {
        h1: "70px",
        h2: "48px",
        h3: "36px",
        h4: "20px",
        h5: "18px",
        small: "14px",
      },
    },
  },
  plugins: [],
};
