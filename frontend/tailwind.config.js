/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-blue": "var(--secondary-blue)",
        "primary-orange": "var(--primary-orange)",
        "secondary-orange": "var(--secondary-orange)",
        "thirt-orange": "var(--thirt-orange)",
        "primary-gray": "var(--primary-gray)",
      }
    },
  },
  plugins: [],
}