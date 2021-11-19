import { StarIcon } from '@heroicons/react/solid'
import clsx from 'clsx'

import { Heading } from '../ui/Heading'

interface Review {
	average: number
	featured: {
		id: number
		rating: number
		content: string
		date: string
		datetime: string
		author: string
		avatarSrc: string
	}[]
}

export function ProductReviews({ reviews }: { reviews: Review }) {
	return (
		<div className="w-full max-w-2xl mx-auto mt-16 lg:max-w-none lg:mt-0 lg:col-span-4">
			<div className="border-b border-gray-200"></div>
			<Heading size="h5" className="py-6">
				Customer Reviews
			</Heading>
			<div className="border-b border-gray-200"></div>
			<div>
				{reviews.featured.map((review, reviewIdx) => (
					<div key={review.id} className="flex text-sm text-gray-500 space-x-4">
						<div className="flex-none py-10">
							<img
								src={review.avatarSrc}
								alt=""
								className="w-10 h-10 bg-gray-100 rounded-full"
							/>
						</div>
						<div
							className={clsx(
								reviewIdx === 0 ? '' : 'border-t border-gray-200',
								'py-10'
							)}
						>
							<h3 className="font-medium text-gray-900">{review.author}</h3>
							<p>
								<time dateTime={review.datetime}>{review.date}</time>
							</p>

							<div className="flex items-center mt-4">
								{[0, 1, 2, 3, 4].map((rating) => (
									<StarIcon
										key={rating}
										className={clsx(
											review.rating > rating
												? 'text-yellow-400'
												: 'text-gray-300',
											'h-5 w-5 flex-shrink-0'
										)}
										aria-hidden="true"
									/>
								))}
							</div>
							<p className="sr-only">{review.rating} out of 5 stars</p>

							<div className="mt-4 prose prose-sm max-w-none text-gray-500">
								<p>{review.content}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export function ReviewStars({ reviews }: { reviews: Review }) {
	return (
		<>
			<div className="border-l border-gray-300">
				<p className="text-sm text-gray-700 ml-2">
					{reviews.average}
					<span className="sr-only"> out of 5 stars</span>
				</p>
			</div>

			<div aria-hidden="true" className="ml-4 text-sm text-gray-300">
				·
			</div>
			<div className="ml-4 flex">
				<a
					href="#"
					className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
				>
					See all 512 reviews
				</a>
			</div>
		</>
	)
}

export function RatingStars({ averageRating }: { averageRating: number }) {
	return (
		<div className="flex items-center">
			{[0, 1, 2, 3, 4].map((rating) => (
				<StarIcon
					key={rating}
					className={clsx(
						averageRating > rating ? 'text-yellow-400' : 'text-gray-200',
						'h-5 w-5 flex-shrink-0'
					)}
					aria-hidden="true"
				/>
			))}
		</div>
	)
}
