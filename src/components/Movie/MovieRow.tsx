/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from 'react'

import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/lazy'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import SwiperCore, { FreeMode, Navigation, Pagination, Lazy } from 'swiper'

import { Movie } from '~/lib/types'
import { Heading } from '../ui/Heading'
import { Button } from '../ui/Button'
import { HiArrowRight, HiPlay } from 'react-icons/hi'
import { FaImdb } from 'react-icons/fa'
import ButtonOrLink from '../ui/ButtonOrLink'
import { useRouter } from 'next/router'
import { MovieCardTall } from './MovieCardTall'
// install Swiper modules
SwiperCore.use([Lazy, FreeMode, Pagination, Navigation])

const SwiperProps: SwiperProps = {
	spaceBetween: 30,
	navigation: true,
	freeMode: true,
	className: 'row',
	lazy: true,
	breakpoints: {
		1378: {
			slidesPerView: 5,
			slidesPerGroup: 5,
		},
		998: {
			slidesPerView: 4,
			slidesPerGroup: 4,
		},
		625: {
			slidesPerView: 3,
			slidesPerGroup: 3,
		},
		0: {
			slidesPerView: 2,
			slidesPerGroup: 2,
		},
	},
}

export function MovieRow({
	title,
	movies,
}: {
	title: string
	movies: Movie[]
}) {
	const router = useRouter()

	return (
		<div className="px-4 md:px-10 container max-w-7xl mx-auto">
			<div className="pb-5 border-b border-gray-700 flex items-center justify-between space-x-2">
				<h3 className="text-2xl leading-6 font-bold ">{title}</h3>
				<Button href={`/${title.toUpperCase()}`} variant="ghost">
					<span className="flex items-center space-x-2">
						<p>View more</p>
						<HiArrowRight />
					</span>
				</Button>
			</div>
			<div className="mb-10">
				<Swiper {...SwiperProps}>
					{movies.map((movie, idx) => {
						return (
							<SwiperSlide
								onClick={() =>
									router.push(`/watch/${movie.video_id}/${movie.imdb_id}`)
								}
								key={movie.id}
								className="cursor-pointer"
							>
								<MovieCardTall isSwiper movie={movie} />
							</SwiperSlide>
						)
					})}
				</Swiper>
			</div>
		</div>
	)
}
