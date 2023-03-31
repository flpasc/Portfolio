import React, { useEffect } from 'react'
import './Logo.css'
import { TbMathLower, TbMathGreater } from 'react-icons/tb'
import { Glitch } from 'react-teffex'
import { Link } from 'react-router-dom'

export default function Logo() {
	let glitchEffect = (
		<div className='glitch'>
			<Glitch
				alphabet
				buffer={10}
				speed={100}
				glitchSpeed={2000}
				extendedAlphabet={true}
				text={'flpasc'}
			/>
		</div>
	)

	return (
		<div className='logo'>
			<Link to='/home'>
				<TbMathLower className='blinking' size={10} />
				{glitchEffect}
				<TbMathGreater className='blinking' size={10} />
			</Link>
		</div>
	)
}
