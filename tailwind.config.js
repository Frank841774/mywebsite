/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        teal: "#0D9488",
        darkGray: "#1F2937",
        softWhite: "#F9FAFB",
        lightGray: "#F3F4F6"
      }
    }
  },
  plugins: [require("daisyui")],
};