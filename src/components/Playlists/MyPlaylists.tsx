import { movies } from '~/lib/dummyData'
import { PageHeader } from '../Common/PageHeader'
import { MovieCard } from '../Movie/MovieCard'
import { Link } from '../ui/Link'

export function MyPlaylists() {
	return (
		<div>
			<PageHeader title="My Playlists" />
			<div className="mx-auto container md:max-w-7xl">
				<div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8">
					<Link href="/playlist/234234nm">
						<MovieCard movie={movies[0]} />
					</Link>
				</div>
			</div>
		</div>
	)
}
