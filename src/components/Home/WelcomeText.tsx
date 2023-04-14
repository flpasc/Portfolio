import React, { useEffect, useState } from 'react'
import ButtonElement from '../ButtonElement/ButtonElement'
import Typewriter from '../Typewritter/Typewriter'

export default function WelcomeText({ contactRef }: any) {
	const [displayInfo, setDisplayInfo] = useState<boolean>(false)
	const [displayAltText, setDisplayAltText] = useState<boolean>(false)

	const infoTimer = 6000
	const altTimer = 18000

	const greetingText = 'Welcome to my portfolio website!'
	const infoText =
		'As a self-taught web developer, I am passionate about creating beautifully designed'
	const alteringText = [
		'responsive websites.',
		'scalable & robust web applications.',
		'functional webapps.',
		'UI/UX',
		'user-friendly interfaces.',
		'features and bugs.',
		'React apps.',
		'innovative web projects.',
		'cutting-edge digital solutions.',
	]

	useEffect(() => {
		const timer = setTimeout(() => {
			setDisplayInfo(true)
		}, infoTimer)
		return () => {
			clearTimeout(timer)
		}
	}, [])

	useEffect(() => {
		const timer = setTimeout(() => {
			setDisplayAltText(true)
		}, altTimer)
		return () => {
			clearTimeout(timer)
		}
	}, [])

	return (
		<div className='home--welcome'>
			<div className='home--container'>
				<Typewriter text={greetingText} eraseOn={false} cursor='' typingDelay={100} />
				{displayInfo && (
					<Typewriter typingDelay={10000} text={infoText} eraseOn={false} cursor='' />
				)}
				{displayAltText && (
					<Typewriter
						typingDelay={1000}
						text={alteringText}
						eraseOn={true}
						eraseSpeed={100}
						eraseDelay={1200}
					/>
				)}
			</div>
			<div className='home--nav'>
				<ButtonElement title='Get in touch' color='#479761' scrollRef={contactRef} />
			</div>
		</div>
	)
}

//
//
//
