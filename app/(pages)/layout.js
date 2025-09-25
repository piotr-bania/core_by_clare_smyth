import '@/app//globals.css'
import '@/app/globals.scss'
import { Providers } from '@/app/providers'
import { interBody, forumHeading } from '@/app/fonts'
import config from '@/content/config.json'
import Navbar from '@/components/ui/layout/Navbar'
import Cursor_Trail from '@/components/transitions/Cursor_Trail'
import Lenis_Provider from '@/components/providers/Lenis_Provider'
import Navigation_Clip from '@/components/transitions/Navigation_Clip'
import Animation_Wrapper from '@/components/transitions/Animation_Wrapper'

const { site, seo = {} } = config

export const metadata = {
	title: site?.title || 'Website Title',
	description: site?.description || 'Description of the website',
	keywords: seo?.keywords || [],
	authors: seo?.authors || [{ name: site?.name || 'Bespoke Programming' }],
	creator: seo?.creator || 'Bespoke Programming',
	publisher: seo?.publisher || 'Bespoke Programming Ltd.',
	openGraph: {
		title: seo?.openGraph?.title || site?.title,
		description: seo?.openGraph?.description || site?.description,
		url: seo?.openGraph?.url || site?.domain,
		siteName: seo?.openGraph?.siteName || site?.name,
		locale:
			seo?.openGraph?.locale ||
			site?.language?.replace('-', '_') ||
			'en_GB',
		type: seo?.openGraph?.type || 'website',
	},
	twitter: {
		card: seo?.twitter?.card || 'summary_large_image',
		title: seo?.twitter?.title || site?.title,
		description: seo?.twitter?.description || site?.description,
		creator: seo?.twitter?.creator || '',
	},
	robots:
		typeof seo?.robots === 'object'
			? seo.robots
			: { index: true, follow: true },
	alternates: {
		canonical: seo?.canonical || site?.domain,
	},
	metadataBase: new URL(site?.domain || 'https://localhost:3000'),
}

export default function RootLayout({ children }) {
	return (
		<html
			suppressHydrationWarning
			lang={site?.language?.split('-')[0] || 'en'}
			className={`light ${interBody.variable} ${forumHeading.variable}`}
		>
			<body suppressHydrationWarning className="font-sans antialiased">
				{/* Navigation Overlay */}
				<div id="overlay_root" />
				<Navigation_Clip />

				{/* Main Content */}
				<Providers>
					<Navbar />
					<Animation_Wrapper>
						<Lenis_Provider />
						{children}
						<Cursor_Trail />
					</Animation_Wrapper>
				</Providers>
			</body>
		</html>
	)
}
