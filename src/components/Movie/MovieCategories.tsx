import { useRouter } from 'next/router'
import { movies } from '~/lib/dummyData'
import { Movie } from '~/lib/types'
import { PageHeader } from '../Common/PageHeader'
import { Heading } from '../ui/Heading'
import { Link } from '../ui/Link'
import { MovieCard } from './MovieCard'

export function MovieGrid() {
	const router = useRouter()
	return (
		<div>
			<div>
				<PageHeader title={`${router.query.category?.toString()} Movies`} />
				<div className="mx-auto container md:max-w-7xl">
					<div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8">
						<Link href="/watch/123">
							<MovieCard />
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
