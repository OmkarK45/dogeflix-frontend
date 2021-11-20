import { SearchIcon } from '@heroicons/react/outline'
import { z } from 'zod'
import Form, { useZodForm } from '../ui/Form/Form'
import { Input } from '../ui/Input'

const SearchSchema = z.object({
	query: z.string(),
})

export function SearchBar() {
	const form = useZodForm({
		schema: SearchSchema,
	})

	return (
		<div className="w-full lg:max-w-xs">
			<Form form={form} onSubmit={() => console.log('search')}>
				<div className="relative">
					<Input
						label="Search"
						noLabel
						id="search"
						name="search"
						placeholder="Search for products...."
						type="search"
					/>
				</div>
			</Form>
		</div>
	)
}
