import { NextPageContext } from 'next'
import { MovieGrid } from '~/components/Movie/MovieCategories'
import { Navbar } from '~/components/Nav/DesktopNav'
import { fetcher } from '~/lib/fetchJson'
import { Movie, PaginatedApiResponse } from '~/lib/types'

export default function CategoryPage({
	moviesResponse,
}: {
	moviesResponse: PaginatedApiResponse<Movie>
}) {
	return (
		<div>
			<Navbar />
			<MovieGrid movieResponse={moviesResponse} />
		</div>
	)
}

CategoryPage.getInitialProps = async (ctx: NextPageContext) => {
	const moviesResponse = await fetcher<PaginatedApiResponse<Movie>>(
		`/videos?movie_type=${ctx.query.category}&page=1&limit=10`,
		{ method: 'GET' }
	)
	return { moviesResponse }
}
