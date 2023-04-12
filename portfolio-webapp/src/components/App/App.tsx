import { useCallback, useState } from 'react'
import './App.css'
import Header from '../Header/Header'
import About from '../About/About'
import Projects from '../Projects/Projects'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import ParticleBackground from '../ParticleBackground/ParticleBackground'
import Advertisement from '../Advertisement/Advertisement'

function App() {
	return (
		<>
			{/* <Advertisement /> */}
			<Header />
			<div className='container'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/home' element={<Home />} />
				</Routes>
			</div>
		</>
	)
}
export default App
