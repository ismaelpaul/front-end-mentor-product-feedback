/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			mobile: '375px',
			tablet: '768px',
			desktop: '1440px',
		},
		colors: {
			purple: '#AD1FEA',
			blue: '#4661E6',
			'dark-gray-blue': '#373F68',
			'dark-slate-blue': '#3A4374',
			'light-slate-blue': '#647196',
			'light-blue': '#62BCFA',
			white: '#FFFFFF',
			'white-smoke': '#F2F4FF',
			'white-ghost': '#F7F8FD',
			peachy: '#F49F85',
		},
		fontSize: {
			titleMobile: '0.938rem',
			subtitleMobile: '0.813rem',
		},
		letterSpacing: {
			tight: '-0.012rem',
		},
		fontFamily: {
			jost: ['Jost', 'sans-serif'],
		},
		fontWeight: {
			light: 300,
			regular: 400,
			medium: 500,
			semiBold: 600,
			bold: 700,
			extraBold: 800,
		},
	},
	plugins: [],
};
