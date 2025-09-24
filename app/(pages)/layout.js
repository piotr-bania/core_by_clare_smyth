import '@/app//globals.css'
import '@/app/globals.scss'
import { site } from '@/content/config'
import { Providers } from '@/app/providers'
import { interBody, forumHeading } from '@/app/fonts'
import Navbar from '@/components/ui/layout/Navbar'
import Cursor_Trail from '@/components/transitions/Cursor_Trail'
import Lenis_Provider from '@/components/providers/Lenis_Provider'
import Navigation_Clip from '@/components/transitions/Navigation_Clip'
import Animation_Wrapper from '@/components/transitions/Animation_Wrapper'

export const metadata = {
	title: site.title || 'Website Title',
	description: site.description || 'Description of the website',
}

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
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
