module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'main-background':"url('./src/assets/Background.svg')"
      },
      colors:{
        'main-color':'#121B2D'
      },
      fontFamily:{
        'poppins':['Poppins',' sans-serif']
      }
    },
  },
  plugins: [],
}