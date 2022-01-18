import { Playlist } from '~/lib/types'
import { DeletePlaylistModal } from './DeletePlaylistModal'
import { EditPlaylistModal } from './EditPlaylistModal'

export function PlaylistActions({ playlist }: { playlist: Playlist }) {
	return (
		<div className="flex items-center space-x-2">
			<EditPlaylistModal playlist={playlist} />
			<DeletePlaylistModal playlist={playlist} />
		</div>
	)
}
