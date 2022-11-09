/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#8D0C0C",
        white: {
          0: "#f9fafb",
        },
        yellow: "#facc15",
      },
      backgroundImage: {
        foundationimage:
          "url('https://images.unsplash.com/photo-1540957904852-c2184978df5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
      },
    },
  },
  plugins: [],
};
