'use client'

import {
    motion as m,
	useScroll,
	useTransform,
	useMotionTemplate,
} from 'motion/react'
import React, { useRef } from 'react'

export default function Section_Divider({
	steps,
	bgClass,
	scrollVh,
	startHold,
	className,
}) {
	const wrapRef = useRef(null)

	// 0 at "start end", 1 at "end start"
	const { scrollYProgress } = useScroll({
		target: wrapRef,
		offset: ['start end', 'end start'],
	})

	// DEAD ZONE: keep v==0 until you actually scroll past startHold
	const v = useTransform(scrollYProgress, [0, startHold, 1], [0, 0, 1])

	const stairsClip = useTransform(v, (t) => {
		const n = Math.max(1, steps)
		const x = (i) => (100 / n) * i
		const y = (i) => 100 - t * 100 * (i / n)

		const pts = [
			[0, 100],
			[100, 100],
			[100, y(n)],
		]
		for (let i = n; i >= 1; i--) {
			pts.push([x(i - 1), y(i)])
			if (i > 1) pts.push([x(i - 1), y(i - 1)])
		}
		return `polygon(${pts.map(([px, py]) => `${px}% ${py}%`).join(',')})`
	})

	return (
		<div
			ref={wrapRef}
			className={`relative w-full ${className}`}
			style={{ height: `${scrollVh}vh` }}
			aria-hidden="true"
		>
			<div className="sticky top-0 h-screen z-10 pointer-events-none overflow-hidden">
				<m.div
					className={`absolute inset-0 w-full h-full ${bgClass}`}
					style={{
						clipPath: useMotionTemplate`${stairsClip}`,
						willChange: 'clip-path',
					}}
				/>
			</div>
		</div>
	)
}
