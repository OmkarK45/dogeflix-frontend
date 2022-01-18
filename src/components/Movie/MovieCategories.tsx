import _ from 'lodash'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { FaImdb } from 'react-icons/fa'
import useSWR from 'swr'
import { fetcher } from '~/lib/fetchJson'
import { Movie, PaginatedApiResponse } from '~/lib/types'
import { PageHeader } from '../Common/PageHeader'
import { Button } from '../ui/Button'
import { Data } from '../ui/Data'
import { Link } from '../ui/Link'
import { MovieCard } from './MovieCard'
import { MovieCardTall } from './MovieCardTall'

export function MovieGrid({
	movieResponse,
}: {
	movieResponse: PaginatedApiResponse<Movie>
}) {
	const router = useRouter()

	const [page, setPage] = useState<number>(0)
	const [movies, setMovies] = useState<Movie[]>([])
	const [reachedEnd, setReachedEnd] = useState<boolean>(false)

	const { data } = useSWR<PaginatedApiResponse<Movie>>(
		`/videos?movie_type=${router.query.category}&page=${page + 1}&limit=10`,
		fetcher
	)

	useEffect(() => {
		if (data?.pageInfo.totalCount === movies.length) {
			setReachedEnd(true)
		}
		setMovies((previous) => {
			const prev = _.uniqBy(previous.concat(data?.data ?? []), 'id')
			return [...prev]
		})
	}, [data])

	return (
		<div>
			<div>
				<PageHeader
					title={`${router.query.category?.toString().toLowerCase()} Movies`}
				/>
				<div className="mx-auto container md:max-w-7xl">
					<div className="pt-3">
						<p className="font-medium ">
							Showing {movies.length} out of {data?.pageInfo.totalCount}
						</p>
					</div>
					<div className="container px-2 md:px-0 row mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 pt-3 gap-8">
						{movies.map((movie) => (
							<Link
								key={movie.id}
								className="no-underline animate-scale"
								href={`/watch/${movie.video_id}/${movie.imdb_id}`}
							>
								<div>
									<div className="relative">
										<div className="relative w-full h-52 md:h-96 rounded-lg overflow-hidden">
											<img
												src={movie.poster_url}
												alt="A movie poster"
												className="w-full h-full object-center object-cover md:object-cover"
											/>
										</div>
										<div className="relative mt-4">
											<h3 className="text-sm font-medium ">{movie.title}</h3>
											<p className="mt-1 text-sm text-gray-500">{movie.year}</p>
										</div>
										<div className="absolute top-0 inset-x-0 h-96 rounded-lg p-4 flex items-end justify-end overflow-hidden">
											<div
												aria-hidden="true"
												className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
											/>
											<span className="relative flex items-center space-x-3 text-lg font-semibold text-white">
												<FaImdb /> <p>{movie.rating}</p>
											</span>
										</div>
									</div>
								</div>
							</Link>
						))}
					</div>
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
	)
}
