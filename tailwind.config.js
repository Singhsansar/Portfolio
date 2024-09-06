/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "#020617",
        lightText: "#c4cfde",
        boxBg: "linear-gradient(145deg, #182cab, #23272b)",
        designColor: "#182cab",
        white: '#FFFFFF',
        black: '#242424',
        grey: '#F3F3F3',
        'dark-grey': '#6B6B6B',
        red: '#FF4E4E',
        transparent: 'transparent',
        twitter: '#1DA1F2',     // Fixed the key from 'twitter''
        purple: '#8B46FF'
      },

      boxShadow: {
        shadowOne: "",
      },
    },
  },
  plugins: [],
};
