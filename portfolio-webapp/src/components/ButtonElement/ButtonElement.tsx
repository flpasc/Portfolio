import React from 'react'
import { IButton } from '../Interfaces/IButton'

import './ButtonElement.css'

export default function ButtonElement({ title, color = 'white' }: IButton) {
	const className = 'customButton'

	return (
		<div className={className} style={{ backgroundColor: color }}>
			{title}
		</div>
	)
}
