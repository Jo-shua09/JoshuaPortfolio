/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "star-movement-bottom": "starMoveBottom linear infinite",
        "star-movement-top": "starMoveTop linear infinite",
      },
      keyframes: {
        starMoveBottom: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        starMoveTop: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      fontFamily: {
        monospace: ["Libertinus Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
