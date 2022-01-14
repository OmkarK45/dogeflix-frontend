import { useRouter } from 'next/router'
import useSWR from 'swr'
import { object, string, z } from 'zod'
import { fetcher, mutationFn } from '~/lib/fetchJson'
import { ApiResponse, Comment } from '~/lib/types'
import useUser from '~/lib/useUser'
import Form, { useZodForm } from '../ui/Form/Form'
import { TextArea } from '../ui/TextArea'

const schema = object({ body: string() })

export function CommentForm() {
	const router = useRouter()

	const { user } = useUser({
		redirectIfFound: false,
	})
	const form = useZodForm({
		schema,
	})
	// comments on this video
	const { data, mutate } = useSWR<ApiResponse<Comment[]>>(
		`/comments/${router.query.video_id}`,
		fetcher
	)

	async function handleSubmit(values: z.infer<typeof schema>) {
		if (!data) {
			return null
		}
		const commentObject = {
			id: String(data.data.length + 1),
			body: values.body,
			createdAt: new Date().toString(),
			updatedAt: new Date().toString(),
			user: {
				id: user?.data.user?.id as string,
				name: user?.data.user?.name as string,
			},
		}
		await mutate(
			{
				data: [commentObject, ...data.data],
				success: true,
				code: 'SUCCESS',
			},
			false
		)

		await mutationFn(`/comments/${router.query.video_id}/add-comment`, {
			body: values.body,
		})
		console.log({
			data: [commentObject, ...data?.data],
			success: true,
			code: 'SUCCESS',
		})
		await mutate({
			data: [commentObject, ...data?.data],
			success: true,
			code: 'SUCCESS',
		})
	}

	return (
		<div className="bg-white dark:bg-gray-800 bg-opacity-20 px-4 py-6 sm:px-6">
			<div className="flex space-x-3">
				<div className="flex-shrink-0">
					<img
						className="h-10 w-10 rounded-full"
						src={
							'https://res.cloudinary.com/dogecorp/image/upload/v1631712846/dogesocial/v1/images/6_g9vgao.svg'
						}
						alt="User Profile Picture"
					/>
				</div>
				<div className="min-w-0 flex-1">
					<Form
						action="#"
						form={form}
						onSubmit={async (values) => await handleSubmit(values)}
					>
						<div>
							<TextArea
								{...form.register('body')}
								placeholder="Your thoughts"
								label="Comment"
							/>
						</div>
						<div className="mt-3 flex items-center justify-between">
							<Form.SubmitButton size="lg" type="submit">
								Comment
							</Form.SubmitButton>
						</div>
					</Form>
				</div>
			</div>
		</div>
	)
}
