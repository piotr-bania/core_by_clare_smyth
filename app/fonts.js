import { Forum, Inter } from 'next/font/google'

export const forumHeading = Forum({
	subsets: ['latin'],
	weight: ['400'],
	style: ['normal'],
	display: 'swap',
	variable: '--font-heading',
})

export const interBody = Inter({
	subsets: ['latin'],
	weight: ['400'],
	display: 'swap',
	variable: '--font-body',
})

