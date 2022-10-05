/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",'./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../public/hero2.jpg')",
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
