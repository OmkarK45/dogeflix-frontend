import toast from 'react-hot-toast'
import { HiOutlineX } from 'react-icons/hi'
import useSWR from 'swr'
import { fetcher, mutationFn } from '~/lib/fetchJson'
import { ApiResponse, Movie, PaginatedApiResponse, Playlist } from '~/lib/types'
import { WatchMoreCard } from '../Movie/WatchMoreCard'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import { Link } from '../ui/Link'

export function FavoritesVideos({
	videos,
	onRemoveFromFavorites,
}: {
	videos: Movie[]
	onRemoveFromFavorites: (videoObj: Movie) => void
}) {
	return (
		<>
			<ul className="space-y-2 mx-4 md:space-y-3">
				{videos.map((videoObj) => {
					return (
						<li key={videoObj.video_id}>
							<Card rounded="md" className="relative">
								<Card.Body noPadding>
									<Link
										href={`/watch/${videoObj.video_id}/${videoObj.imdb_id}`}
										className="block w-full no-underline"
									>
										<WatchMoreCard size="small" movie={videoObj} />
									</Link>
									<Card.Body className="py-1  flex space-x-2 bg-gray-200 dark:bg-gray-800">
										<Button
											onClick={() => onRemoveFromFavorites(videoObj)}
											variant="ghost"
										>
											<span className="flex items-center space-x-2">
												<HiOutlineX className="h-5 w-5" />
												<p>Remove from favorites</p>
											</span>
										</Button>
									</Card.Body>
								</Card.Body>
							</Card>
						</li>
					)
				})}
			</ul>
		</>
	)
}
