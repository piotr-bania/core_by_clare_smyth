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
				// Base colors
				background: 'var(--color-background)',
				foreground: 'var(--color-foreground)',
				divider: 'var(--color-divider)',
				// Brand colors
				primary: {
					DEFAULT: 'var(--color-primary)',
					foreground: 'var(--color-surface)',
				},
				secondary: {
					DEFAULT: 'var(--color-secondary)',
					foreground: 'var(--color-surface)',
				},
				// Functional colors
				heading: 'var(--color-foreground)',
				text: 'var(--color-text)',
				surface: 'var(--color-surface)',
				white: 'var(--color-surface)',
			},
		},
	},
})
