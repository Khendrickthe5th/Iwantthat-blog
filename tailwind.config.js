/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'custom1': ["custom-1", "sans-serif"],
        'custom2': ["custom-2", "cursive"]
      },
      screens: {
        'sm': '500px',
        'md': '640px'
      },
    },
  },
  plugins: [],
}

