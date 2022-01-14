import ReactPlayer from 'react-player/lazy'
import useSWR from 'swr'
import { fetcher } from '~/lib/fetchJson'
import { ApiResponse, Movie } from '~/lib/types'
import { MovieActions } from '../Movie/AddToFavorites'
import { MovieComments } from '../Movie/MovieComments'
import { MovieHeader } from '../Movie/MovieHeader'
import { MovieMetadata } from '../Movie/MovieMetadata'
import { MovieReactions } from '../Movie/MovieReactions'
import { WatchMore } from '../Movie/WatchMore'

export function VideoPageLayout({ movie }: { movie: ApiResponse<Movie> }) {
	const { data } = useSWR<ApiResponse<Movie>>(
		`/videos/${movie.data.video_id}`,
		fetcher,
		{ fallbackData: movie }
	)

	return (
		<div className="container mx-auto">
			<div className="flex flex-wrap ">
				<div className="md:w-2/3 w-full md:mt-12 pb-6 md:pb-0 md:pr-6">
					<div className="aspect-w-16 aspect-h-9 shadow-xl md:rounded-lg overflow-hidden">
						<ReactPlayer
							url={`https://www.youtube-nocookie.com/embed/${data?.data.video_id}`}
							width="100%"
							height="100%"
							playing={false}
							controls={true}
						/>
					</div>
					<div className="mt-8 px-3">
						<div className="flex flex-col md:flex-row md:items-center md:space-y-0 space-y-3 justify-between pb-5 border-b border-gray-300 dark:border-gray-800">
							<MovieHeader movie={data?.data} />
							<div className="flex space-x-3 flex-shrink-0 justify-between px-8 py-3 md:px-0 md:my-0">
								<MovieReactions data={data!.data} />
							</div>
						</div>

						<div className="mt-2">
							<div className="flex space-x-2 justify-center md:justify-end">
								<MovieActions data={data!.data} />
							</div>
						</div>

						<MovieMetadata data={data!.data} />

						<div className="md:hidden py-5">
							<WatchMore />
						</div>

						<div className="mt-10">
							<MovieComments />
						</div>
					</div>
				</div>
				<div className="md:w-1/3 w-full">
					<WatchMore />
				</div>
			</div>
		</div>
	)
}
