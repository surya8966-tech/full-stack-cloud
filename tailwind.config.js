/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: { primary: "#D84315" /* tiffin‑brand red/orange */ },
      fontFamily: { sans: ["Inter", "sans-serif"] },
    },
  },
  plugins: [],
}
