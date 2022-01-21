/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from 'swiper/react'

import { HiPlay } from 'react-icons/hi'
import { FaImdb } from 'react-icons/fa'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/lazy'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import SwiperCore, {
	Autoplay,
	Lazy,
	EffectFade,
	Navigation,
	Pagination,
} from 'swiper'
import { Movie } from '~/lib/types'
SwiperCore.use([Lazy, Autoplay, EffectFade, Navigation, Pagination])

import { Button } from '~/components/ui/Button'

interface MovieHeroCarouselProps {
	movies: Movie[]
}

export function MovieHeroCarousel({ movies }: MovieHeroCarouselProps) {
	return (
		<div className=" overflow-hidden  ">
			<Swiper
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				lazy={true}
				spaceBetween={30}
				navigation={true}
				pagination={{ clickable: true }}
				className="mx-auto h-full movie-carousel"
			>
				{movies.map((movie, idx) => {
					return (
						<SwiperSlide key={movie.id}>
							<div className="relative h-full">
								<div className="absolute inset-x-0 bottom-0 h-1/2 " />
								<div className="max-w-7xl mx-auto sm:px-6 lg:px-0 h-full flex-grow  w-full ">
									<div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden ">
										<div className="absolute inset-0">
											<img
												className="swiper-lazy h-full w-full object-cover"
												data-src={movie.poster_url}
												alt="Movie Poster"
											/>
											<div className="absolute inset-0 bg-gray-600 opacity-70 mix-blend-multiply" />
										</div>
										<div className="relative lg:w-3/4 px-4 py-14 sm:px-6 sm:py-24 lg:py-28 lg:px-8 bg-gradient-to-r from-gray-800 ">
											<h1 className=" text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
												<span className="block text-white">{movie.title}</span>
											</h1>
											<p className="mt-6 line-clamp-3 text-left text-gray-200 text-lg sm:max-w-3xl">
												{movie.description}
											</p>
											<div className="mt-10 flex items-center space-x-2 mx-auto  sm:flex ">
												<div>
													<Button
														href={`/watch/${movie.video_id}/${movie.imdb_id}`}
														fullWidth
														variant="white"
														size="xl"
													>
														<span className="flex items-center">
															<HiPlay className="w-7 h-7 mr-2" />
															<p>Watch Now </p>
														</span>
													</Button>
												</div>
												<span className="flex items-center border border-gray-500 rounded-r-full rounded-l-full px-3 py-2">
													<FaImdb className="w-7 h-7 mr-1 text-yellow-500" />
													<p className="text-lg font-semibold leading-4 text-white">
														{movie.rating}
													</p>
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</div>
	)
}
