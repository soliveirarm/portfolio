/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#BFA8FF",
        "accent-light": "#d2c2ff",
      },
      borderRadius: {
        10: "0.625rem",
      },
      fontFamily: {
        title: ["Chakra Petch", "sans-serif"],
      },
    },
  },
  plugins: [],
}
