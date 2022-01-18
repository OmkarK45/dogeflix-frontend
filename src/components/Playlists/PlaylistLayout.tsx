import { formatDistanceToNow } from 'date-fns'
import _ from 'lodash'
import { useEffect, useState } from 'react'
import useSWR from 'swr'
import { fetcher } from '~/lib/fetchJson'
import { ApiResponse, Movie, PaginatedApiResponse, Playlist } from '~/lib/types'
import useUser from '~/lib/useUser'
import { UserProfile } from '../Common/UserProfile'
import { MovieCard } from '../Movie/MovieCard'
import { Button } from '../ui/Button'
import { ErrorFallback } from '../ui/Fallbacks/ErrorFallback'
import { Heading } from '../ui/Heading'
import { PlaylistActions } from './PlaylistActions'
import { PlaylistVideos } from './PlaylistVideos'

export function PlaylistLayout({
	playlistResponse,
}: {
	playlistResponse: ApiResponse<Playlist> & PaginatedApiResponse<Movie>
}) {
	const { user } = useUser({
		redirectIfFound: false,
	})

	const [page, setPage] = useState<number>(0)
	const [videos, setVideos] = useState<Movie[]>([])
	const [reachedEnd, setReachedEnd] = useState<boolean>(false)

	const { data } = useSWR<typeof playlistResponse>(
		`/playlists/${playlistResponse.data.id}?page=${page + 1}&limit=10`,
		fetcher,
		{ fallbackData: playlistResponse }
	)

	const isMine = user?.data.user?.id === playlistResponse.data.user_id

	useEffect(() => {
		// @ts-ignore
		if (data?.data.pageInfo.totalCount === videos.length) {
			setReachedEnd(true)
		}
		setVideos((previous) => {
			// @ts-ignore
			const prev = _.uniqBy(previous.concat(data?.data.video), 'id')
			return [...prev]
		})
	}, [data])
	// @ts-ignore
	console.log({ API: data?.data.video, videos })
	return (
		<div className="mx-auto container md:max-w-7xl md:min-h-[70vh]">
			<div className="container pt-6 mx-auto">
				<div className="flex flex-wrap">
					<div className="md:w-1/3 w-full ">
						<MovieCard />
						<div className="flex items-center justify-between mt-4 px-5 md:px-0">
							<div>
								<Heading size="h4">
									{data?.data.name === ''
										? 'Unnamed playlist'
										: data?.data.name}
								</Heading>
								<div className="flex space-x-2 mt-1 text-gray-700 dark:text-gray-400">
									<p>{data?.data?._count?.video ?? '-'} Videos</p>
									<p>·</p>
									{data?.data.created_at && (
										<p>
											Last updated{' '}
											{formatDistanceToNow(new Date(data!.data.created_at))}
										</p>
									)}
								</div>
							</div>
							{isMine && <PlaylistActions playlist={data?.data!} />}
						</div>
						<div className="px-5 md:px-0">
							<UserProfile name={data?.data.user?.name!} avatar="ok" />
						</div>
					</div>
					<div className="md:w-2/3 w-full pb-6 md:pb-0 md:pr-6">
						<div>
							{data?.data.video?.length === 0 ||
								(reachedEnd && (
									<div className="max-w-sm mx-auto text-center">
										<ErrorFallback
											noAction
											message="You do not have any videos in your playlist. You can add videos to playlist by clicking on the + button on the trailer page."
										/>
									</div>
								))}
							<PlaylistVideos
								playlistId={playlistResponse.data.id}
								isMine={isMine}
								videos={videos}
							/>
							<div className="text-center mt-4">
								<Button
									size="xl"
									variant="ghost"
									disabled={reachedEnd}
									onClick={() => !reachedEnd && setPage((prev) => prev + 1)}
								>
									{reachedEnd ? 'No more videos' : 'Load More'}
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
