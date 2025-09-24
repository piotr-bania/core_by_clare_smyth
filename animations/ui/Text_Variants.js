export const heading_1_variant = {
	hidden: { opacity: 0, filter: 'blur(5px)', y: 50 },
	visible: {
		opacity: 1,
		filter: 'blur(0px)',
		y: 0,
		transition: { duration: 1.5, delay: 0, ease: 'easeInOut' },
	},
}

export const heading_2_variant = {
	hidden: { opacity: 0, filter: 'blur(5px)', y: 50 },
	visible: {
		opacity: 1,
		filter: 'blur(0px)',
		y: 0,
		transition: { duration: 1.5, delay: 0.1, ease: 'easeInOut' },
	},
}

export const heading_3_variant = {
	hidden: { opacity: 0, filter: 'blur(5px)', y: 50 },
	visible: {
		opacity: 1,
		filter: 'blur(0px)',
		y: 0,
		transition: { duration: 1.5, delay: 0.2, ease: 'easeInOut' },
	},
}

export const heading_4_variant = {
	hidden: { opacity: 0, filter: 'blur(5px)', y: 50 },
	visible: {
		opacity: 1,
		filter: 'blur(0px)',
		y: 0,
		transition: { duration: 1.5, delay: 0.3, ease: 'easeInOut' },
	},
}

export const heading_5_variant = {
	hidden: { opacity: 0, filter: 'blur(5px)', y: 50 },
	visible: {
		opacity: 1,
		filter: 'blur(0px)',
		y: 0,
		transition: { duration: 1.5, delay: 0.4, ease: 'easeInOut' },
	},
}

export const heading_6_variant = {
	hidden: { opacity: 0, filter: 'blur(5px)', y: 50 },
	visible: {
		opacity: 1,
		filter: 'blur(0px)',
		y: 0,
		transition: { duration: 1.5, delay: 0.5, ease: 'easeInOut' },
	},
}

export const paragraph_variant = {
	hidden: { opacity: 0, filter: 'blur(5px)', y: 50 },
	visible: {
		opacity: 1,
		filter: 'blur(0px)',
		y: 0,
		transition: { duration: 1.5, delay: 0.6, ease: 'easeInOut' },
	},
}

export const link_variant = {
	hidden: { opacity: 0, filter: 'blur(5px)', y: 50 },
	visible: (i = 0) => ({
		opacity: 1,
		filter: 'blur(0px)',
		y: 0,
		transition: { duration: 1.5, delay: 0.7, ease: 'easeInOut' },
	}),
}

export const cta_variant = {
	hidden: {
		opacity: 0,
		filter: 'blur(5px)',
		y: 20,
		scale: 0.95,
	},
	visible: {
		opacity: 1,
		filter: 'blur(0px)',
		y: 0,
		scale: 1,
		transition: { duration: 1.5, delay: 0.8, ease: 'easeInOut' },
	},
}
