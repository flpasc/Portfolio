import React, { ReactNode } from 'react'
import './Navbar.css'
import { TbShoppingCart } from 'react-icons/tb'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

export default function Navbar() {
	type CustomLinkProps = {
		to: string
		children: ReactNode
	}

	function CustomLink({ to, children, ...props }: CustomLinkProps) {
		const resolvedPath = useResolvedPath(to)
		const isActive = useMatch({ path: resolvedPath.pathname, end: true })

		return (
			<li className={isActive ? 'active' : ''}>
				<Link to={to} {...props}>
					{children}
				</Link>
			</li>
		)
	}

	return (
		<nav className='navbar'>
			<ul>
				<CustomLink to='/about'>this.about</CustomLink>
				<CustomLink to='/projects'>this.projects</CustomLink>
			</ul>
		</nav>
	)
}
