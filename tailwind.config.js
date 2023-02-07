/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "550px",
      md: "800px",
    },
    extend: {
      colors: {
        red: "#8D0C0C",
        white: "#fff",
        grey: "#696969 ",
        yellow: "#facc15",
      },
      backgroundImage: {
        foundationimage: "url('./../public/images/morsecode-back-image.webp')",
      },
    },
  },
  plugins: [],
};
