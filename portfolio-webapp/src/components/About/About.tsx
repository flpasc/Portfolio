import React, { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { InView, useInView } from 'react-intersection-observer'
import Title from '../TitleElement/Title.jsx'
import './About.css'

export default function About({ aboutRef }: any) {
	const textControl = useAnimation()
	const imageControl = useAnimation()

	const [textRef, textInView] = useInView()
	const [imgRef, imgInView] = useInView()

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
		visible: { translateX: 0, opacity: 1, scale: 1, transition: { duration: 0.6 } },
		hidden: { translateX: 200, opacity: 0.2, scale: 1 },
	}

	const imgVariant = {
		visible: { translateX: 0, opacity: 1, scale: 1, transition: { duration: 1.5 } },
		hidden: { translateX: 200, opacity: 0.2, scale: 0.9 },
	}

	return (
		<div ref={aboutRef} className='about'>
			<Title title='About' />

			<p className='about--text'>
				I'm dedicated to staying at the forefront of web development trends and always eager to
				learn.
			</p>
			<img className='about--image' src='./screenshotSmall.png' alt='this.dev' />
		</div>
	)
}
