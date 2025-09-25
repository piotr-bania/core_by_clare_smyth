import { PiTelegramLogo, PiWhatsappLogo, PiEnvelope } from 'react-icons/pi'
import Headings from '@/components/ui/text/Headings'
import Paragraph from '@/components/ui/text/Paragraph'
import Route_Change_Link from '@/components/transitions/Route_Change_Link'

export default function About_Page() {
	return (
		<main>
			<section className="bg-[#f4efec] min-h-screen flex flex-col items-center justify-center text-center gap-4 p-4 md:p-8 lg:p-12">
				<div className="w-full grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 p-4 md:p-8 lg:p-12">
					{/* <Heading */}
					<Headings
						h1Text="Who’s Behind This"
						className="lg:col-start-1 lg:col-end-13"
					/>

					{/* Paragraphs */}
					<div className="lg:col-start-4 lg:col-end-10 flex flex-col gap-4">
						<Paragraph text="I’m Piotr Bania - a London-based developer and designer with a deep connection to hospitality." />
						<Paragraph text="I built this demo independently, not as an agency brief, but as a vision: a world-class restaurant deserves a world-class digital stage." />
					</div>

					{/* Paragraph */}
					<div className="lg:col-start-4 lg:col-end-10 my-8">
						<Headings h6Text="This is a proof of concept, created quickly, to show how Core’s website could feel: refined, modern, and unforgettable." />
					</div>

					{/* CTA */}
					<div className="lg:col-start-2 lg:col-end-12">
						{/* Heading */}
						<Headings h3Text="Get in Touch" />
						<Paragraph text="If this resonates, I’d love to explore how I can shape the full experience with you." />

						{/* Contact Links */}
						<div className="flex flex-wrap gap-x-12 gap-y-2 justify-center items-center pt-4">
							{/* Email */}
							<Route_Change_Link
								href="mailto:contact@bespokeprogramming.net"
								className="flex items-center gap-2 hover:text-indigo-500 transition-colors"
							>
								<PiEnvelope className="w-5 h-5 text-[#0f413c]" />
								<span>contact@bespokeprogramming.net</span>
							</Route_Change_Link>

							{/* WhatsApp */}
							<Route_Change_Link
								href="tel:+447904968968"
								className="flex items-center gap-2 hover:text-indigo-500 transition-colors"
							>
								<PiWhatsappLogo className="w-5 h-5 text-[#0f413c]" />
								<span>+44 7904 968 968</span>
							</Route_Change_Link>

							{/* Telegram */}
							<Route_Change_Link
								href="https://t.me/+wXV6CfavGhJlMzhk"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 hover:text-indigo-500 transition-colors"
							>
								<PiTelegramLogo className="w-5 h-5 text-[#0f413c]" />
								<span>Message me on Telegram</span>
							</Route_Change_Link>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
