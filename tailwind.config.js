/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3dbb9a",
        secondary: "#ed3262",
        body: "#1a1d22",
        bg: "#13161b",
      },

      fontFamily: {
        sans: ["Roboto", "Arial", "sans-serif"],
      },
      // ... other customizations
    },
  },
  plugins: [],
};
