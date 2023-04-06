import React, { useEffect, useCallback } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { InView, useInView } from 'react-intersection-observer'
import Title from '../TitleElement/'
import './About.css'

export default function About() {
	const aboutControl = useAnimation()
	const textControl = useAnimation()
	const imageControl = useAnimation()
	const [aboutRef, aboutInView] = useInView()
	const [textRef, textInView] = useInView()
	const [imgRef, imgInView] = useInView()

	useEffect(() => {
		if (aboutInView) {
			aboutControl.start('visible')
		} else {
			aboutControl.start('hidden')
		}
	}, [aboutControl, aboutInView])

	useEffect(() => {
		if (textInView) {
			textControl.start('visible')
		} else {
			textControl.start('hidden')
		}
	}, [textControl, textInView])

	useEffect(() => {
		if (textInView) {
			imageControl.start('visible')
		} else {
		}
	}, [textControl, textInView])

	const textVariant = {
		visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
		hidden: { opacity: 0, scale: 0 },
	}

	const boxVariant = {
		visible: { translateX: 0, transition: { duration: 1 } },
		hidden: { translateX: -500 },
	}

	const imgVariant = {
		visible: { translateX: 0, opacity: 1, scale: 1, transition: { duration: 2 } },
		hidden: { translateX: 200, opacity: 0.2, scale: 0.2 },
	}


	return (
		<div className='about'>
			<Title

			<motion.div animate={textControl} initial='hidden' ref={textRef} variants={textVariant}>
				<p className='about--text'>
					I'm dedicated to staying at the forefront of web development trends and always eager to
					learn.
				</p>
			</motion.div>

			<motion.div animate={imageControl} initial='hidden' ref={imgRef} variants={imgVariant}>
				<img className='about--image' src='./screenshotSmall.png' alt='this.dev' />
			</motion.div>
		</div>
	)
}
