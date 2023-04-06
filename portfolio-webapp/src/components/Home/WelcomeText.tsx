import React from 'react'
import { Typewriter } from 'react-teffex'
import ButtonElement from '../ButtonElement/ButtonElement'

export default function WelcomeText() {
	return (
		<div className='home--welcome'>
			<div className='home--container'>
				<Typewriter
					typeSettings={{ stutterChance: 0, typeDelay: 60 }}
					text='Welcome to my portfolio website!'
				/>
				<Typewriter
					typeSettings={{ typeDelay: 50, stutterChance: 2, initialDelay: 6000 }}
					text='As a self-taught web developer, I am passionate about creating beautifully designed'
				/>
				<Typewriter
					text={''}
					cycle={[
						'responsive websites.',
						'scalable & robust web applications.',
						'functional webapps.',
						'UI/UX',
						'user-friendly interfaces.',
						'features and bugs.',
						'React apps.',
						'innovative web projects.',
						'cutting-edge digital solutions.',
					]}
					loop
					cursorSettings={{ color: '#b19f9e' }}
					typeSettings={{ initialDelay: 11000, stutterChance: 7, stutterTime: 60, typeDelay: 40 }}
				/>
			</div>
			<div className='home--nav'>
				<ButtonElement title='Get in touch' color='#479761' />
			</div>
		</div>
	)
}
