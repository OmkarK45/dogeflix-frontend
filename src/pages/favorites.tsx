import { NextPageContext } from 'next'
import { FavoritesLayout } from '~/components/Favorites/FavoritesLayout'
import { Navbar } from '~/components/Nav/DesktopNav'
import { fetcher } from '~/lib/fetchJson'

export default function FavoritesPage({
	favoritesResponse,
}: {
	// TODO : I will type this later
	favoritesResponse: any
}) {
	return (
		<div>
			<Navbar />
			<FavoritesLayout favoritesResponse={favoritesResponse} />
		</div>
	)
}

FavoritesPage.getInitialProps = async (ctx: NextPageContext) => {
	try {
		const favoritesResponse = await fetcher(`/favorites?page=1&limit=10`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				cookie: ctx.req?.headers.cookie ?? '',
			},
		})
		console.log(favoritesResponse)
		return { favoritesResponse }
	} catch (e) {
		return { favoritesResponse: null }
	}
}
