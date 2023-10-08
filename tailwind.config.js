/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/html/utils/withMT");

export default withMT({
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

	theme: {
		extend: {
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
				courgette:['Courgette', 'cursive']
			},
			colors: {
				"pink": "#EAA0A2",
				"secondery":" #3A4664"
			},
		},
		
	},
	plugins: [require("daisyui")]
})

