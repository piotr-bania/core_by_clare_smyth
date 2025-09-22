'use client'

import { useEffect, useRef, useState } from 'react'

export default function Cursor_Trail({
	variant = 'halo',
	selector = 'a, button, [role="button"], [data-cursor="interactive"]',
	lerp = 0.1,
	idleSize = 10,
	activeSize = 80,
	ringWidth = 1,
}) {
	const el = useRef(null)
	const rafId = useRef(0)
	const pos = useRef({ x: 0, y: 0 })
	const last = useRef({ x: 0, y: 0 })
	const target = useRef({ x: 0, y: 0 })
	const activeRef = useRef(false)
	const [enabled, setEnabled] = useState(false)

	useEffect(() => {
		const isTouch =
			window.matchMedia?.('(pointer: coarse)')?.matches ||
			'ontouchstart' in window
		setEnabled(!isTouch)
	}, [])

	useEffect(() => {
		if (!enabled) return

		const onMove = (e) => {
			target.current.x = e.clientX
			target.current.y = e.clientY
			const node = document.elementFromPoint(e.clientX, e.clientY)
			activeRef.current = !!node?.closest(selector)
			el.current?.classList.remove('is-hidden')
		}

		const onEnter = () => el.current?.classList.remove('is-hidden')
		const onLeave = () => el.current?.classList.add('is-hidden')

		window.addEventListener('mousemove', onMove, { passive: true })
		window.addEventListener('mouseenter', onEnter)
		window.addEventListener('mouseleave', onLeave)

		const loop = () => {
			// follow
			pos.current.x += (target.current.x - pos.current.x) * lerp
			pos.current.y += (target.current.y - pos.current.y) * lerp

			const dx = pos.current.x - last.current.x
			const dy = pos.current.y - last.current.y
			last.current = { ...pos.current }

			const angle = Math.atan2(dy, dx) * (180 / Math.PI)
			const active = activeRef.current

			const size = active ? activeSize : idleSize
			const rotate = active ? 0 : 45
			const radius = active ? 999 : 12
			const idleStroke = Math.max(1, Math.floor(idleSize / 2))
			const stroke = active ? ringWidth : idleStroke

			if (el.current) {
				el.current.style.setProperty('--x', `${pos.current.x}px`)
				el.current.style.setProperty('--y', `${pos.current.y}px`)
				el.current.style.setProperty('--size', `${size}px`)
				el.current.style.setProperty('--rotate', `${rotate}deg`)
				el.current.style.setProperty('--radius', `${radius}px`)
				el.current.style.setProperty('--stroke', `${stroke}px`)
				el.current.style.setProperty('--angle', `${angle}deg`)
				// NEW: fade inner fill out on hover, in on leave
				el.current.style.setProperty('--fill-o', active ? '0' : '1')

				// optional: variant-specific vars you already had
				el.current.style.setProperty(
					'--capsule-scale',
					active ? '2.0' : '1'
				)
				el.current.style.setProperty(
					'--halo-opacity',
					active ? '0.9' : '0.35'
				)
				el.current.style.setProperty(
					'--ring2-scale',
					active ? '1.25' : '1'
				)
			}

			rafId.current = requestAnimationFrame(loop)
		}

		rafId.current = requestAnimationFrame(loop)

		return () => {
			cancelAnimationFrame(rafId.current)
			window.removeEventListener('mousemove', onMove)
			window.removeEventListener('mouseenter', onEnter)
			window.removeEventListener('mouseleave', onLeave)
		}
	}, [enabled, selector, lerp, idleSize, activeSize, ringWidth])

	if (!enabled) return null
	return (
		<div
			ref={el}
			className={`cursor_trail cursor--${variant}`}
			aria-hidden="true"
		/>
	)
}
