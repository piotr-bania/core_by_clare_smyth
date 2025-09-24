'use client'

import Link from 'next/link'
import { motion as m } from 'motion/react'
import { cta_variant } from '@/animations/ui/Text_Variants'

export default function Route_Change_CTA({
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
		<m.div initial="hidden" animate="visible" variants={cta_variant}>
			<Link
				href={href}
				onClick={handleClick}
				className={`cta ${className}`}
			>
				{children}
			</Link>
		</m.div>
	)
}
