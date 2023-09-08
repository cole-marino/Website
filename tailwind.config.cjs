/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {

		fontSize: {
			'xs': '.75rem',
			'sm': '.875rem',
			'tiny': '.875rem',
			'base': '1rem',
			'lg': '1.125rem',
			'xl': '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
			'6xl': '4rem',
			'7xl': '5rem',

			// header font sizes
			'h-xm': '43px',		// extra small screen
			'h-sm': '52px',		// small screen
			'h-md': '75px',		// medium screen
			'h-lg': '100px',	// large screen
			'h-xl': '100px',	// extra large screen

			// title text font sizes
			'tt-xm': '25px',
			'tt-sm': '28px',
			'tt-md': '38px',
			'tt-lg': '42px',
			'tt-xl': '42px',	

			// main text font sizes
			't-xm': '15px',
			't-sm': '20px',
			't-md': '24px',
			't-lg': '28px',
			't-xl': '28px',		// display size
		},

		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],

}