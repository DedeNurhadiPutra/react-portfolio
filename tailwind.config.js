/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        ChineseBlack : '#151515',
        VampireBlack : '#0A0A0A',
        Goldenrod : '#FBFCD4',
        GoldenYellow : '#FFDD03',
        GoldenPoppy : '#FBC403',
        Secondary : '#06b6d4',
        LightGray : '#bcbcbc'
      },
      screens: {
        '2xl': '1280px',
        'xl': '1024px',
        'llg': {'raw' : '(min-width:1000px) and (max-height: 720px)'},
        'cls': {'raw' : '(min-width:400px) and (max-height: 1000px)'},
      },
    },
  },
  plugins: [],
}