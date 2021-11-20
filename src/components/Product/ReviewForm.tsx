import { useRouter } from 'next/router'
import toast from 'react-hot-toast'
import useSWR, { useSWRConfig } from 'swr'
import { z } from 'zod'
import { IoMdStar, IoMdStarOutline, IoMdStarHalf } from 'react-icons/io'

import ReactStars from 'react-rating-stars-component'

import { fetcher, mutationFn } from '~/lib/fetchJson'
import useUser from '~/lib/useUser'
import { ProductType, Review } from '~/types'

import Form, { useZodForm } from '../ui/Form/Form'
import { Button } from '../ui/Button'
import { TextArea } from '../ui/TextArea'
import { Controller } from 'react-hook-form'

const ratingOptions = {
	size: 200,
	count: 5,
	isHalf: true,
	emptyIcon: <IoMdStarOutline className="h-10 w-10 text-2xl text-yellow-500" />,
	halfIcon: <IoMdStarHalf className="h-10 w-10 text-yellow-500" />,
	filledIcon: <IoMdStar className="h-10 w-10 text-yellow-500" />,
}

const ReviewFormSchema = z.object({
	comment: z.string().min(1).max(500),
	rating: z.number().min(0.5).max(5),
})

export function ReviewForm() {
	const router = useRouter()

	const { user } = useUser({
		redirectIfFound: false,
	})

	const { data, mutate } = useSWR<any>(
		`/api/products/${router.query.id}`,
		fetcher
	)

	const form = useZodForm({
		schema: ReviewFormSchema,
	})

	if (!data) return null

	async function handleSubmit(values: z.infer<typeof ReviewFormSchema>) {
		console.log(values)
		const temporaryReviewObject = {
			id: router.query.id as string,
			product_id: router.query.id as string,
			user_id: user?.data?.user?.id as string,
			rating: 5,
			comment: values.comment,
			created_at: Date.now(),
			user: {
				//  I gurantee that user is not null
				name: user?.data?.user?.name!,
			},
			updated_at: Date.now(),
		}

		if (
			data?.reviews.find(
				(review: Review) => review.user_id === user?.data?.user?.id
			)
		) {
			return toast.error('You have already reviewed this product')
		}

		await mutate(
			{
				...data,
				reviews: [temporaryReviewObject, ...data?.reviews],
			},
			false
		)

		await mutationFn(`/api/reviews/${router.query.id}/add`, {
			comment: values.comment,
			rating: values.rating,
		})

		await mutate({
			...data,
			reviews: [temporaryReviewObject, ...data.reviews],
			_count: { ...data._count, reviews: data._count.reviews + 1 },
		})
	}

	return (
		<div className="my-5">
			<Form form={form} onSubmit={async (values) => await handleSubmit(values)}>
				<div>
					<Controller
						name="rating"
						render={({ field: { onChange, value } }) => (
							<div>
								<p className="font-medium">You rated this product: {value}</p>
								<div>
									<ReactStars
										{...ratingOptions}
										onChange={onChange}
										value={value}
									/>
								</div>
							</div>
						)}
					/>
				</div>
				<TextArea
					label="Your Review"
					{...form.register('comment')}
					placeholder="Type your review!"
				/>
				<div className="flex justify-end space-x-2">
					<Button variant="white">Cancel</Button>
					<Form.SubmitButton type="submit">Submit</Form.SubmitButton>
				</div>
			</Form>
		</div>
	)
}
