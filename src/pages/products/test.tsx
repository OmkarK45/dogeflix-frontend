import React from 'react'
import useSWRInfinite from 'swr/infinite'
import { Button } from '~/components/ui/Button'
import { fetcher } from '~/lib/fetchJson'

const PAGE_SIZE = 6

export default function App() {
	const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
		(index) => `/api/products/all?page=${index + 1}&limit=${PAGE_SIZE}`,
		fetcher
	)

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
