/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/html/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        courgette: ['Courgette', 'cursive']
      },
      colors: {
        "pink": "#EAA0A2",
        "secondery": "#3A4664"
      },
      screens: {
        '2xl': '1536px', // Ensure this is set if needed
      },
    },
  },
  plugins: [require("daisyui")]
});
