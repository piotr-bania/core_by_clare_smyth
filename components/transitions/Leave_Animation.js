'use client'
import { createPortal } from 'react-dom'
import { motion as m } from 'motion/react'
import { useEffect, useState } from 'react'
import { transitions as cfg } from '@/lib/config'

export default function Leave_Animation({
	onAnimationComplete,
	ruleColor = '#c1856a', // soft gold
	ruleThickness = 2,
}) {
	const t = cfg()
	const [container, setContainer] = useState(null)
	useEffect(() => setContainer(document.getElementById('overlay_root')), [])
	if (!container) return null

	const prefersReduced =
		typeof window !== 'undefined' &&
		window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches

	if (prefersReduced) {
		return createPortal(
			<m.div
				initial={{ opacity: 0 }}
				animate={{
					opacity: 1,
					transition: {
						duration: t.exit.duration * 0.4,
						ease: t.exit.ease,
					},
				}}
				onAnimationComplete={onAnimationComplete}
				style={{
					position: 'fixed',
					inset: 0,
					background: t.overlay.color,
					zIndex: t.overlay.zIndex,
				}}
			/>,
			container
		)
	}

	return createPortal(
		<>
			{/* Fill: left → right */}
			<m.div
				initial={{ scaleX: 0, opacity: 1 }}
				animate={{ scaleX: 1, opacity: 1 }}
				transition={{
					duration: t.exit.duration,
					delay: t.exit.delay,
					ease: t.exit.ease,
				}}
				onAnimationComplete={onAnimationComplete}
				style={{
					position: 'fixed',
					inset: 0,
					background: t.overlay.color,
					transformOrigin: 'left center',
					zIndex: t.overlay.zIndex,
				}}
			/>

			{/* Rule: right → left (opposes the fill) */}
			<m.div
				initial={{ x: '100vw' }}
				animate={{ x: '0vw' }}
				transition={{
					duration: t.exit.duration,
					delay: t.exit.delay,
					ease: t.exit.ease,
				}}
				style={{
					position: 'fixed',
					top: 0,
					bottom: 0,
					width: `${ruleThickness}px`,
					background: ruleColor,
					zIndex: t.overlay.zIndex + 1,
					pointerEvents: 'none',
				}}
			/>
		</>,
		container
	)
}
