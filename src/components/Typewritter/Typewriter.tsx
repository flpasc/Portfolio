import React, { useEffect, useState } from 'react'
import { ITypewriter } from '../Interfaces/ITypewriter'
import './Typewriter.css'

import PropTypes from 'prop-types'
import './Typewriter.css'

export default function Typewriter({
	text,
	speed = 100,
	eraseSpeed = 400,
	cursor = '|',
	typingDelay = 500,
	eraseDelay = 500,
	eraseOn,
	...otherProps
}: ITypewriter) {
	const [currentText, setCurrentText] = useState('')
	const [__timeout, set__Timeout] = useState(null)
	const [isTyping, setIsTyping] = useState(true)
	const [currentIndex, setCurrentIndex] = useState(0)

	useEffect(() => {
		startTyping()

		return () => {
			__timeout && clearTimeout(__timeout)
		}
	}, [])

	useEffect(() => {
		let rawText = getRawText()[currentIndex]
		if (isTyping) {
			if (currentText.length < rawText.length) {
				set__Timeout(setTimeout(type, speed))
			} else {
				setIsTyping(false)
				set__Timeout(setTimeout(erase, eraseDelay))
			}
		} else {
			if (currentText.length === 0) {
				const textArray = getRawText()
				let index = currentIndex + 1 === textArray.length ? 0 : currentIndex + 1
				if (index === currentIndex) {
					setIsTyping(true)
					setTimeout(startTyping, typingDelay)
				} else {
					setTimeout(() => setCurrentIndex(index), typingDelay)
				}
			} else {
				set__Timeout(setTimeout(erase, eraseSpeed))
			}
		}
		return () => {
			__timeout && clearTimeout(__timeout)
		}
	}, [currentText])

	useEffect(() => {
		if (!isTyping) {
			setIsTyping(true)
			startTyping()
		}
		return () => {
			__timeout && clearTimeout(__timeout)
		}
	}, [currentIndex])

	function getRawText() {
		return typeof text === 'string' ? [text] : [...text]
	}

	function startTyping() {
		set__Timeout(
			setTimeout(() => {
				type()
			}, speed)
		)
	}

	function type() {
		let rawText = getRawText()[currentIndex]

		if (currentText.length < rawText.length) {
			let displayText = rawText.substr(0, currentText.length + 1)
			setCurrentText(displayText)
		}
	}

	function erase() {
		if (!eraseOn) return
		let index = currentIndex
		if (currentText.length !== 0) {
			let displayText = currentText.substr(-currentText.length, currentText.length - 1)
			setCurrentText(displayText)
		} else {
			const textArray = getRawText()
			index = index + 1 === textArray.length ? 0 : index + 1
			setCurrentIndex(index)
		}
	}

	return (
		<div className='typewriter' {...otherProps}>
			<span className='typewriter--text'>{currentText}</span>
			<span className='typewriter--cursor'>{cursor}</span>
		</div>
	)
}
