module.exports = {
  purge: [
    './dist/*.html',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'darkbg': '#121212',
      'backdrop1E': '#161616',
      'orange': '#ff4f00',
     }),
    extend: {
      backgroundImage: {
       'bg1': "url('static/img/bg1.jpg')",
      }
    },
  },
  variants: {
  extend: {},
  },
  plugins: [],
};