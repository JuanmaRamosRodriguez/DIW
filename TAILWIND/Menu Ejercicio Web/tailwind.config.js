module.exports = {
  variants: {
    extend: {
        animation: ['responsive','hover','group-hover'],
        fontSize: ['responsive','hover','group-hover'],
        transform: ['responsive','hover','group-hover'],
        scale: ['responsive','hover','group-hover'],
        colors:{
          "azulClaro":'#E0FFFF'
        },
    },
  },

  content: [ './components//.{html,js}',
              './pages/**/.{html,js}',
              './index.html',],
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  
  plugins: [],
}
