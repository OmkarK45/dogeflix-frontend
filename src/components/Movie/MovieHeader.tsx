import { FaImdb } from 'react-icons/fa'
import { HiExternalLink } from 'react-icons/hi'
import { Movie } from '~/lib/types'
import { Link } from '../ui/Link'

export function MovieHeader({ movie }: { movie: Movie | undefined }) {
	return (
		<div className="flex items-start space-x-3">
			<img
				className="w-16 rounded-md shadow-lg h-auto"
				src={movie?.poster_url}
			/>
			<div className="space-y-2">
				<h3 className="text-2xl leading-6 font-medium ">{movie?.title}</h3>
				<div className="flex items-center space-x-2">
					<p className=" leading-5 text-gray-500">{movie?.year}</p>
					<Link
						target="_blank"
						rel="noopener noreferrer"
						href={`https://www.imdb.com/title/${movie?.imdb_id}/`}
						className="flex items-center text-gray-500 font-normal "
					>
						<HiExternalLink className="w-5 h-5" />
						<p>IMdB Page</p>
					</Link>
				</div>
				<span className="flex items-center rounded-r-full rounded-l-full ">
					<FaImdb className="w-7 h-7 mr-1 text-yellow-500" />
					<p className="text-gray-500">{movie?.rating}</p>
				</span>
			</div>
		</div>
	)
}
