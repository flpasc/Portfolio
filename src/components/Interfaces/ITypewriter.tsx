export interface ITypewriter {
	speed?: number
	eraseSpeed?: number
	typingDelay?: number
	eraseDelay?: number
	cursor?: string
	text: string[] | string
	eraseOn: boolean
}
