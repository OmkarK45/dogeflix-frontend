import { NextPageContext } from 'next'
import { useRouter } from 'next/router'
import { PageHeader } from '~/components/Common/PageHeader'
import { Navbar } from '~/components/Nav/DesktopNav'
import { SearchResults } from '~/components/Search/SearchResults'
import { fetcher } from '~/lib/fetchJson'
import { Movie, PaginatedApiResponse } from '~/lib/types'

export default function SearchPage({
	moviesResponse,
	keyword,
}: {
	moviesResponse: PaginatedApiResponse<Movie>
	keyword: string
}) {
	return (
		<div>
			<Navbar />
			<PageHeader
				title={`Search results for "${keyword}"`}
				subtitle="You can also search by imdb ratings. Just type imdb followed by rating you want. eg. imdb7. You can also search by IMDB ID"
			/>
			{/* <SearchResults /> */}
			<SearchResults moviesResponse={moviesResponse} query={keyword} />
		</div>
	)
}

SearchPage.getInitialProps = async (ctx: NextPageContext) => {
	try {
		const moviesResponse = await fetcher(
			`/videos/search?query=${ctx.query.keyword}&page=1&limit=10`,
			{ method: 'GET' }
		)
		return {
			moviesResponse,
			keyword: ctx.query.keyword,
		}
	} catch (e) {
		return {
			moviesResponse: null,
			keyword: ctx.query.keyword,
		}
	}
}
