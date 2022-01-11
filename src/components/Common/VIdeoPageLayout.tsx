import { CgDolby } from 'react-icons/cg'
import ReactPlayer from 'react-player/lazy'
import { AddToFavorites } from '../Movie/AddToFavorites'
import { MovieComments } from '../Movie/MovieComments'
import { MovieMetadata } from '../Movie/MovieMetadata'
import { MovieReactions } from '../Movie/MovieReactions'
import { WatchMore } from '../Movie/WatchMore'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'

export function VideoPageLayout() {
	return (
		<div className="container mx-auto">
			<div className="flex flex-wrap ">
				<div className="md:w-2/3 w-full md:mt-12 pb-6 md:pb-0 md:pr-6">
					<div className="aspect-w-16 aspect-h-9  md:rounded-lg overflow-hidden">
						<ReactPlayer
							url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
							width="100%"
							height="100%"
							playing={true}
							controls={true}
						/>
					</div>
					<div className="mt-4 px-3">
						<div className="flex flex-col md:flex-row md:items-center md:space-y-0 space-y-3 justify-between pb-5 border-b border-gray-300 dark:border-gray-800">
							<div>
								<h3 className="text-2xl leading-6 font-medium ">
									Avengers Infinity War
								</h3>
								<div className="flex items-center space-x-2 mt-2">
									<Badge variant="indigo">Trailer</Badge>
									<Badge variant="pink" className="flex items-center">
										<CgDolby className="inline-block mr-2 h-4 w-4" />
										<p>Dolby Digital 5.1</p>
									</Badge>
									<Badge variant="red">3D</Badge>
								</div>
							</div>
							<div className="flex space-x-3">
								<MovieReactions />
							</div>
						</div>

						{/* Add to favorites  */}
						<div className="mt-2">
							<AddToFavorites />
						</div>

						<div>
							<MovieMetadata />
						</div>
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
					<div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-24" />
				</div>
			</div>
		</div>
	)
}
