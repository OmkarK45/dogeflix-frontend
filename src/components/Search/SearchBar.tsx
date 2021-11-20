import { SearchIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
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
		<div className="w-full lg:max-w-xs">
			<Form
				form={form}
				onSubmit={(values) => {
					router.push(`/search?query=${values.query}`)
				}}
			>
				<div className="relative">
					<Input
						label="Search"
						noLabel
						placeholder="Search for products...."
						type="search"
						{...form.register('query')}
					/>
				</div>
			</Form>
		</div>
	)
}
