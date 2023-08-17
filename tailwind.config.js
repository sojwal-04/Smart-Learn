/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundColor: {
        'bg-color': '#2c2735',
        // Add more color variables if needed
      },
    },
  },
  plugins: [],
}

