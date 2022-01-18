import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import useSWR from 'swr'
import { fetcher, mutationFn } from '~/lib/fetchJson'
import { Movie } from '~/lib/types'
import useUser from '~/lib/useUser'
import { PageHeader } from '../Common/PageHeader'
import { UserProfile } from '../Common/UserProfile'
import { MovieCard } from '../Movie/MovieCard'
import { Alert } from '../ui/Alert'
import { Button } from '../ui/Button'
import { ErrorFallback } from '../ui/Fallbacks/ErrorFallback'

import { Heading } from '../ui/Heading'
import { FavoritesVideos } from './FavoritesVideo'

// using any for speed
export function FavoritesLayout({
	favoritesResponse,
}: {
	favoritesResponse: any
}) {
	const router = useRouter()
	const [page, setPage] = useState<number>(0)
	const [videos, setVideos] = useState<Movie[]>([])
	const [reachedEnd, setReachedEnd] = useState<boolean>(false)

	const { user } = useUser({
		redirectTo: '/auth/login?redirect=/favorites',
	})

	const { data, mutate } = useSWR<typeof favoritesResponse>(
		`/favorites?page=${page + 1}&limit=10`,
		fetcher,
		{ fallbackData: favoritesResponse }
	)

	useEffect(() => {
		// @ts-ignore
		if (data?.data.pageInfo.totalCount === videos.length) {
			setReachedEnd(true)
		}
		setVideos((prev) => [...prev, ...(data?.data.videos || [])])
	}, [data])

	console.log('VIDEOS', videos)

	async function handleRemoveFromFavorites(videoObj: Movie) {
		await mutationFn('/favorites/toggle-favorites', {
			video_id: videoObj.video_id,
		})
		router.reload()
		await mutate()
		toast.success('Video removed from favorites')
	}

	return (
		<div>
			<PageHeader title="Favorites" />
			<div className="mx-auto container md:max-w-7xl">
				<div className="flex flex-wrap container pt-6 mx-auto">
					<div className="md:w-1/3 w-full ">
						<MovieCard hideShare />
						<div className="mt-4 px-5 md:px-0">
							<Heading size="h4"> Liked Videos</Heading>
							<div className="flex space-x-2 mt-1 text-gray-700 dark:text-gray-400">
								<p>
									{(data && data?.data?.pageInfo?.totalCount) ?? '-'} Videos
								</p>
								<p>·</p>
								<p>Last updated yesterday</p>
							</div>
						</div>
						<div className="px-5 md:px-0">
							<UserProfile name={user?.data.user?.name!} avatar="ok" />
						</div>
					</div>
					<div className="md:w-2/3 w-full pb-6 md:pb-0 md:pr-6">
						{data?.data?.pageInfo.totalCount !== 0 ? (
							<Alert
								className="mb-2 mx-4"
								fullWidth
								status="info"
								message="You got great taste!"
							/>
						) : (
							<div className="max-w-sm mx-auto text-center">
								<ErrorFallback
									noAction
									message="No favorited videos found. You can click the heart button on video page to mark the video as favorite."
								/>
							</div>
						)}

						<FavoritesVideos
							onRemoveFromFavorites={handleRemoveFromFavorites}
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
	)
}
