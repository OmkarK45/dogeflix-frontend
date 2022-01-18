import clsx from 'clsx'
import { getYoutubeThumbnail } from '~/lib/thumbnail'
import { Movie } from '~/lib/types'
import { Data } from '../ui/Data'
import { Link } from '../ui/Link'

type WatchMoreCardSize = 'small' | 'medium' | 'large'

interface WatchMoreCardProps {
	movie: Movie
	size: WatchMoreCardSize
	children?: React.ReactNode
}

export function WatchMoreCard({ size, ...props }: WatchMoreCardProps) {
	console.log(props.movie)
	return (
		<div className="no-underline text-left  flex cursor-pointer group hover:bg-gray-200 dark:hover:bg-gray-800 px-4 py-3 rounded-lg">
			<div
				className={clsx('self-center flex-shrink-0 mr-4', {
					'w-1/2': size === 'large',
					'w-1/3': size === 'medium',
					'w-1/4': size === 'small',
				})}
			>
				<img
					alt="Movie Card"
					className="rounded-md w-full"
					src={`https://img.youtube.com/vi/${props.movie.video_id}/mqdefault.jpg`}
				/>
			</div>
			<div>
				<h4 className="md:text-md">{props.movie.title}</h4>
				<p className="mt-1 text-sm text-gray-500 md:text-base">
					{props.movie.year}
				</p>
				<div>{props.children}</div>
			</div>
		</div>
	)
}
