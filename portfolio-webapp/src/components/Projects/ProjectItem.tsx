import React from 'react'
import { SwiperSlide } from 'swiper/react'
import './Projects.css'

export default function ProjectItem({ name, stack, github, img }): JSX.Element {
	console.log(img)
	// return cv-app.png

	return (
		<div className='swiper--project'>
			<SwiperSlide>
				<div className='project--title'>{name}</div>
				<div className='project--stack'>{stack}</div>
				<a href={github}>G</a>

				<div style={{ backgroundImage: `url(${img})` }} className='slider--image'></div>

				<div />
			</SwiperSlide>
		</div>
	)
}
