import { useRef, useState } from 'react'
import './App.css'
import Header from '../Header/Header'
import About from '../About/About'
import Projects from '../Projects/Projects'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import ParticleBackground from '../ParticleBackground/ParticleBackground'
import Advertisement from '../Advertisement/Advertisement'

function App() {
	const projectsRef = useRef<HTMLInputElement>()
	const aboutRef = useRef<HTMLInputElement>()
	const landingRef = useRef<HTMLInputElement>()

	return (
		<>
			{/* <Advertisement /> */}
			<Header aboutRef={aboutRef} projectsRef={projectsRef} landingRef={landingRef} />
			<div className='container'>
				<Routes>
					<Route
						path='/'
						element={<Home landingRef={landingRef} projectsRef={projectsRef} aboutRef={aboutRef} />}
					/>
					<Route
						path='/home'
						element={<Home landingRef={landingRef} projectsRef={projectsRef} aboutRef={aboutRef} />}
					/>
				</Routes>
			</div>
		</>
	)
}
export default App