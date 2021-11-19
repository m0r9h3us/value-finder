const colors = require('tailwindcss/colors');
// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minWidth: {
        '24': '6rem',
        '48': '12rem',
      },
      colors: {
        orange: colors.orange,
        primary: colors.warmGray,
        secondary: colors.green,
        base: {
          light: colors.warmGray[100],
          dark: colors.warmGray[700]
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
