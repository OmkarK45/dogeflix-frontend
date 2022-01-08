/* eslint-disable @next/next/no-img-element */
import { MovieHeroCarousel } from '~/components/Movie/MovieHeroCarousel'
import { MovieRow } from '~/components/Movie/MovieRow'
import { Navbar } from '~/components/Nav/DesktopNav'
import { movies } from '~/lib/dummyData'

export default function Home() {
	return (
		<div>
			<Navbar />
			<div className="mt-0 md:mt-10">
				<MovieHeroCarousel movies={movies} />
			</div>
			<div className="mt-10">
				<MovieRow title="Trending" movies={movies} />
			</div>
		</div>
	)
}
