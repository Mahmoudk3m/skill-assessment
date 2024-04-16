/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "steel-blue": "#414f6b",
        "dark-gray": "#4d4d4d",
        "light-gray": "#b0b4be"
      }
    }
  },
  plugins: []
};
