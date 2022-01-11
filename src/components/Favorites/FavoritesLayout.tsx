import { HiOutlineX } from 'react-icons/hi'
import { movies } from '~/lib/dummyData'
import { PageHeader } from '../Common/PageHeader'
import { UserProfile } from '../Common/UserProfile'
import { MovieCard } from '../Movie/MovieCard'
import { WatchMoreCard } from '../Movie/WatchMoreCard'
import { Alert } from '../ui/Alert'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import { Heading } from '../ui/Heading'

export function FavoritesLayout() {
	return (
		<div>
			<PageHeader title="Favorites" />
			<div className="mx-auto container md:max-w-7xl">
				<div className="container pt-6 mx-auto">
					<div className="flex flex-wrap">
						<div className="md:w-1/3 w-full ">
							<MovieCard movie={movies[0]} />
							<div className="mt-4 px-5 md:px-0">
								<Heading size="h4"> Liked Videos</Heading>
								<div className="flex space-x-2 mt-1 text-gray-700 dark:text-gray-400">
									<p>34 Videos</p>
									<p>·</p>
									<p>Last updated yesterday</p>
								</div>
							</div>
							<div className="px-5 md:px-0">
								<UserProfile name="ok" avatar="ok" />
							</div>
						</div>
						<div className="md:w-2/3 w-full pb-6 md:pb-0 md:pr-6">
							<Alert
								className="mb-2 mx-4"
								fullWidth
								status="info"
								message="You got great taste!"
							/>
							<div className="space-y-2 mx-4 md:space-y-0">
								<Card rounded="md" className="relative">
									<Card.Body noPadding>
										<WatchMoreCard />
										<Card.Body className="flex space-x-2 bg-gray-200 dark:bg-gray-700">
											<Button variant="dark">
												<span className="flex items-center space-x-2">
													<HiOutlineX className="h-5 w-5" />
													<p>Remove from favorites</p>
												</span>
											</Button>
										</Card.Body>
									</Card.Body>
								</Card>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
