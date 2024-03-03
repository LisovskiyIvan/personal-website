/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors: {
        'blue': '#B5E2FA',
        'orange': '#F7A072',
        'dblue': '#0FA3B1',
        'yellow': '#EDDEA4',
        'notblack': '#0D0D0D'
      }
    },
  },
  plugins: [],
}
