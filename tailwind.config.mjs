/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '20px',
				md: '64px',
			},
		},
		extend: {
			fontFamily: {
				sora: ['Sora', 'sans-serif'],
			},
			colors: {
				bg: 'rgb(var(--c-bg) / <alpha-value>)',
				text: 'rgb(var(--c-text) / <alpha-value>)',
				primary: 'rgb(var(--c-primary) / <alpha-value>)',
				'primary-hover': 'rgb(var(--c-primary-hover) / <alpha-value>)',
				ui: 'rgb(var(--c-ui) / <alpha-value>)',
				surface: 'rgb(var(--c-surface) / <alpha-value>)',
				line: 'rgb(var(--c-line) / <alpha-value>)',
				'card-bg': 'rgb(var(--c-surface) / <alpha-value>)',
			},
			maxWidth: {
				content: '1280px',
			},
			spacing: {
				'section-d': '320px',
				'section-m': '160px',
				card: '32px',
			},
			backdropBlur: {
				card: "16px",
			},
			fontSize: {
				h1: ['56px', { lineHeight: '100%', letterSpacing: '-0.02em', fontWeight: '600' }],
				h2: ['50px', { lineHeight: '120%', letterSpacing: '-0.02em' }],
				h3: ['36px', { lineHeight: '110%', letterSpacing: '-0.01em' }],
				h4: ['32px', { lineHeight: '120%', letterSpacing: '-0.01em' }],
				h5: ['24px', { lineHeight: '120%', letterSpacing: '-0.01em' }],
				h6: ['16px', { lineHeight: '120%', letterSpacing: '-0.01em' }],
				body: ['18px', { lineHeight: '140%', letterSpacing: '-0.01em' }],
				button: ['14px', { lineHeight: '120%', fontWeight: '500', letterSpacing: '-0.01em' }],
				small: ['13px', { lineHeight: '120%', letterSpacing: '-0.01em', fontWeight: '500' }],
			},
		},
	},
	plugins: [],
};
