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
          100: '#F9FAFB',
          150: '#E3EFFC',
          200: '#404B7C',
          400: '#1D2739',
          800: '#101928'
        },
        secondary: {
          DEFAULT: '#F56630',
          100: "#FBEAE9",
          150: "#FEF6E7",
          200: "#F2BCBA",
          500: "#E7F6EC",
          800: "#0F973D",
        },
        neutral: {
          light: '#E4E7EC',
          100: '#FFF',
          150: '#98A2B3',
          200: '#8D8D8D',
        }
      }
    },
  },
  plugins: [],
}

