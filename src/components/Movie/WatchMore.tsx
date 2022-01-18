import _ from 'lodash'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import useSWR from 'swr'
import { fetcher } from '~/lib/fetchJson'
import { Movie, PaginatedApiResponse } from '~/lib/types'
import { Button } from '../ui/Button'
import { Link } from '../ui/Link'
import { WatchMoreCard } from './WatchMoreCard'

export function WatchMore() {
	const router = useRouter()
	const [page, setPage] = useState<number>(0)
	const [videos, setVideos] = useState<Movie[]>([])
	const [reachedEnd, setReachedEnd] = useState<boolean>(false)

	const { data } = useSWR<PaginatedApiResponse<Movie>>(
		`/videos/${router.query.video_id}/watch-more?page=${page + 1}&limit=10`,
		fetcher
	)

	useEffect(() => {
		if (data?.pageInfo.totalCount === videos.length) {
			setReachedEnd(true)
		}
		setVideos((previous) => {
			const prev = _.uniqBy(previous.concat(data?.data ?? []), 'id')
			return [...prev]
		})
	}, [data])

	return (
		<div>
			<h3 className="text-xl leading-6 font-semibold my-4">You might like</h3>
			<div className="space-y-2 ">
				{videos.map((video) => (
					<Link
						href={`/watch/${video.video_id}/${video.imdb_id}`}
						key={video.id}
						className="no-underline w-full font-normal rounded-lg"
					>
						<WatchMoreCard movie={video} size="medium" />
					</Link>
				))}
				<Button
					size="xl"
					variant="ghost"
					disabled={reachedEnd}
					onClick={() => !reachedEnd && setPage((prev) => prev + 1)}
				>
					{reachedEnd ? 'No more videos!' : 'Load More'}
				</Button>
			</div>
		</div>
	)
}
