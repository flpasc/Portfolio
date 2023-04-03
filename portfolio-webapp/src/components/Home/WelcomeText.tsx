import React from 'react'
import { Typewriter } from 'react-teffex'

export default function WelcomeText() {
	return (
		<div className='home--welcome'>
			<Typewriter
				typeSettings={{ stutterChance: 0, typeDelay: 60 }}
				text='Welcome to my portfolio website!'
			/>
			<Typewriter
				typeSettings={{ typeDelay: 50, stutterChance: 2, initialDelay: 4000 }}
				text='As a self-taught web developer, I am passionate about creating beautifully designed'
			/>
			<Typewriter
				text={''}
				cycle={[
					'responsive websites.',
					'functional webapps',
					'UI/UX',
					'bugs',
					'react apps',
					'node server',
				]}
				loop
				cursorSettings={{ color: '#b19f9e' }}
				typeSettings={{ initialDelay: 10000, stutterChance: 3, stutterTime: 60, typeDelay: 40 }}
			/>
			<div className='home--nav'>
				<button className='btn-green'>About</button>
				<button className='btn-pink'>Projects</button>
			</div>
		</div>
	)
}
