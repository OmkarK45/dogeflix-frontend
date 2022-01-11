import { Movie } from '~/lib/types'
import { Link } from '../ui/Link'

export function MovieCard({ movie }: { movie: Movie }) {
	return (
		<div className="relative flex items-end justify-center overflow-hidden bg-gray-300 md:rounded-lg group h-56">
			<img
				src={movie.poster_url}
				className="absolute object-cover object-center w-full h-full transition duration-300 ease-out transform scale-100 group-hover:scale-105"
			/>

			<div className="absolute z-10 w-full h-full bg-gradient-to-b from-transparent to-black opacity-90"></div>
			<div className="relative w-full px-4 z-20 py-3 text-left">
				<h2 className=" font-sans text-xl font-semibold text-white">
					Thor The dark World
				</h2>
				<span className="inline-block font-sans text-xs text-white">
					Marvel
				</span>
			</div>
		</div>
	)
}
