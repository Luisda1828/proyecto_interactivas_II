/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./node_modules/flowbite/**/*.js'],
  theme: {

    
    extend: { 

      fontFamily: {
        'subtitulo': ['var(--ff-primary)'],
      },
      fontSize: {
        'subtitulo': '1.625rem',
      },
      fontWeight: {
        'subtitulo': 'var(--fw-reg)',
      },
      

    },
  },
  plugins: [ require('flowbite/plugin')],







}

