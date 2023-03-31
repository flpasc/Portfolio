import particlesConfig from './particle-config'
import { useCallback, useState } from 'react'
import type { Container, Engine } from 'tsparticles-engine'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

import React from 'react'

export default function ParticleBackground() {
	const particlesInit = useCallback(async (engine: Engine) => {
		console.log(engine)
	}, [])

	const particlesLoaded = useCallback(async (container: Container | undefined) => {
		await console.log(container)
	}, [])

	return (
		<Particles
			id='tsparticles'
			options={particlesConfig}
			init={particlesInit}
			loaded={particlesLoaded}
		/>
	)
}
