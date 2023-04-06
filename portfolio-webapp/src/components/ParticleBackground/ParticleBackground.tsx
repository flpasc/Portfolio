import particlesConfig from './particle-config'
import { useCallback, useState } from 'react'
import type { Container, Engine } from 'tsparticles-engine'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

import React from 'react'

export default function ParticleBackground() {
	const particlesInit = async (main) => {
		await loadFull(main)
	}

	return (
		<div className='particles'>
			<Particles id='tsparticles' init={particlesInit} options={particlesConfig} />
		</div>
	)
}
