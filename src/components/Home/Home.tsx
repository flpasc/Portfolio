import React, { useRef } from 'react'
import { Typewriter } from 'react-teffex'
import './Home.css'
import WelcomeText from './WelcomeText'
import LatestProjects from './LatestProjects'
import ParticleBackground from '../ParticleBackground/ParticleBackground'
import About from '../About/About'
import Contact from '../Contact/Contact'
import LandingPage from '../LandingPage/LandingPage'

export default function Home({ aboutRef, projectsRef, landingRef }: any) {
	const contactRef = useRef<HTMLInputElement>()

	console.log(aboutRef)

	return (
		<div className='home'>
			<ParticleBackground />
			<LandingPage contactRef={contactRef} landingRef={landingRef} />
			<About aboutRef={aboutRef} />
			<LatestProjects projectsRef={projectsRef} />
			<Contact contactRef={contactRef} />
		</div>
	)
}
