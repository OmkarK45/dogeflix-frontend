import { useRouter } from 'next/router'
import { fetcher } from '~/lib/fetchJson'
import { ApiResponse, Comment, PaginatedApiResponse } from '~/lib/types'
import useUser from '~/lib/useUser'
import { Card } from '../ui/Card'
import { Data } from '../ui/Data'
import { Heading } from '../ui/Heading'
import { Link } from '../ui/Link'
import { CommentForm } from './CommentForm'
import format from 'date-fns/format'
import useSWR from 'swr'
import { useEffect, useMemo, useState } from 'react'
import { Button } from '../ui/Button'
import { ErrorFallback } from '../ui/Fallbacks/ErrorFallback'

export function MovieComments() {
	const router = useRouter()
	const [page, setPage] = useState<number>(0)
	const [comments, setComments] = useState<Comment[]>([])
	const [reachedEnd, setReachedEnd] = useState<boolean>(false)

	const { user } = useUser({
		redirectIfFound: false,
	})

	const { data } = useSWR<PaginatedApiResponse<Comment>>(
		`/comments/${router.query.video_id}?page=${page + 1}&limit=6`,
		fetcher
	)

	useEffect(() => {
		if (data?.pageInfo.totalCount === comments.length) {
			setReachedEnd(true)
		}
		setComments((prev) => [...prev, ...(data?.data || [])])
	}, [data])

	return (
		<section aria-labelledby="comment-section">
			<Heading size="h5" className="mb-6">
				Comments
			</Heading>
			<div className="bg-white dark:bg-gray-800 shadow sm:rounded-lg sm:overflow-hidden">
				{user?.isLoggedIn ? (
					<CommentForm />
				) : (
					<Card className="font-medium py-3 my-3 px-4 border-none" rounded="lg">
						<Card.Body>
							<Link
								target="_blank"
								rel="noreferrer noopener"
								href={`/auth/login`}
							>
								Sign In
							</Link>{' '}
							to post comments
						</Card.Body>
					</Card>
				)}
				<div className="divide-y divide-gray-200">
					<div className="px-4 py-6 sm:px-6">
						<ul role="list" className="space-y-8">
							{comments.length === 0 && true && (
								<ErrorFallback noAction message="No comments on this video." />
							)}
							{comments &&
								comments.length > 0 &&
								comments.map((comment) => (
									<li key={comment.id}>
										<div className="flex space-x-3">
											<div className="flex-shrink-0">
												<img
													className="h-10 w-10 rounded-full"
													src="https://res.cloudinary.com/dogecorp/image/upload/v1631712846/dogesocial/v1/images/6_g9vgao.svg"
													alt=""
												/>
											</div>
											<div>
												<div className="text-sm">
													<a href="#" className="font-medium">
														{comment.user.name}
													</a>
												</div>
												<div className="mt-1 text-sm ">
													<p>{comment.body}</p>
												</div>
												<div className="mt-2 text-sm text-gray-500 space-x-2">
													<time dateTime={comment.createdAt}>
														{format(
															new Date(comment.createdAt),
															'MMMM d, yyyy'
														)}
													</time>
												</div>
											</div>
										</div>
									</li>
								))}
						</ul>
						<Button
							size="xl"
							variant="ghost"
							disabled={reachedEnd}
							onClick={() => setPage((prev) => prev + 1)}
						>
							{reachedEnd ? 'No more comments' : 'Load More'}
						</Button>
					</div>
				</div>
			</div>
		</section>
	)
}
