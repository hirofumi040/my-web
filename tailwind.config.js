/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#151515",
        paper: "#f7f7f4",
        mist: "#ecefeb",
        line: "#dfe4df",
        teal: "#18b7a4",
        deepTeal: "#0b776f",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 20px 70px rgba(21, 21, 21, 0.07)",
      },
    },
  },
  plugins: [],
};
