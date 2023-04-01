class FlorianSchoene {
	//Some info
	//here
	name: string
	dayOfBirthTimestamp: number
	email: string

	constructor(name: string, dayOfBirthTimestamp: number, email: string) {
		this.name = 'Florian Schoene'
		this.dayOfBirthTimestamp = 704899920
		this.email = 'florianpaulschoene@gmail.com'
	}

	projectExpierience() {
		return [
			{ Battleships: 'TTD, Javascript' },
			{ MagicMirror: 'Docker, React, Element, REST Api, MongoDB' },
			{ TenziesGame: 'React, hooks, ' },
			{ 'CV-Application': 'TTD, Javascript' },
			{ MemeGenerator: 'React, Javascript, CSS, HTML' },
		]
	}

	education() {
		return [
			{ '2021 - 2022': 'Student for medical Engineering' },
			{ '2019 - 2021': 'Fachabitur, SBSZ Jena' },
		]
	}

	skills() {
		return [
			'HTML',
			'Javascript',
			'CSS',
			'webpack',
			'vite',
			'npm',
			'Docker',
			'GIT',
			'MongoDB',
			'React',
			'Photoshop',
			'Jest',
			'Redis',
			'Typescript',
			'REST Api',
			'Blender',
		]
	}
}
