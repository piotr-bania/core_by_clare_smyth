import Headings from '@/components/ui/text/Headings'
import Paragraph from '@/components/ui/text/Paragraph'
import Route_Change_CTA from '@/components/transitions/Route_Change_CTA'

export default function About_Page() {
	return (
		<main>
			<div className="min-h-screen flex flex-col items-center justify-center text-center gap-4 p-4 md:p-8 lg:p-12">
				<div className="flex flex-col">
					<Headings h1Text="About Page" />
					<Paragraph text="This is the about page." />
					<Route_Change_CTA href="/">Go Back Home</Route_Change_CTA>
				</div>
			</div>
		</main>
	)
}
