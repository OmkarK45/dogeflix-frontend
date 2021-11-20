import { StarIcon } from '@heroicons/react/solid'
import clsx from 'clsx'
import format from 'date-fns/format'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { fetcher } from '~/lib/fetchJson'
import useUser from '~/lib/useUser'
import { Card } from '../ui/Card'
import { ErrorFallback } from '../ui/Fallbacks/ErrorFallback'
import { LoadingFallback } from '../ui/Fallbacks/LoadingFallback'

import { Heading } from '../ui/Heading'
import { Link } from '../ui/Link'
import { ReviewForm } from './ReviewForm'

interface Review {
	id: string
	product_id: string
	user_id: string
	rating: number
	comment: string
	created_at: string
	updated_at: string
	user: {
		name: string
	}
}

export function ProductReviews({
	reviews,
	totalReviews,
}: {
	reviews: Review[]
	totalReviews: number
}) {
	const router = useRouter()

	const { user } = useUser({
		redirectIfFound: false,
	})

	return (
		<div
			id="reviews"
			className="w-full max-w-2xl mx-auto mt-16 lg:max-w-none lg:mt-0 lg:col-span-4"
		>
			<div className="border-b border-gray-200"></div>
			<Heading size="h5" className="py-6">
				Customer Reviews ({totalReviews})
			</Heading>
			<div className="border-b border-gray-200"></div>
			{user?.isLoggedIn ? (
				<ReviewForm />
			) : (
				<Card className="font-medium py-3 my-3" rounded="lg">
					<Card.Body>
						<Link
							target="_blank"
							rel="noreferrer noopener"
							href={`/auth/login`}
						>
							Sign In
						</Link>{' '}
						to post review
					</Card.Body>
				</Card>
			)}
			<div>
				{reviews.length === 0 && (
					<ErrorFallback noAction message="No reviews on this product yet." />
				)}
				{reviews.map((review, reviewIdx) => (
					<div key={review.id} className="flex text-sm text-gray-500 space-x-4">
						<div className="flex-none py-10">
							<img
								src={`https://res.cloudinary.com/dogecorp/image/upload/v1631712846/dogesocial/v1/images/8_ni0eag.svg`}
								alt="Profile Picture of user"
								className="w-10 h-10 bg-gray-100 rounded-full"
							/>
						</div>
						<div
							className={clsx(
								reviewIdx === 0 ? '' : 'border-t border-gray-200',
								'py-10'
							)}
						>
							<h3 className="font-medium text-gray-900">{review.user.name}</h3>
							<p>
								<time dateTime={review.created_at}>
									{format(new Date(review.created_at), 'MMMM d, yyyy')}
								</time>
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
								<p>{review.comment}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export function ReviewStars({
	averageRating,
	totalReviews,
}: {
	averageRating: number
	totalReviews: number
}) {
	return (
		<>
			<div className="border-l border-gray-300">
				<p className="text-sm text-gray-700 ml-2">
					{averageRating}
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
					See all {totalReviews} reviews
				</a>
			</div>
		</>
	)
}

export function RatingStars({ averageRating }: { averageRating: number }) {
	return (
		<div className="flex items-center ">
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
