/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#005EFE',
          light: '#F5F6F8',
          200: '#404B7C'
        },
        neutral: {
          100: '#FFF',
          200: '#8D8D8D',
        }
      }
    },
  },
  plugins: [],
}

