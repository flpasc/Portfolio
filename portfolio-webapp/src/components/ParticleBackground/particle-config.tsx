const particlesConfig = {
	particles: {
		number: {
			value: 43,
			density: {
				enable: true,
				value_area: 800,
			},
		},
		color: {
			value: '#cf3c93',
		},
		shape: {
			type: 'circle',
			stroke: {
				width: 6,
				color: '#000000',
			},
			polygon: {
				nb_sides: 6,
			},
			image: {
				src: 'img/github.svg',
				width: 100,
				height: 100,
			},
		},
		opacity: {
			value: 0.5,
			random: false,
			anim: {
				enable: false,
				speed: 1,
				opacity_min: 0.1,
				sync: false,
			},
		},
		size: {
			value: 3,
			random: true,
			anim: {
				enable: false,
				speed: 40,
				size_min: 0.1,
				sync: false,
			},
		},
		line_linked: {
			enable: true,
			distance: 94.54078044926914,
			color: '#3f4a59',
			opacity: 0.4,
			width: 4.41190308763256,
		},
		move: {
			enable: true,
			speed: 1.5756796741544856,
			direction: 'none',
			random: false,
			straight: false,
			out_mode: 'out',
			bounce: false,
			attract: {
				enable: false,
				rotateX: 600,
				rotateY: 1200,
			},
		},
	},
	interactivity: {
		detect_on: 'canvas',
		events: {
			onhover: {
				enable: true,
				mode: 'repulse',
			},
			onclick: {
				enable: true,
				mode: 'push',
			},
			resize: true,
		},
		modes: {
			grab: {
				distance: 400,
				line_linked: {
					opacity: 1,
				},
			},
			bubble: {
				distance: 400,
				size: 40,
				duration: 2,
				opacity: 8,
				speed: 3,
			},
			repulse: {
				distance: 200,
				duration: 0.4,
			},
			push: {
				particles_nb: 4,
			},
			remove: {
				particles_nb: 2,
			},
		},
	},
	retina_detect: true,
}
export default particlesConfig
