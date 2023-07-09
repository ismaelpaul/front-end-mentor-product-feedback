/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			sm: '375px',
			tablet: '768px',
			laptop: '1440px',
			desktop: '1920px',
		},
		colors: {
			purple: '#AD1FEA',
			heliotrope: '#C75AF6',
			blue: '#4661E6',
			'dark-grey-blue': '#373F68',
			'dark-slate-blue': '#3A4374',
			'light-slate-blue': '#647196',
			'light-blue': '#62BCFA',
			'cornflower-blue': '#8397F8',
			'lavender-blue': '#CFD7FF',
			white: '#FFFFFF',
			'white-smoke': '#F2F4FF',
			'white-ghost': '#F7F8FD',
			'regent-grey': '#8C92B3',
			peachy: '#F49F85',
			black: colors.black,
			red: '#D73737',
		},
		fontSize: {
			title18px: '1.125rem',
			title20px: '1.25rem',
			title24px: '1.5rem',
			titleMobile: '0.938rem',
			subtitleMobile: '0.813rem',
			text16px: '1rem',
			text15px: '0.938rem',
			text14px: '0.875rem',
			roadmap: '1rem',
		},
		letterSpacing: {
			tight: '-0.012rem',
			tightier: '-0.016rem',
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
		borderWidth: {
			'6px': '0.375',
		},
		extend: {
			height: {
				'72px': '4.5rem',
			},
			spacing: {
				'38px': '2.375rem',
			},
			animation: {
				slide: 'rightToLeft .5s ease-in-out',
			},
			keyframes: {
				rightToLeft: {
					'0%': {
						transform: 'translate-x-8',
					},
					'100%': {
						transform: 'translate-x-0',
					},
				},
			},
		},
	},
	plugins: [],
};
