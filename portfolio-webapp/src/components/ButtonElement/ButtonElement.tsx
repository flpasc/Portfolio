import React from 'react'
import { IButton } from '../Interfaces/IButton'

import './ButtonElement.css'

export default function ButtonElement({
	title,
	color = 'white',
	className = 'customButton',
	link,
}: IButton) {
	const handleClick = () => {
		window.open(link)
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
