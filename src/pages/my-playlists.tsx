import { NextPageContext } from 'next'
import { PageHeader } from '~/components/Common/PageHeader'
import { Navbar } from '~/components/Nav/DesktopNav'
import { MyPlaylists } from '~/components/Playlists/MyPlaylists'
import { fetcher } from '~/lib/fetchJson'
import { PaginatedApiResponse, Playlist } from '~/lib/types'
import useUser from '~/lib/useUser'

export default function PlaylistsPage({
	playlistsResponse,
}: {
	playlistsResponse: PaginatedApiResponse<Playlist>
}) {
	const user = useUser({
		redirectTo: '/auth/login?redirect=/my-playlists',
	})

	return (
		<div>
			<Navbar />
			<PageHeader
				title="My Playlists"
				subtitle="A playlist is a collection of videos. Anybody can make playlists, share them. You can also make playlists and share them with your friends."
			/>

			<MyPlaylists playlistsResponse={playlistsResponse} />
		</div>
	)
}

PlaylistsPage.getInitialProps = async (ctx: NextPageContext) => {
	try {
		const userPlaylists = await fetcher(`/playlists?page=1&limit=10`, {
			method: 'GET',
			headers: {
				cookie: ctx.req?.headers.cookie ?? '',
			},
		})

		console.log(userPlaylists)

		return {
			userPlaylists,
		}
	} catch (e) {
		return {
			userPlaylists: null,
		}
	}
}
