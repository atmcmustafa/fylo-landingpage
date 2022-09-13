/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    fontFamily: {
      openSans: 'Open Sans',
      raleway : 'Raleway',
    },
    container: {
      center : 'true',
    },
    colors: {
      white: "#fff",
      black: "#000",
      darkBlue: "hsl(243, 87%, 12%)",
      desBlue: "hsl(238, 22%, 44%)",
      brightBlue: "hsl(224, 93%, 58%)",
      Cyan: "hsl(170, 45%, 43%)",
      grayishBlue: "hsl(240, 75%, 98%)",
      lightGray: "hsl(0, 0%, 75%)",

    },
    extend: {},
  },
  plugins: [],
}
