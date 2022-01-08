import { HiLightningBolt, HiPlay } from 'react-icons/hi'
import { Button } from '../ui/Button'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-cards'

import SwiperCore, { EffectCards } from 'swiper'

// install Swiper modules
SwiperCore.use([EffectCards])

export function HeroSection() {
	return (
		<div className="overflow-hidden">
			<div className="flex flex-col lg:flex-row space-y-16 lg:space-y-0 text-center lg:text-left container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
				<div className="lg:w-1/2 lg:flex lg:items-center">
					<div>
						<div className="font-semibold inline-flex px-2 py-1 leading-4 mb-2 text-sm rounded-full text-gray-700 bg-gray-200">
							<HiLightningBolt className="mr-2" /> New Dr. Strange Trailer
						</div>
						<h1 className="relative mb-4 text-3xl font-bold text-white leading-tight lg:pr-16 sm:text-6xl lg:mb-8">
							Hundreds of movie trailers.
						</h1>

						<h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-400">
							Sit back, relax and enjoy our latest collection of handcurated
							movie trailers.
						</h3>
						<div className="flex flex-col sm:flex-row sm:items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-2 pt-10 pb-16">
							<Button
								href="/home"
								size="xl"
								className="shadow-xl animate-scale"
								rounded="full"
							>
								<HiPlay className="w-5 h-5 mr-2" />
								<span>Watch Now</span>
							</Button>
						</div>
					</div>
				</div>
				<div className="lg:w-1/2 lg:ml-16 lg:flex lg:justify-center lg:items-center">
					<div className="lg:w-96 mx-5 relative">
						<div className="absolute pattern-dots-xl text-indigo-800 top-0 left-0 w-32 h-48 md:h-96 transform -translate-y-12 -translate-x-16 -rotate-3"></div>
						<div className="absolute pattern-dots-xl text-indigo-800 bottom-0 right-0 w-32 h-48 md:h-96 transform translate-y-12 translate-x-16 rotate-3"></div>
						<div className="absolute inset-0 rounded-xl bg-gray-600 bg-opacity-20 -m-4 transform rotate-2"></div>
						<div className="absolute inset-0 rounded-xl bg-gray-600 bg-opacity-25 -m-4 transform -rotate-2"></div>

						<Swiper
							effect={'cards'}
							grabCursor={true}
							className="mySwiper relative  mx-auto shadow-lg"
						>
							<SwiperSlide>
								<img
									src="https://pbs.twimg.com/media/FEALo09X0AAiaeQ?format=jpg&name=large"
									alt="Hero Image"
									className="rounded-lg"
								/>
							</SwiperSlide>
							<SwiperSlide>
								<img
									src="https://pbs.twimg.com/media/FEALo09X0AAiaeQ?format=jpg&name=large"
									alt="Hero Image"
									className="rounded-lg"
								/>
							</SwiperSlide>
							<SwiperSlide>
								<img
									src="https://pbs.twimg.com/media/FEALo09X0AAiaeQ?format=jpg&name=large"
									alt="Hero Image"
									className="rounded-lg"
								/>
							</SwiperSlide>
							<SwiperSlide>
								<img
									src="https://pbs.twimg.com/media/FEALo09X0AAiaeQ?format=jpg&name=large"
									alt="Hero Image"
									className="rounded-lg"
								/>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</div>
		</div>
	)
}
