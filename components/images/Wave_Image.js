// components/graphics/Wave_Image.js
'use client'

import { motion as m } from 'motion/react'
import { useTexture } from '@react-three/drei'
import { fade_variant } from '@/animations/Fade'
import { useMemo, useRef, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'

const damp = (a, b, lambda, dt) => a + (b - a) * (1 - Math.exp(-lambda * dt))

/** Load a shader file from /public (works with Turbopack, no loaders) */
function useShader(path) {
	const [code, setCode] = useState('')
	useEffect(() => {
		let alive = true
		fetch(path)
			.then((r) => r.text())
			.then((t) => {
				if (alive) setCode(t)
			})
		return () => {
			alive = false
		}
	}, [path])
	return code
}

function Plane({
	images = [],
	secondsPerSlide = 8,
	transitionSpeed = 0.75, // lower = slower wipe
	stripesCount = 10, // <— gre: count
	stripeSmoothness = 0.5, // <— gre: smoothness
	vertSrc,
	fragSrc,
}) {
	const { viewport } = useThree()
	const size = Math.min(viewport.width, viewport.height)

	const textures = useTexture(images)
	const mat = useRef()

	const iCurr = useRef(0)
	const iNext = useRef(1)
	const clock = useRef(0)
	const holding = useRef(true)
	const target = useRef(0)
	const progress = useRef(0)

	const uniforms = useMemo(
		() => ({
			// gre uniforms:
			count: { value: stripesCount },
			smoothness: { value: stripeSmoothness },
			progress: { value: 0 },
			uTransparency: { value: 1.0 },
			uTexture1: { value: null },
			uTexture2: { value: null },
		}),
		[stripesCount, stripeSmoothness]
	)

	// make runtime changes reflect prop updates
	useEffect(() => {
		uniforms.count.value = stripesCount
	}, [stripesCount, uniforms])
	useEffect(() => {
		uniforms.smoothness.value = stripeSmoothness
	}, [stripeSmoothness, uniforms])

	useEffect(() => {
		if (!textures.length) return
		uniforms.uTexture1.value = textures[iCurr.current]
		uniforms.uTexture2.value = textures[iNext.current]
	}, [textures]) // eslint-disable-line

	useFrame((_, dt) => {
		if (!mat.current || !textures.length) return

		clock.current += dt
		if (holding.current && clock.current >= secondsPerSlide) {
			holding.current = false
			target.current = 1
			clock.current = 0
		}

		progress.current = damp(
			progress.current,
			target.current,
			transitionSpeed,
			dt
		)
		uniforms.progress.value = progress.current

		if (!holding.current && Math.abs(progress.current - 1) < 0.002) {
			iCurr.current = iNext.current
			iNext.current = (iCurr.current + 1) % textures.length
			uniforms.uTexture1.value = textures[iCurr.current]
			uniforms.uTexture2.value = textures[iNext.current]
			holding.current = true
			target.current = 0
			progress.current = 0
			uniforms.progress.value = 0
		}
	})

	if (!vertSrc || !fragSrc) return null

	return (
		<mesh scale={[size, size, 1]}>
			<planeGeometry args={[1, 1]} />
			<shaderMaterial
				ref={mat}
				uniforms={uniforms}
				vertexShader={vertSrc}
				fragmentShader={fragSrc}
				transparent={false}
			/>
		</mesh>
	)
}

// ...
export default function Wave_Image({
	images = [],
	secondsPerSlide,
	transitionSpeed,
	stripesCount,
	stripeSmoothness,
	className = '',
	take = 5, // how many to show each load
}) {
	const VERT = useShader('/shaders/transition.vert')
	const FRAG = useShader('/shaders/stripes.frag')

	// pick N unique images + keep order random (Fisher–Yates)
	const pickedImages = useMemo(() => {
		const n = Math.min(take, images.length)
		const arr = [...images]
		for (let i = arr.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1))
			;[arr[i], arr[j]] = [arr[j], arr[i]]
		}
		return arr.slice(0, n)
	}, [images, take])

	return (
		<m.div
			initial="hidden"
			animate="visible"
			variants={fade_variant}
			className={`absolute top-0 right-0 overflow-hidden ${className}`}
			style={{ width: 'min(65vw, 115vh, 100vh)', aspectRatio: '1 / 1' }}
		>
			<Canvas
				orthographic
				camera={{ position: [0, 0, 1], zoom: 1 }}
				className="w-full h-full block"
			>
				<Plane
					key={pickedImages.join('|')} // ensure clean re-init if list changes (HMR)
					images={pickedImages} // ← random 5 on each reload
					secondsPerSlide={secondsPerSlide}
					transitionSpeed={transitionSpeed}
					stripesCount={stripesCount}
					stripeSmoothness={stripeSmoothness}
					vertSrc={VERT}
					fragSrc={FRAG}
				/>
			</Canvas>
		</m.div>
	)
}
