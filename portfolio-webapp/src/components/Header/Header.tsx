import React, { useEffect } from 'react'
import './Header.css'
import Logo from './Logo'
import User from './User'
import Navbar from './Navbar'

export default function Header() {
	return (
		<div className='header'>
			<Logo />
			{/* <User /> */}
			<Navbar />
		</div>
	)
}
