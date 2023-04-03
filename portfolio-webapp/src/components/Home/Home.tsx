import React from 'react'
import { Typewriter } from 'react-teffex'
import './Home.css'
import WelcomeText from './WelcomeText'
import LatestProjects from './LatestProjects'

export default function Home() {
	return (
		<div className='home'>
			<WelcomeText />
			<LatestProjects />
		</div>
	)
}
