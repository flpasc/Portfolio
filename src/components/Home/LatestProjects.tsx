import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { IProject } from '../Interfaces/IProject'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-coverflow'

import project_files from '../Projects/projectsFiles'
import ProjectItem from '../Projects/ProjectItem'
import { motion, useAnimation } from 'framer-motion'
import { InView, useInView } from 'react-intersection-observer'
import Title from '../TitleElement/Title'

export default function LatestProjects({ projectsRef }: any) {
	const headerControl = useAnimation()
	const sliderControl = useAnimation()
	const [headerRef, headerInView] = useInView()
	const [sliderRef, sliderInView] = useInView()

	useEffect(() => {
		if (headerInView) {
			headerControl.start('visible')
			sliderControl.start('visible')
		} else {
			headerControl.start('hidden')
			sliderControl.start('hidden')
		}
	}, [headerControl, headerInView])

	const headerText = '<Experience/>'
	const headerVariant = {
		visible: { translateX: 0, opacity: 1, transition: { duration: 0.5 } },
		hidden: { translateX: -400, opacity: 0.2 },
	}

	const sliderVariant = {
		visible: { opacity: 1, transition: { duration: 0.5 } },
		hidden: { opacity: 0.2 },
	}

	const SwiperItems = project_files.projects.map((project: IProject) => {
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
		<div ref={projectsRef} className='home--latest'>
			<Title title='Expierience' />

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
				onSwiper={(swiper) => console.log()}
				onSlideChange={() => console.log()}>
				{SwiperItems}
			</Swiper>
		</div>
	)
}
