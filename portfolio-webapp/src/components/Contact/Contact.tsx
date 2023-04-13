import React, { useRef } from 'react'
import './Contact.css'
import Title from '../TitleElement/Title'
import ButtonElement from '../ButtonElement/ButtonElement'

export default function Contact({ contactRef }: any) {
	return (
		<div ref={contactRef} className='contact'>
			<Title title='Contact' />
			<div className='contact--container'>
				<p className='contact--text'>Iam available for hire, dont hesitate to reach out!</p>
				<ButtonElement
					className='contact--linkedin'
					title='Linkedin'
					color='#a16e83'
					link='https://www.linkedin.com/in/florian-schöne-a2b0b0272/'
				/>
				<ButtonElement
					className='contact--github'
					title='Github'
					color='#CEBC81'
					link='https://github.com/flpasch'
				/>
			</div>
		</div>
	)
}
