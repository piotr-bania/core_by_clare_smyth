'use client'
import { createPortal } from 'react-dom'
import { motion as m } from 'motion/react'
import { useEffect, useState } from 'react'
import { transitions as cfg } from '@/lib/config'

export default function Enter_Animation({
	onAnimationComplete,
	ruleColor = '#c1856a',
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
				initial={{ opacity: 1 }}
				animate={{
					opacity: 0,
					transition: {
						duration: t.enter.duration * 0.4,
						ease: t.enter.ease,
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
			{/* Fill: starts fully covered, scales upward to clear the screen */}
			<m.div
				initial={{ scaleY: 1, opacity: 1 }}
				animate={{ scaleY: 0, opacity: 1 }}
				transition={{
					duration: t.enter.duration,
					delay: t.enter.delay,
					ease: t.enter.ease,
				}}
				onAnimationComplete={onAnimationComplete}
				style={{
					position: 'fixed',
					inset: 0,
					background: t.overlay.color,
					transformOrigin: 'bottom center', // wipe upward
					zIndex: t.overlay.zIndex,
				}}
			/>

			{/* Gilded rule: tracks the receding edge upward */}
			<m.div
				initial={{ y: '100vh' }}
				animate={{ y: '0vh' }}
				transition={{
					duration: t.enter.duration,
					delay: t.enter.delay,
					ease: t.enter.ease,
				}}
				style={{
					position: 'fixed',
					left: 0,
					right: 0,
					height: `${ruleThickness}px`,
					background: ruleColor,
					zIndex: t.overlay.zIndex + 1,
					pointerEvents: 'none',
				}}
			/>
		</>,
		container
	)
}
