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
          200: '#404B7C',
          400: '#1D2739',
          800: '#101928'
        },
        secondary: {
          DEFAULT: '#F56630'
        },
        neutral: {
          100: '#FFF',
          150: '#98A2B3',
          200: '#8D8D8D',
        }
      }
    },
  },
  plugins: [],
}

