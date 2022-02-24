module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'black-t-50': 'rgba(0,0,0,0.5)',
      },
      colors: {
        'bground': '#E5E5E5',
        'primary': '#FF6464',
        'secondary': '#00A8CC',
        'dark': '#21243D',
        'light': '#8695A4',
      },
      maxWidth: {
        'photoMaxW': '350px',
        '1/2': '50%',
        'icon': '50px',

      },
      maxHeight: {
        'photoMaxH': '350px',
        'icon': '50px',
        'about': '600px',
      },
      minHeight: {
        'photoMinH': '350px',
        'icon': '50px',

      },
      minWidth: {
        'photoMinW': '350px',
        'icon': '50px',
      },
      width: {
        'projectShow': '350px'
      }

    },
  },
  plugins: [],
}