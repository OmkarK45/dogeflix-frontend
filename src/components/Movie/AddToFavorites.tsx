import { Movie } from '~/lib/types'
import { AddToFavoriteModal } from '../Favorites/AddToFavoriteModal'
import { AddToPlaylistModal } from '../Favorites/AddToPlaylistModal'

export function MovieActions({ data }: { data: Movie }) {
	return (
		<>
			<AddToFavoriteModal movie={data} />
			<AddToPlaylistModal movie={data} />
		</>
	)
}
