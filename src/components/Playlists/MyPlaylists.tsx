import { useEffect, useState } from 'react'
import useSWR from 'swr'
import { fetcher } from '~/lib/fetchJson'
import { PaginatedApiResponse, Playlist } from '~/lib/types'
import { MovieCard } from '../Movie/MovieCard'
import { Button } from '../ui/Button'
import { Data } from '../ui/Data'
import { Link } from '../ui/Link'

export function MyPlaylists({
	playlistsResponse,
}: {
	playlistsResponse: PaginatedApiResponse<Playlist>
}) {
	const [page, setPage] = useState<number>(0)
	const [playtlists, setPlaylists] = useState<Playlist[]>([])
	const [reachedEnd, setReachedEnd] = useState<boolean>(false)

	const { data } = useSWR<PaginatedApiResponse<Playlist>>(
		`/playlists?page=${page + 1}&limit=10`,
		fetcher,
		{ fallbackData: playlistsResponse }
	)

	useEffect(() => {
		if (data?.pageInfo.totalCount === playtlists.length) {
			setReachedEnd(true)
		}
		setPlaylists((prev) => [...prev, ...(data?.data || [])])
	}, [data])

	return (
		<div>
			<div className="mx-auto container md:max-w-7xl ">
				<div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  pt-6 gap-8">
					{data?.data.map((playlist) => (
						<Link
							className="no-underline animate-scale"
							key={playlist.id}
							href={`/playlist/${playlist.id}`}
						>
							<MovieCard
								title={playlist.name}
								subtitle={playlist._count.video + ' Videos'}
							/>
						</Link>
					))}
				</div>
				<div className="flex items-center justify-center mt-10">
					<Button
						size="xl"
						variant="ghost"
						disabled={reachedEnd}
						onClick={() => !reachedEnd && setPage((prev) => prev + 1)}
					>
						{reachedEnd ? 'No more playlists' : 'Load More'}
					</Button>
				</div>
			</div>
		</div>
	)
}
