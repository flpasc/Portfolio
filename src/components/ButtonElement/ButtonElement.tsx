import React, { useRef } from 'react'
import { IButton } from '../Interfaces/IButton'

import './ButtonElement.css'

export default function ButtonElement({
	title,
	color = 'white',
	className = 'customButton',
	link,
	scrollRef,
}: IButton) {
	const handleClick = () => {
		if (link) window.open(link)
		if (scrollRef && scrollRef.current) {
			scrollRef.current.scrollIntoView({ behavior: 'smooth' })
		}
	}

	return (
		<div
			className={`customButton ${className}`}
			style={{ backgroundColor: color }}
			onClick={handleClick}>
			{title}
		</div>
	)
}
