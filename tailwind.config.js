/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'my-font': ["'Inter', sans-serif"],
    },
    fontSize: {
      'mywidth': '818.43px',
      'myheight': '722.72px',
    },
    extend: {
      colors: {
        'grey': '#3D3D3C',
      },
    },
  },
  plugins: [],
}
