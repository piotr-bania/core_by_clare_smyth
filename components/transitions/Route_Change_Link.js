'use client'

import Link from 'next/link'
import { motion as m } from 'motion/react'
import { link_variant } from '@/animations/ui/Text_Variants'

export default function Route_Change_Link({
	href,
	children,
	className,
	onClick,
}) {
	const handleClick = (e) => {
		if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
		e.preventDefault()
		onClick?.()
		window.dispatchEvent(
			new CustomEvent('navigate:clip', { detail: { href } })
		)
	}
	return (
		<m.div initial="hidden" animate="visible" variants={link_variant}>
			<Link
				href={href}
				onClick={handleClick}
				className={`link ${className}`}
			>
				{children}
			</Link>
		</m.div>
	)
}
