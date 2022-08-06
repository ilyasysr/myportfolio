/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "rgb(var(--warna-tema) / <alpha-value>)",
        secondary: "#64748b",
        dark: "#0f172a",
      },
      screens: {
        "2xl": "1320px",
      },
      backgroundImage: {
        "bg-section": "url('../../dist/img/bg-section.jpg')",
        "bg-section-3": "url('../../dist/img/bg-section-3.png')",
        "bg-section-3-light": "url('../../dist/img/bg-section-3-light.png')",
        "bg-hero-dark": "url('../../dist/img/bg-hero-dark.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
