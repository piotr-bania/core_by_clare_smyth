import Headings from '@/components/ui/text/Headings'
import Paragraph from '@/components/ui/text/Paragraph'
import Route_Change from '@/components/transitions/Route_Change'

export default function Home_Page() {
	return (
		<main>
			<div className="min-h-screen flex flex-col items-start justify-center text-left gap-4 p-4 md:p-8 lg:p-12">
				<div className="flex flex-col">
					<Headings h1Text="The Core team" />
					<Headings h2Text="This is heading 2" />
					<Headings h3Text="This is heading 3" />
					<Headings h4Text="This is heading 4" />
					<Headings h5Text="This is heading 5" />
					<Headings h6Text="This is heading 6" />
					<Paragraph
						text="“Everyone in our building is the best they can be.” - Clare Smyth"
						className="quote"
					/>
				</div>
				<div className="max-w-xl">
					<Paragraph text="This is a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
				</div>
				<Route_Change href="/about">About Page</Route_Change>
			</div>
		</main>
	)
}
