/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import SwiperCore, { FreeMode, Navigation, Pagination } from 'swiper'
import { Movie } from '~/lib/types'
import { Heading } from '../ui/Heading'
import { Button } from '../ui/Button'
import { HiArrowRight } from 'react-icons/hi'

// install Swiper modules
SwiperCore.use([FreeMode, Pagination, Navigation])

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
				<Swiper
					spaceBetween={30}
					navigation={true}
					freeMode={true}
					className="row"
					breakpoints={{
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
					}}
				>
					{movies.map((movie, idx) => {
						return (
							<SwiperSlide
								key={movie.id}
								className=" group hover:scale-125 cursor-pointer"
							>
								<img
									className="w-full relative  group-hover:opacity-80 rounded-lg object-cover min-h-[200px] max-h-[200px]"
									src={movie.poster_url}
								/>
								<div className="group-hover:w-full -bottom-7 bg-gradient-to-t from-gray-800 to-transparent/10 z-10 absolute inset-y-0 hidden transition-all group-hover:transform duration-150  group-hover:block ">
									<div className="flex h-full flex-col items-center justify-center">
										<Heading
											noItalics
											className="text-center mx-auto text-white "
											size="h5"
										>
											{movie.title}
										</Heading>
										<p className="text-xs w-3/4  text-white text-center">
											Thanos has been defeated and the universe is now in ruins.
										</p>
										<Button href="/watch/123" className="mt-2">
											Play Now
										</Button>
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
