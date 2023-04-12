import { ReactNode } from 'react'

export interface ICustomLink {
	scrollRef: React.RefObject<HTMLElement>
	scrollAboutRef?: React.RefObject<HTMLElement>
	scrollProjectsRef?: React.RefObject<HTMLElement>
	children: ReactNode
}
