import React, { useEffect } from 'react'
import './Header.css'
import Logo from './Logo'
import User from './User'
import Navbar from './Navbar'

export default function Header({ aboutRef, projectsRef, landingRef }: any) {
	return (
		<div className='header'>
			<Logo landingRef={landingRef} />
			{/* <User /> */}
			<Navbar aboutRef={aboutRef} projectsRef={projectsRef} />
		</div>
	)
}
