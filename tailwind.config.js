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
        'cls': {'raw' : '(min-width:400px) and (max-height: 1000px)'}
      },
    },
  },
  plugins: [],
}
