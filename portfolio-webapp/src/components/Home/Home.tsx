import React, { useRef } from 'react'
import { Typewriter } from 'react-teffex'
import './Home.css'
import WelcomeText from './WelcomeText'
import LatestProjects from './LatestProjects'
import ParticleBackground from '../ParticleBackground/ParticleBackground'
import Animation from './Animation'
import About from '../About/About'
import Contact from '../Contact/Contact'

export default function Home({ scrollAboutRef }: any) {
	const scrollContactRef = useRef<HTMLInputElement>()
	const scrollAboutRefs = useRef(scrollAboutRef)
	console.log(scrollAboutRefs)

	return (
		<div className='home'>
			<ParticleBackground />
			<div className='home--landing'>
				<WelcomeText scrollContactRef={scrollContactRef} />
				<Animation />
			</div>
			<About scrollAboutRef={scrollAboutRef} />
			<LatestProjects />
			<Contact scrollContactRef={scrollContactRef} />
		</div>
	)
}
