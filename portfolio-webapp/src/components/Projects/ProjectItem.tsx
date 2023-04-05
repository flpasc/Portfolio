import React from 'react'
import { SwiperSlide } from 'swiper/react'
import './Projects.css'
import { ProjectProps } from './ProjectInterface'
import { VscGithub } from 'react-icons/vsc'

export default function ProjectItem({ name, stack, github, img }: ProjectProps) {
	console.log(img)
	// return cv-app.png

	return (
		<div className='swiper--project'>
			<SwiperSlide>
				<div className='project--container'>
					<div className='project--title'>{name}</div>
					<div style={{ backgroundImage: `url(${img})` }} className='slider--container'>
						<div className='project--stack'>{stack}</div>
					</div>
					<a href={github} className='project--github'>
						<VscGithub size={23} />
						Github
					</a>

					<div />
				</div>
			</SwiperSlide>
		</div>
	)
}
