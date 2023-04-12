import React, { useRef, ReactNode } from 'react'
import './Navbar.css'
import { ICustomLink } from '../Interfaces/ICustomLink'

export default function Navbar({ scrollAboutRef }: any) {
	function CustomLink({ scrollRef, children, ...props }: ICustomLink) {
		const handleClick = () => {
			console.log(scrollAboutRef)
			if (scrollRef && scrollRef.current) {
				scrollRef.current.scrollIntoView({ behavior: 'smooth' })
			}
		}
		return <li onClick={handleClick}>{children}</li>
	}

	return (
		<nav className='navbar'>
			<ul>
				<CustomLink scrollRef={scrollAboutRef}>this.about</CustomLink>
				<CustomLink scrollRef={scrollAboutRef}>this.projects</CustomLink>
			</ul>
		</nav>
	)
}
