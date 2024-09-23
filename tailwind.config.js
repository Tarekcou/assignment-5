/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}', './file/*.{html,js}'],
  theme: {
    extend: {
      colors:{
      }
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [  require('daisyui'),
],
}

// npx tailwindcss -i ./input.css -o ./output.css --watch