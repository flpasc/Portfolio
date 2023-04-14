import React, { useEffect, useState } from 'react'
import './GlitchEffect.css'
import { IGlitchEffect } from '../Interfaces/IGlitchEffect'
import specialChars from './specialChars'

export default function GlitchEffect({ text, changeBackDelay, speed, chaos }: IGlitchEffect) {
	const [currentText, setCurrentText] = useState(text)
	const [glitchOn, setGlitchOn] = useState(true)
	const [glitchSpeed, setGlitchSpeed] = useState(speed)
	const [changeDelay, setChangeDelay] = useState(changeBackDelay)

	const randomizeSpeed = (speedToChange: number) => {
		const min = speedToChange * 0.5
		const max = speedToChange * 1.5
		return Math.floor(Math.random() * (max - min + 1) + min)
	}

	const getRandomChar = () => {
		const rndChar = specialChars[Math.floor(Math.random() * specialChars.length)]
		return rndChar
	}

	const replaceRndChar = () => {
		const chaosFactor = Math.random() * chaos // generate a random chaos factor between 0 and 10
		const replaceIndex = Math.floor(Math.random() * currentText.length)
		let newText = currentText

		for (let i = 0; i < chaosFactor; i++) {
			const newChar = getRandomChar()
			newText = newText.substring(0, replaceIndex) + newChar + newText.substring(replaceIndex + 1)
			setTimeout(() => {
				setCurrentText(newText)
			}, i * 100)
		}

		setTimeout(() => {
			setCurrentText(text)
		}, (chaosFactor + 1) * 100)
	}

	useEffect(() => {
		const interval = setInterval(() => {
			setGlitchOn((prevGlitchOn) => !prevGlitchOn)
		}, glitchSpeed)
		return () => clearInterval(interval)
	}, [glitchOn])

	useEffect(() => {
		if (glitchOn) {
			replaceRndChar()
			setGlitchSpeed(randomizeSpeed(speed))
			setChangeDelay(randomizeSpeed(chaos))
		}
	}, [glitchOn])

	return <div className='glitch'>{currentText}</div>
}
