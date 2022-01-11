/* eslint-disable @next/next/no-img-element */
import { useMemo } from 'react'
import useSWR from 'swr'
import { MovieHeroCarousel } from '~/components/Movie/MovieHeroCarousel'
import { MovieRow } from '~/components/Movie/MovieRow'
import { Navbar } from '~/components/Nav/DesktopNav'
import { movies } from '~/lib/dummyData'
import { fetcher } from '~/lib/fetchJson'
import { PaginatedApiResponse, Movie, GenreType } from '~/lib/types'
import _, { flatMap, groupBy } from 'lodash'
import { IndeterminateProgress } from '~/components/ui/Progress'

const HOMEPAGE_CATEGORIES = ['ACTION', 'ANIMATION', 'HORROR', 'COMEDY']

export default function Home() {
	const { data, error } = useSWR<PaginatedApiResponse<Movie>>(
		`/videos/?movie_type=${HOMEPAGE_CATEGORIES.join(',')}&page=1&limit=40`,
		fetcher
	)

	const moviesByGenres = useMemo(() => {
		if (!data) return []

		const movies = _(data.data)
			.flatMap((movie) =>
				movie.genre.map((g) => _.assign({}, movie, { genre: g }))
			)
			.groupBy('genre')
			.value()
		const movies2 = JSON.parse(JSON.stringify(movies))
		return movies2 as Record<keyof typeof GenreType, Movie[]>
	}, [data, error])

	if (!data) {
		return (
			<div>
				<IndeterminateProgress />
			</div>
		)
	}

	if (error) {
		return <div>Error!</div>
	}
	return (
		<div>
			<Navbar />
			<div className="mt-0 md:mt-10">
				<MovieHeroCarousel movies={movies} />
			</div>

			<div className="mt-10">
				{/* @ts-ignore */}
				<MovieRow title="Action" movies={moviesByGenres['ACTION']} />
				{/* @ts-ignore */}
				<MovieRow title="Animation" movies={moviesByGenres['ANIMATION']} />
				{/* @ts-ignore */}
				<MovieRow title="Horror" movies={moviesByGenres['HORROR']} />
				{/* @ts-ignore */}
				<MovieRow title="Comedy" movies={moviesByGenres['COMEDY']} />
			</div>
		</div>
	)
}
