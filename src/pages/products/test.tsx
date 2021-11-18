import React from 'react'
import useSWRInfinite from 'swr/infinite'
import { fetcher } from '~/lib/fetchJson'

const PAGE_SIZE = 6

export default function App() {
	const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
		(index, prevData) =>
			`/api/products/all?take=${PAGE_SIZE}&skip=${
				prevData ? prevData.length : 0
			}`,
		fetcher
	)

	const issues = data ? [].concat(...data) : []

	const isLoadingInitialData = !data && !error

	const isLoadingMore =
		isLoadingInitialData ||
		(size > 0 && data && typeof data[size - 1] === 'undefined')

	const isEmpty = data?.[0]?.length === 0

	const isReachingEnd =
		isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE)

	const isRefreshing = isValidating && data && data.length === size

	return (
		<div style={{ fontFamily: 'sans-serif' }}>
			<button
				onClick={() => {
					setSize(1)
				}}
			>
				load issues
			</button>
			<p>
				showing {size} page(s) of {isLoadingMore ? '...' : issues.length}{' '}
				issue(s){' '}
				<button
					disabled={isLoadingMore || isReachingEnd}
					onClick={() => setSize(size + 1)}
				>
					{isLoadingMore
						? 'loading...'
						: isReachingEnd
						? 'no more issues'
						: 'load more'}
				</button>
				<button disabled={isRefreshing} onClick={() => mutate()}>
					{isRefreshing ? 'refreshing...' : 'refresh'}
				</button>
				<button disabled={!size} onClick={() => setSize(0)}>
					clear
				</button>
			</p>
			{isEmpty ? <p>Yay, no issues found.</p> : null}
			{issues.map((issue) => {
				return (
					<p key={issue.id} style={{ margin: '6px 0' }}>
						- {JSON.stringify(issue.title)}
					</p>
				)
			})}
		</div>
	)
}
