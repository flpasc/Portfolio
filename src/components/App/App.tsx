import { useRef, useState } from 'react'
import './App.css'
import Header from '../Header/Header'

import Home from '../Home/Home'

function App() {
	const projectsRef = useRef<HTMLInputElement>()
	const aboutRef = useRef<HTMLInputElement>()
	const landingRef = useRef<HTMLInputElement>()

	return (
		<>
			<Header aboutRef={aboutRef} projectsRef={projectsRef} landingRef={landingRef} />
			<div className='container'>
				<Home landingRef={landingRef} projectsRef={projectsRef} aboutRef={aboutRef} />
			</div>
		</>
	)
}
export default App
