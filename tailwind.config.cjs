/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {

		fontSize: {
			'xs': '.75rem',
			'sm': '.875rem',
			'tiny': '.875rem',
			'base': '1rem',
			'md': '1rem',
			'lg': '1.125rem',
			'xl': '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
			'6xl': '4rem',
			'h': '6.25rem',
			'tt': '2.625rem',
			'tta': '3.625rem',
			't': '1.75rem',
			'dir': '2.813rem',


			// header font sizes
			'h-xm': '50px',		// extra small screen
			'h-sm': '55px',		// small screen
			'h-md': '65px',		// medium screen
			'h-lg': '100px',	// large screen
			'h-xl': '100px',	// extra large screen

			// title text font sizes
			'tt-xm': '30px',
			'tt-sm': '35px',
			'tt-md': '40px',
			'tt-lg': '42px',
			'tt-xl': '42px',	

				// title text font sizes ALTERNATIVE
				'tta-xm': '42px',
				'tta-sm': '48px',
				'tta-md': '50px',
				'tta-lg': '58px',
				'tta-xl': '58px',	

			// main text font sizes
			't-xm': '15px',
			't-sm': '20px',
			't-md': '24px',		// my phone size
			't-lg': '28px',
			't-xl': '28px',		// display size
		},

		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],

}