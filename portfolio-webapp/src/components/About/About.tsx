import React, { useCallback } from 'react'
import ParticleBackground from '../ParticleBackground/ParticleBackground'
import './About.css'

export default function About() {
	const heading = '<About/>'
	return (
		<div className='about'>
			<h4>{heading}</h4>
			<img className='about--image' src='./screenshotSmall.png' alt='About this.dev' />
		</div>
	)
}
