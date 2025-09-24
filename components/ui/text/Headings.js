'use client'

import {
	heading_1_variant,
	heading_2_variant,
	heading_3_variant,
	heading_4_variant,
	heading_5_variant,
	heading_6_variant,
} from '@/animations/ui/Text_Variants'
import { motion as m } from 'motion/react'

export default function Headings({ className = '', ...rest }) {
	const variants = {
		h1: heading_1_variant,
		h2: heading_2_variant,
		h3: heading_3_variant,
		h4: heading_4_variant,
		h5: heading_5_variant,
		h6: heading_6_variant,
	}

	return (
		<>
			{Object.entries(rest).map(([key, text]) => {
				if (!text) return null
				const level = key.toLowerCase().replace('text', '')
				const Tag = m[level] || m.h2
				return (
					<Tag
						key={level}
						initial="hidden"
						animate="visible"
						variants={variants[level]}
						className={className}
					>
						{text}
					</Tag>
				)
			})}
		</>
	)
}
