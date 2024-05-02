import type { Config } from 'tailwindcss'
const config: Config = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			xs: '360px',
			sm: '480px',
			md: '768px',
			lg: '1000px',
			xl: '1280px',
			'2xl': '1440px',
			// '3xl': '1920px',
			// smOnly: { max: '767.98px' },
			// mdOnly: { min: '768px', max: '1279.98px' },
			// notMd: { max: '767.98px' },
			// notXl: { max: '1279.98px' },
		},
		extend: {
			container: {
				center: true,
				padding: {
					DEFAULT: '1.25rem',
					sm: '1.25rem',
					md: '1.25rem',
					xl: '2.5rem',
				},
			},
			colors: {
				accent: {
					primary: '#C3B1A4',
				},
			},
			fontFamily: {
				eUkraine: ['var(--font-eUkraine)'],
				eUkraineHead: ['var(--font-eUkraineHead)'],
			},
		},
	},
	plugins: [],
}
export default config
