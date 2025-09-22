// app/hero.mjs
import { heroui } from '@heroui/theme'

export default heroui({
	themes: {
		light: {
			layout: {
				radius: { small: '8px', medium: '12px', large: '16px' },
			},
			font: {
				sans: 'var(--font-body), ui-sans-serif, system-ui',
				body: 'var(--font-body), ui-sans-serif, system-ui',
				heading: 'var(--font-heading), ui-sans-serif, system-ui',
			},
			colors: {
				background: '#FFFFFF',
				foreground: '#0f413c',
				divider: '#edece3',
				primary: { DEFAULT: '#C1856A', foreground: '#FFFFFF' },
				secondary: { DEFAULT: '#DA9165', foreground: '#FFFFFF' },
				heading: '#0f413c',
				text: '#697877',
				off_white: '#F1F1F1',
				white: '#ffffff',
			},
		},

		dark: {
			layout: { radius: { small: '8px', medium: '12px', large: '16px' } },
			font: {
				sans: 'var(--font-body), ui-sans-serif, system-ui',
				body: 'var(--font-body), ui-sans-serif, system-ui',
				heading: 'var(--font-heading), ui-sans-serif, system-ui',
			},
			colors: {
				background: '#040404',
				foreground: '#090909',
				divider: '#1c1c1e',
				primary: { DEFAULT: '#C1856A', foreground: '#FFFFFF' },
				secondary: { DEFAULT: '#DA9165', foreground: '#FFFFFF' },
				heading: '#F5F5F7',
				text: '#B5B5C0',
				off_white: '#2C2C2E',
				white: '#ffffff',
			},
		},
	},
})
