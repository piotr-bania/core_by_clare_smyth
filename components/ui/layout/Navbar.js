import Route_Change_Link from '@/components/transitions/Route_Change_Link'
import Image from 'next/image'

export default function Navbar() {
	return (
		<section
			id="navbar"
			className="fixed top-0 left-0 w-full grid grid-cols-3 gap-4 p-4 md:p-8 lg:p-12 z-50"
		>
			{/* Hamburger */}
			<div className="col-span-1 flex items-start">
				<Route_Change_Link href="#">&#9776;</Route_Change_Link>
			</div>
			{/* Logo */}
			<div className="col-span-1 md:col-span-1 flex items-start justify-center">
				<Route_Change_Link href="/">
					<Image
						src="/images/logo.png"
						alt="Core by Clare Smyth"
						width={150}
						height={50}
						priority
					/>
				</Route_Change_Link>
			</div>
			{/* Links */}
			<div className="col-span-1 flex flex-col items-end text-right gap-2">
				<Route_Change_Link href="/about">About</Route_Change_Link>
				<Route_Change_Link href="/menus">Menus</Route_Change_Link>
				<Route_Change_Link href="/chefs-table">
					Chef`s Table
				</Route_Change_Link>
				<Route_Change_Link href="/team-whiskey-and-seaweed">
					Team Whiskey & Seaweed
				</Route_Change_Link>
				<Route_Change_Link href="/gifts">Gifts</Route_Change_Link>
			</div>
		</section>
	)
}
