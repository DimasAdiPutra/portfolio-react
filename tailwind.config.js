/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			// variable Font size
			fontSize: {
				logo: ['1.5rem', { lineHeight: '1.75rem', fontWeight: '400' }],
				'title-mobile': [
					'1.5rem',
					{ lineHeight: '1.75rem', fontWeight: '400' },
				],
				'title-desktop': ['2rem', { lineHeight: '2.5rem', fontWeight: '400' }],
				'body-large': ['1.25rem', { lineHeight: '1.5rem', fontWeight: '400' }],
				'body-base': ['1rem', { lineHeight: '1.375rem', fontWeight: '400' }],
				'body-small': ['0.75rem', { lineHeight: '1rem', fontWeight: '400' }],
				'body-base-bold': [
					'1rem',
					{ lineHeight: '1.375rem', fontWeight: '500' },
				],
				'heading-h1': ['2.25rem', { lineHeight: '2.75rem', fontWeight: '500' }],
				'heading-h2': ['1.75rem', { lineHeight: '2.25rem', fontWeight: '500' }],
				'heading-h3': ['1.25rem', { lineHeight: '1.5rem', fontWeight: '600' }],
			},

			// Font Family untuk oswald
			fontFamily: {
				logo: ['Oswald', 'sans-serif'],
			},

			// Variable warna
			colors: {
				main: '#edf2f4',
				second: '#8d99ae',
				black: '#2b2d42',
				danger: '#ef233c',
				secondarydanger: '#d90429',
			},
		},
	},
	plugins: [],
}
