module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        pink: 'hsl(322, 100%, 66%)',
        paleCyan: ' hsl(193, 100%, 96%)',
        darkCyan: 'hsl(192, 100%, 9%)',
        grayishBlue: ' hsl(208, 11%, 55%)'
      }
    },
  },
  plugins: [require("daisyui")],
}
