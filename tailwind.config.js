/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["Josefin Sans", "sans-serif"],
        alata: ["Alata"],
        Rubik: ["Rubik"],
      },
      colors: {
        primary: "#4F5665",
        secondary: "#0B132A",
      },
      letterSpacing: {
        widest: ".3em",
      },
    },
  },
  plugins: [],
};
