import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { InView, useInView } from 'react-intersection-observer'
import { ITitle } from '../Interfaces/ITitle'

import './Title.css'

export default function Title({ title }: ITitle) {
	const titleControl = useAnimation()
	const [aboutRef, aboutInView] = useInView()
	const heading = `<${title}/>`

	useEffect(() => {
		if (aboutInView) {
			titleControl.start('visible')
		} else {
			titleControl.start('hidden')
		}
	}, [titleControl, aboutInView])

	const variant = {
		visible: { translateX: 0, transition: { duration: 1 } },
		hidden: { translateX: -500 },
	}

	return (
		<motion.div
			className={`title ${title}`}
			animate={titleControl}
			initial='hidden'
			ref={aboutRef}
			variants={variant}>
			<h4>{heading}</h4>
		</motion.div>
	)
}
