/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
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
  plugins: [
    require('tailwindcss-animated'),
    require('daisyui'),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          clamp(value) {
            const sizes = theme('fontSize');
            const split = value
              .split('-')
              .map(v => sizes[v] ? sizes[v]['0'] : v);
            return {
              fontSize: `clamp(${split[0]}, ${split[1]}, ${split[2]})`,
            }
          }
        });
    })
  ],
}
