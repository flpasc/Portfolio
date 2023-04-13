import React, { useEffect } from 'react'
import './Logo.css'
import { TbMathLower, TbMathGreater } from 'react-icons/tb'
import { Glitch } from 'react-teffex'
import { Link } from 'react-router-dom'
import { ICustomLink } from '../Interfaces/ICustomLink'

export default function Logo({ landingRef }: any) {
	const CustomLogo = ({ scrollRef, ...props }: ICustomLink) => {
		const handleClick = () => {
			console.log(scrollRef)
			if (scrollRef && scrollRef.current) {
				scrollRef.current.scrollIntoView({ behavior: 'smooth' })
			}
		}

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
			<div onClick={handleClick} className='logo'>
				<TbMathLower className='blinking' size={20} />
				{glitchEffect}
				<TbMathGreater className='blinking' size={20} />
			</div>
		)
	}

	return <CustomLogo scrollRef={landingRef} />
}
