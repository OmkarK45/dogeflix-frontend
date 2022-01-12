import { Navbar } from '~/components/Nav/DesktopNav'
import { VideoPageLayout } from '~/components/Common/VIdeoPageLayout'
import { useRouter } from 'next/router'
import { ApiResponse, Movie } from '~/lib/types'
import { NextPageContext } from 'next'
import { fetcher } from '~/lib/fetchJson'

export default function WatchPage({ movie }: { movie: ApiResponse<Movie> }) {
	const router = useRouter()
	const { video_id, imdb_id } = router.query

	return (
		<div>
			<Navbar />
			<div className="max-w-7xl mx-auto">
				<VideoPageLayout movie={movie} />
			</div>
		</div>
	)
}

WatchPage.getInitialProps = async (ctx: NextPageContext) => {
	const { video_id } = ctx.query

	const movie = await fetcher<ApiResponse<Movie>>(`/videos/${video_id}`, {
		method: 'GET',
	})

	console.log('called')
	return {
		movie,
	}
}
