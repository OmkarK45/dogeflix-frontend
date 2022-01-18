import { SearchIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import { HiOutlineInformationCircle } from 'react-icons/hi'
import { z } from 'zod'
import Form, { useZodForm } from '../ui/Form/Form'
import { Input } from '../ui/Input'

const SearchSchema = z.object({
	query: z.string(),
})

export function SearchBar() {
	const router = useRouter()

	const form = useZodForm({
		schema: SearchSchema,
	})

	return (
		<div className="w-full lg:max-w-lg">
			<Form
				form={form}
				onSubmit={(values) => {
					router.push(`/search?keyword=${values.query}`)
				}}
			>
				<div className="relative flex items-center space-x-2">
					<Input
						label="Search"
						noLabel
						placeholder="Search for movies, imdb6...."
						type="search"
						{...form.register('query')}
					/>
				</div>
			</Form>
		</div>
	)
}
