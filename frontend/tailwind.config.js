/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': { 'min': '320px', 'max': '425px' },
      'laptop': {'min':'425px', 'max':'1024px'},
      'mobile-sm': {'min':'320px', 'max':'375px'}
    },
    extend: {
      colors: {
        "btn":"#24A0ED"
      }
    },
  },
  plugins: [],
}

