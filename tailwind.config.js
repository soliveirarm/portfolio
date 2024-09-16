/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#6f6dfc",
        "accent-darker": "#424196",
        "accent-translucid": "rgba(66, 65, 150, 0.4)",
      },
      fontFamily: {
        mono: ["Noto Sans Mono", "monospace"],
      },
    },
  },
  plugins: [],
}
