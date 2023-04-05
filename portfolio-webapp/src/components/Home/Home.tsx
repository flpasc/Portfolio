import React from 'react'
import { Typewriter } from 'react-teffex'
import './Home.css'
import WelcomeText from './WelcomeText'
import LatestProjects from './LatestProjects'
import ParticleBackground from '../ParticleBackground/ParticleBackground'
import Animation from './Animation'

export default function Home() {
	return (
		<div className='home'>
			<ParticleBackground />
			<div className='home--landing'>
				<WelcomeText />
				<Animation />
			</div>
			<LatestProjects />
		</div>
	)
}
