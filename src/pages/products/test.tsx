import { CheckIcon, ChevronDownIcon } from '@heroicons/react/solid'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import useSWRInfinite from 'swr/infinite'
import { Button } from '~/components/ui/Button'
import Form from '~/components/ui/Form/Form'
import { Select } from '~/components/ui/Select'
import { fetcher } from '~/lib/fetchJson'

const PAGE_SIZE = 6

interface SortOptions {
	label: string
	value: string
}
const SORT_OPTIONS = {
	best_rating: { label: 'Best Rating', value: 'best_rating' },
	newest: { label: 'Newest', value: 'newest' },
	price_asc: { label: 'Price Ascending', value: 'price_asc' },
	price_desc: { label: 'Price Descending', value: 'price_desc' },
} as { [key: string]: SortOptions }

export default function App() {
	const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
		(index) => `/api/products/all?page=${index + 1}&limit=${PAGE_SIZE}`,
		fetcher
	)

	const form = useForm<SortOptions>()

	const isLoadingInitialData = !data && !error

	if (isLoadingInitialData) return <div>loading</div>

	const flattenedData = data?.flat()

	const products = flattenedData ? [].concat(...flattenedData) : []

	const isLoadingMore =
		isLoadingInitialData ||
		(size > 0 && products && typeof products[size - 1] === 'undefined')

	const isEmpty = data?.[0]?.length === 0

	const isReachingEnd =
		isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE)

	const isRefreshing = isValidating && data && data.length === size

	return (
		<div style={{ fontFamily: 'sans-serif' }}>
			<Form form={form} onSubmit={(values) => console.log(values)}>
				<Controller
					name="label"
					control={form.control}
					defaultValue={SORT_OPTIONS.best_rating.label}
					render={({ field: { value, onChange, name } }) => (
						<Select label="Sort Options" value={value} onChange={onChange}>
							<Select.Button
								// @ts-ignore I know this exists
								label={value ? value.label : 'Select'}
								variant={value ? 'default' : 'placeholder'}
								icon={
									<ChevronDownIcon className="w-5 h-5 text-black transform -rotate-90" />
								}
							/>
							<Select.Options>
								{Object.entries(SORT_OPTIONS).map(([key, props]) => (
									<Select.Option
										key={key}
										value={props}
										label={props.label}
										selectedIcon={<CheckIcon className="w-5 h-5" />}
									/>
								))}
							</Select.Options>
						</Select>
					)}
				/>
			</Form>
			<p>
				showing {size} page(s) of {isLoadingMore ? '...' : products.length}{' '}
				issue(s){' '}
				<Button
					disabled={isLoadingMore || isReachingEnd}
					onClick={() => setSize(size + 1)}
				>
					{isLoadingMore
						? 'loading...'
						: isReachingEnd
						? 'no more issues'
						: 'load more'}
				</Button>
			</p>
			<pre>{JSON.stringify(products, null, 2)}</pre>
			{products.map((product) => {
				return (
					// @ts-ignore
					<p key={product.id} style={{ margin: '6px 0' }}>
						{/* @ts-ignore */}
						{product.id} - {product.title}
					</p>
				)
			})}
		</div>
	)
}
