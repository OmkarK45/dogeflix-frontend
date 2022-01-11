import { QuestionMarkCircleIcon } from '@heroicons/react/solid'
import { object, string } from 'zod'
import { Button } from '../ui/Button'
import Form, { useZodForm } from '../ui/Form/Form'
import { Heading } from '../ui/Heading'
import { TextArea } from '../ui/TextArea'

const comments = [
	{
		id: 1,
		name: 'Leslie Alexander',
		date: '4d ago',
		imageId: '1494790108377-be9c29b29330',
		body: 'Ducimus quas delectus ad maxime totam doloribus reiciendis ex. Tempore dolorem maiores. Similique voluptatibus tempore non ut.',
	},
	{
		id: 2,
		name: 'Michael Foster',
		date: '4d ago',
		imageId: '1519244703995-f4e0f30006d5',
		body: 'Et ut autem. Voluptatem eum dolores sint necessitatibus quos. Quis eum qui dolorem accusantium voluptas voluptatem ipsum. Quo facere iusto quia accusamus veniam id explicabo et aut.',
	},
	{
		id: 3,
		name: 'Dries Vincent',
		date: '4d ago',
		imageId: '1506794778202-cad84cf45f1d',
		body: 'Expedita consequatur sit ea voluptas quo ipsam recusandae. Ab sint et voluptatem repudiandae voluptatem et eveniet. Nihil quas consequatur autem. Perferendis rerum et.',
	},
]
export function MovieComments() {
	const form = useZodForm({
		schema: object({ body: string() }),
	})
	return (
		<section aria-labelledby="notes-title">
			<Heading size="h5" className="mb-6">
				Comments
			</Heading>
			<div className="bg-white dark:bg-gray-900 shadow sm:rounded-lg sm:overflow-hidden">
				<div className="bg-white dark:bg-gray-900 bg-opacity-20 px-4 py-6 sm:px-6">
					<div className="flex space-x-3">
						<div className="flex-shrink-0">
							<img
								className="h-10 w-10 rounded-full"
								src={
									'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80'
								}
								alt=""
							/>
						</div>
						<div className="min-w-0 flex-1">
							<Form action="#" form={form} onSubmit={() => {}}>
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
				<div className="divide-y divide-gray-200">
					<div className="px-4 py-6 sm:px-6">
						<ul role="list" className="space-y-8">
							{comments.map((comment) => (
								<li key={comment.id}>
									<div className="flex space-x-3">
										<div className="flex-shrink-0">
											<img
												className="h-10 w-10 rounded-full"
												src={`https://images.unsplash.com/photo-${comment.imageId}?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`}
												alt=""
											/>
										</div>
										<div>
											<div className="text-sm">
												<a href="#" className="font-medium">
													{comment.name}
												</a>
											</div>
											<div className="mt-1 text-sm ">
												<p>{comment.body}</p>
											</div>
											<div className="mt-2 text-sm space-x-2">
												<span className="text-gray-500 font-medium">
													{comment.date}
												</span>{' '}
											</div>
										</div>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}
