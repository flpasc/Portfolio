import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { ProjectProps } from '../Projects/ProjectInterface'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-coverflow'

import project_files from '../Projects/projectsFiles'
import ProjectItem from '../Projects/ProjectItem'

export default function LatestProjects() {
	const SwiperItems = project_files.projects.map((project: ProjectProps) => {
		return (
			<SwiperSlide key={project.name}>
				<ProjectItem
					key={project.name}
					name={project.name}
					stack={project.stack}
					img={project.img}
					github={project.github}
				/>
			</SwiperSlide>
		)
	})

	return (
		<div className='home--latest'>
			<h3>Latest Projects</h3>
			<Swiper
				className='home--swiper'
				effect={'coverflow'}
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={2}
				coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
				modules={[EffectCoverflow, Pagination, Navigation]}
				spaceBetween={30}
				navigation={true}
				scrollbar={{ draggable: true }}
				onSwiper={(swiper) => console.log(swiper)}
				onSlideChange={() => console.log('slide change')}>
				{SwiperItems}
			</Swiper>
		</div>
	)
}
