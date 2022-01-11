import { Navbar } from '~/components/Nav/DesktopNav'
import { MyPlaylists } from '~/components/Playlists/MyPlaylists'

export default function PlaylistsPage() {
	return (
		<div>
			<Navbar />
			<MyPlaylists />
		</div>
	)
}
