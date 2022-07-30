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
        primary: "#4438ca",
        secondary: "#64748b",
        dark: "#0f172a",
      },
      screens: {
        "2xl": "1320px",
      },
      backgroundImage: {
        headerbeam: "url('/dist/img/bg-section.jpg')",
        beam3: "url('/dist/img/bg-section-3.png')",
        beam4: "url('/dist/img/bg-section-3-light.png')",
        hiro: "url('/dist/img/bg-hero-dark.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
