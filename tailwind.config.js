/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./_site/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "fragment-glare": "fragment-glare, serif",
        "fragment-text": "fragment-text, serif",
        "fragment-sans": "fragment-sans, sans-serif",
      },
      colors: {
        stone: {
          1000: "#141111",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
