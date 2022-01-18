import { NextPageContext } from 'next'
import { Navbar } from '~/components/Nav/DesktopNav'
import { PlaylistLayout } from '~/components/Playlists/PlaylistLayout'
import { fetcher } from '~/lib/fetchJson'
import { PaginatedApiResponse, Playlist, Movie, ApiResponse } from '~/lib/types'

export default function PublicPlaylistPage({
	playlistResponse,
}: {
	playlistResponse: ApiResponse<Playlist> & PaginatedApiResponse<Movie>
}) {
	return (
		<div>
			<Navbar />
			<PlaylistLayout playlistResponse={playlistResponse} />
		</div>
	)
}

PublicPlaylistPage.getInitialProps = async (ctx: NextPageContext) => {
	try {
		const playlistResponse = await fetcher(
			`/playlists/${ctx.query.playlist_id}?page=1&limit=10`,
			{ method: 'GET' }
		)
		return { playlistResponse }
	} catch (e) {
		return { playlistResponse: null }
	}
}
