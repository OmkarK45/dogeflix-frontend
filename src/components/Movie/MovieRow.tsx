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
	return (
		<div className="px-4 md:px-10 container max-w-7xl mx-auto">
			<div className="pb-5 border-b border-gray-700 flex items-center justify-between space-x-2">
				<h3 className="text-2xl leading-6 font-bold ">{title}</h3>
				<Button href={`/${title}`} variant="ghost">
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
							<SwiperSlide key={movie.id} className="cursor-pointer">
								<div className="group h-full bg-gray-900 overflow-hidden relative rounded-lg object-cover md:hover:scale-125 swiper-slide">
									<img
										className="swiper-lazy group-hover:opacity-60 opacity:30"
										data-src={movie.poster_url}
									/>
									<div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>

									<div className="absolute h-full flex flex-col justify-end bg-gradient-to-t from-gray-900  bottom-0 left-0 right-0 pt-4 px-3 pb-4">
										<div className="h-full w-full items-center justify-center hidden md:group-hover:flex">
											<ButtonOrLink
												href={`/watch/${movie.video_id}/${movie.imdb_id}`}
												type="button"
												className="text-white bg-brand-700 hover:bg-brand-800 font-medium rounded-full text-sm p-3 text-center inline-flex items-center  "
											>
												<HiPlay className="w-12 h-12" />
											</ButtonOrLink>
										</div>
										<p className="text-md font-medium leading-6 text-white sm:w-11/12">
											{movie.title} ({movie.year})
										</p>
										<div className="mt-5 flex items-center">
											<div className="flex items-center text-white sm:justify-end">
												<span className="flex items-center">
													<FaImdb className="w-5 h-5 mr-1 text-yellow-500" />
													<p className="text-sm font-semibold leading-4 text-white">
														{movie.rating}
													</p>
												</span>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
						)
					})}
				</Swiper>
			</div>
		</div>
	)
}
