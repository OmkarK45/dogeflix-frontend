import { FaImdb } from 'react-icons/fa'
import { HiPlay } from 'react-icons/hi'
import { Movie } from '~/lib/types'
import ButtonOrLink from '../ui/ButtonOrLink'

export function MovieCardTall({
	movie,
	isSwiper,
}: {
	movie: Movie
	isSwiper: boolean
}) {
	return (
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
	)
}
