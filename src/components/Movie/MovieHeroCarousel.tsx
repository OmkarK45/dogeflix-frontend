/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import SwiperCore, {
	Autoplay,
	EffectFade,
	Navigation,
	Pagination,
} from 'swiper'
import { Movie } from '~/lib/types'
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination])
import { Button } from '~/components/ui/Button'
import { CgDolby } from 'react-icons/cg'
import { Icon3D } from '../ui/3DIcon'
import { Badge } from '../ui/Badge'

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
				spaceBetween={30}
				navigation={true}
				pagination={{ clickable: true }}
				className="mx-auto h-full "
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
												className="h-full w-full object-cover"
												src="https://cdn-www.comingsoon.net/assets/uploads/2015/07/narcossocials.jpg"
												alt="People working on laptops"
											/>
											<div className="absolute inset-0 bg-gray-600 opacity-70 mix-blend-multiply" />
										</div>
										<div className="relative lg:w-3/4 px-4 py-14 sm:px-6 sm:py-24 lg:py-28 lg:px-8 bg-gradient-to-r from-pink-900 to-transparent">
											<Badge variant="pink" className="my-6">
												Marvel
											</Badge>
											<h1 className=" text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
												<span className="block text-white">{movie.title}</span>
											</h1>
											<p className="mt-6 text-left text-white text-lg sm:max-w-3xl">
												Thanos has uncovered the secrets of the Infinity Gems
												and the power of the universe. Now, the Avengers must
												assemble to stop him.
											</p>
											<div className="mt-10  mx-auto  sm:flex ">
												<div>
													<Button fullWidth variant="white" href="#" size="xl">
														Watch Now{' '}
													</Button>
												</div>
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
