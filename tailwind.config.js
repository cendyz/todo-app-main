/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: [],
	theme: {
		extend: {
			container: {
				center: true,
			},
			fontFamily: {
				sans: ['Josefin Sans', 'sans-serif'],
			},
			fontWeight: {
				w400: 400,
				w700: 700,
			},
			colors: {
				light: {
					gray: {
						100: 'hsl(0, 0%, 98%)',
						200: 'hsl(236, 33%, 92%)',
						300: 'hsl(233, 11%, 84%)',
						400: 'hsl(236, 9%, 61%)',
						500: 'hsl(235, 19%, 35%)',
					},
				},
				dark: {
					gray: {
						100: 'hsl(235, 21%, 11%)',
						200: 'hsl(235, 24%, 19%)',
						300: 'hsl(234, 39%, 85%)',
						400: 'hsl(236, 33%, 92%)',
						500: 'hsl(234, 11%, 52%)',
						600: 'hsl(233, 14%, 35%)',
						700: 'hsl(237, 14%, 26%)',
					},
				},
			},
		},
	},
	plugins: [],
}
