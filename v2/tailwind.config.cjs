/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "components/**/*.{vue,js,ts}",
    "layouts/**/*.vue",
    "pages/**/*.vue",
    "composables/**/*.{js,ts}",
    "plugins/**/*.{js,ts}",
    "App.{js,ts,vue}",
    "app.{js,ts,vue}",
    "Error.{js,ts,vue}",
    "error.{js,ts,vue}",
    "content/**/*.md",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        canvas: "rgb(var(--c-canvas) / <alpha-value>)",
        ink: "rgb(var(--c-ink) / <alpha-value>)",
        gilt: "rgb(var(--c-gilt) / <alpha-value>)",
        moss: "rgb(var(--c-moss) / <alpha-value>)",

        // legacy
        body: "rgb(var(--color-bg))",
        "box-bg": "rgb(var(--color-box))",
        "box-shadow": "rgb(var(--box-sd))",
        "box-border": "rgb(var(--box-border))",
        primary: "rgb(var(--c-gilt) / <alpha-value>)",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        label: ['"Tenor Sans"', "ui-sans-serif", "sans-serif"],
        body: ['"Onest"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      zIndex: {
        60: "60",
        70: "70",
      },
      screens: {
        xs: "400px",
      },
    },
  },
};
