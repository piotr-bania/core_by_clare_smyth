import Image from 'next/image'
import Headings from '@/components/ui/text/Headings'
import Paragraph from '@/components/ui/text/Paragraph'
import Wave_Image from '@/components/images/Wave_Image'
import Section_Divider from '@/components/ui/dividers/Section_Divider'
import Route_Change_CTA from '@/components/transitions/Route_Change_CTA'
import Divider_Component from '@/components/ui/dividers/Divider_Component'

export default function Home_Page() {
	return (
		<main>
			<div className="relative h-screen overflow-hidden">
				{/* Hero image with wave transition */}
				<Wave_Image
					images={[
						'/images/Image_1.png',
						'/images/Image_2.png',
						'/images/Image_3.png',
						'/images/Image_4.jpg',
						'/images/Image_5.jpg',
						'/images/Image_6.jpg',
						'/images/Image_7.jpg',
						'/images/Image_8.jpg',
						'/images/Image_9.jpg',
						'/images/Image_10.jpg',
						'/images/Image_11.jpg',
						'/images/Image_12.jpg',
						'/images/Image_13.jpg',
						'/images/Image_14.jpg',
						'/images/Image_15.jpg',
					]}
					take={3}
					secondsPerSlide={1}
					transitionSpeed={0.75}
					stripesCount={15}
					stripeSmoothness={0.75}
					className="pointer-events-none"
				/>

				{/* Hero Section */}
				<section
					id="hero"
					className="absolute bottom-0 left-0 w-full grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 p-4 md:p-8 lg:p-12 z-1"
				>
					<div className="max-w-[800px] lg:col-start-2 lg:col-end-9 text-left z-1">
						<Headings h1Text="Crafted with Nature’s Finest" />
					</div>
					<div className="lg:col-start-4 lg:col-end-8 text-right z-1">
						<Paragraph text="At Core, dining is more than a meal — it’s a celebration of the land, the seasons, and the people who bring them to life." />
					</div>
					<div className="lg:col-start-1 lg:col-end-13 flex items-end justify-end z-1">
						<Route_Change_CTA href="/about">
							Book a Table
						</Route_Change_CTA>
					</div>
				</section>

				{/* Section Divider */}
				<Section_Divider
					steps={5}
					bgClass="bg-[#edddd5]"
					scrollVh={50}
					startHold={0.67}
				/>
			</div>
			{/* Additional Content Section */}
			<section className="bg-[#edddd5] pt-12 md:pt-24 lg:pt-36">
				<div className="w-full h-screen flex justify-center items-center">
					<div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 p-4 md:p-8 lg:p-12 z-1 text-center">
						<Headings
							h2Text="More Than a Website"
							className="flex flex-col lg:col-start-3 lg:col-end-11 items-center"
						/>
						<Paragraph
							text="What you see here is only a glimpse — crafted in just a few days to imagine what Core’s digital presence could become."
							className="lg:col-start-4 lg:col-end-10"
						/>
						<Paragraph
							text="Every scroll, every transition, every detail is intentional. Just like your cuisine."
							className="lg:col-start-4 lg:col-end-10"
						/>
						<div className="lg:col-start-3 lg:col-end-11">
							<Route_Change_CTA href="/about">
								Discover More
							</Route_Change_CTA>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
