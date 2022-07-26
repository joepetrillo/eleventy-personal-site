/** @type {import('tailwindcss').Config} */

const disabledCss = {
  "blockquote p:first-of-type::before": false,
  "blockquote p:last-of-type::after": false,
  pre: false,
  code: false,
  "pre code": false,
  "code::before": false,
  "code::after": false,
};

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
      typography: {
        DEFAULT: { css: disabledCss },
        sm: { css: disabledCss },
        lg: { css: disabledCss },
        xl: { css: disabledCss },
        "2xl": { css: disabledCss },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
