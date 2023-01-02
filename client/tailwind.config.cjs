/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        normal: "1.125rem",
      },
      colors: {
        background: "#343541",
      },
    },
  },
  plugins: [],
};
