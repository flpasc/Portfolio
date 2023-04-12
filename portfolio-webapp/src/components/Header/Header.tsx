import React, { useEffect } from 'react'
import './Header.css'
import Logo from './Logo'
import User from './User'
import Navbar from './Navbar'

export default function Header({ scrollAboutRef }: any) {
	return (
		<div className='header'>
			<Logo />
			{/* <User /> */}
			<Navbar scrollRef={scrollAboutRef} />
		</div>
	)
}
