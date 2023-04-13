import React, { useRef, ReactNode } from 'react'
import './Navbar.css'
import { ICustomLink } from '../Interfaces/ICustomLink'

export default function Navbar({ aboutRef, projectsRef }: any) {
	function CustomLink({ scrollRef, children, ...props }: ICustomLink) {
		const handleClick = () => {
			//
			if (scrollRef && scrollRef.current) {
				scrollRef.current.scrollIntoView({ behavior: 'smooth' })
			}
		}
		return <li onClick={handleClick}>{children}</li>
	}

	return (
		<nav className='navbar'>
			<ul>
				<CustomLink scrollRef={aboutRef}>this.about</CustomLink>
				<CustomLink scrollRef={projectsRef}>this.projects</CustomLink>
			</ul>
		</nav>
	)
}
