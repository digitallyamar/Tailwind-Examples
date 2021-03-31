const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        emerald: colors.emerald,
      },
    },
    triangles: { // defaults to {}
      'up': {
        direction: 'up',      // one of 'left', 'right', 'up', 'down', 'left-up', 'left-down', 'right-up', and 'right-down'
        size: '2em',            // defaults to defaultSize
        height: '1em',        // defaults to half the size; has no effect on the diagonal directions (e.g. 'left-up')
        color: 'currentColor',  // defaults to defaultColor
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
    triangles: ['responsive'],
  },
  plugins: [
    require('tailwindcss-triangles')({
      componentPrefix: 'c-',        // defaults to 'c-'
      defaultSize: '2em',           // defaults to '1em'
      defaultColor: 'currentColor', // defaults to 'currentColor'
    }),
  ],
}
