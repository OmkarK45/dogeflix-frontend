/* eslint-disable @next/next/no-img-element */
import { useMemo } from 'react'
import useSWR from 'swr'
import { MovieHeroCarousel } from '~/components/Movie/MovieHeroCarousel'
import { MovieRow } from '~/components/Movie/MovieRow'
import { Navbar } from '~/components/Nav/DesktopNav'
import { fetcher } from '~/lib/fetchJson'
import { PaginatedApiResponse, Movie, GenreType } from '~/lib/types'
import _ from 'lodash'
import { IndeterminateProgress } from '~/components/ui/Progress'
import { Data } from '~/components/ui/Data'

const HOMEPAGE_CATEGORIES = ['ACTION', 'ANIMATION', 'HORROR', 'COMEDY']

export default function Home() {
	const { data, error } = useSWR<PaginatedApiResponse<Movie>>(
		`/videos/?movie_type=${HOMEPAGE_CATEGORIES.join(',')}&page=1&limit=10`,
		fetcher
	)

	const moviesByGenres = useMemo(() => {
		const movies = _(data?.data)
			.flatMap((movie) =>
				movie.genre.map((g) => _.assign({}, movie, { genre: g }))
			)
			.groupBy('genre')
			.value()

		const movies2 = JSON.parse(JSON.stringify(movies)) as {
			[key in GenreType]: Movie[]
		}
		return movies2
	}, [data])

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

	if (moviesByGenres)
		return (
			<div>
				<Navbar />
				<div className="mt-0 md:mt-10">
					<MovieHeroCarousel movies={moviesByGenres['COMEDY']} />
				</div>

				<div className="mt-10">
					<MovieRow title="Action" movies={moviesByGenres['ACTION']} />
					<MovieRow title="Comedy" movies={moviesByGenres['COMEDY']} />
					<MovieRow title="Horror" movies={moviesByGenres['HORROR']} />
					<MovieRow title="Animation" movies={moviesByGenres['ANIMATION']} />
				</div>

				<div>Browse More Categories</div>
			</div>
		)
}
