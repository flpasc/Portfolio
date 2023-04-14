import React, { useEffect } from 'react'
import './Logo.css'
import { TbMathLower, TbMathGreater } from 'react-icons/tb'
import { ICustomLink } from '../Interfaces/ICustomLink'
import GlitchEffect from '../GlitchEffect/GlitchEffect'

export default function Logo({ landingRef }: any) {
	const CustomLogo = ({ scrollRef, ...props }: ICustomLink) => {
		const handleClick = () => {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			})
		}

		let glitchEffect = (
			<div className='glitch'>
				<GlitchEffect text='flpasc' changeBackDelay={300} speed={410} chaos={6} />
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
