'use client'

import { Divider } from '@heroui/react'
import { motion as m } from 'motion/react'
import { fade_variant } from '@/animations/Fade'

export default function Divider_Component({ className = '', color = 'pine' }) {
	const colors = {
		pine: 'border-[#0f413c]',
		sand: 'border-[#c1856a]',
		clay: 'border-[#edddd5]',
		silk: 'border-[#f4efec]',
		ivory: 'border-[#fbf6f4]',
	}

	return (
		<m.div
			variants={fade_variant}
			initial="hidden"
			animate="visible"
			className={className}
		>
			<Divider
				style={{ borderColor: `var(--${color})` }}
				className={`w-full ${className}`}
			/>
		</m.div>
	)
}
