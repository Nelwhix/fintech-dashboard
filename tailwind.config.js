/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
