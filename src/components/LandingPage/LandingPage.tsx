import React from 'react'
import './LandingPage.css'
import Animation from './Animation'
import WelcomeText from '../Home/WelcomeText'

export default function LandingPage({ contactRef, landingRef }: any) {
	return (
		<div className='home--landing' ref={landingRef}>
			<WelcomeText contactRef={contactRef} />
			<Animation />
		</div>
	)
}
