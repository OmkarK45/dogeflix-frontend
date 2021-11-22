import useSWRInfinite from 'swr/infinite'
import { useRouter } from 'next/router'
import { Heading } from '../ui/Heading'
import { ProductType } from '~/types'
import { fetcher, mutationFn } from '~/lib/fetchJson'
import { IndeterminateProgress } from '../ui/Progress'
import { ProductCard } from '../Product/ProductCard'
import { Button } from '../ui/Button'
import { Spinner } from '../ui/Spinner'
import { ErrorFallback } from '../ui/Fallbacks/ErrorFallback'

const PAGE_SIZE = 10

export function SearchResultProducts() {
	const router = useRouter()
	const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite<
		Array<ProductType>
	>(
		(index) => `/api/products/search?page=${index + 1}&limit=${PAGE_SIZE}`,
		async (url: string) => {
			const res = await mutationFn(url, {
				keyword: 'product',
			})
			return res.data
		}
	)
	console.log(data?.flat())
	const isLoadingInitialData = !data && !error

	if (isLoadingInitialData) return <IndeterminateProgress />

	const flattenedData = data?.flat() as ProductType[]

	const products: ProductType[] = flattenedData
		? // @ts-ignore - TS doesn't know that `flat()` returns an array
		  [].concat(...flattenedData)
		: ([] as ProductType[])

	const isLoadingMore =
		isLoadingInitialData ||
		(size > 0 && products && typeof products[size - 1] === 'undefined')

	const isEmpty = data?.[0]?.length === 0

	const isReachingEnd =
		isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE)

	return (
		<main className="mx-auto px-4 sm:px-6 lg:px-8 bg-white min-h-screen">
			<div className="w-full mx-auto max-w-5xl bg-white z-10 flex items-center justify-between sticky top-0 pt-4 pb-6 border-b border-gray-200">
				<Heading size="h5">
					Search results for &quot;{router.query.query}&quot;
				</Heading>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-3 mx-auto max-w-5xl gap-x-8 gap-y-10 ">
				<div className="lg:col-span-3 mt-4 md:mt-0">
					<div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-10 lg:gap-x-8">
						{products.length === 0 && (
							<div className="mx-auto col-span-full">
								<ErrorFallback
									message="Hmm. We ran out of products for that one."
									noAction
								/>
							</div>
						)}
						{products.map((product, idx) => (
							<ProductCard product={product} key={idx} />
						))}
					</div>
					<div className="flex items-center justify-center py-6">
						<Button
							size="xl"
							variant="white"
							disabled={isLoadingMore || isReachingEnd}
							onClick={() => setSize(size + 1)}
						>
							{isLoadingMore ? (
								<span className="flex items-center space-x-2 justify-center">
									<p>Loading</p> <Spinner />
								</span>
							) : isReachingEnd ? (
								<span>All caught up!</span>
							) : (
								<span className="flex items-center space-x-2 justify-center">
									Load more
								</span>
							)}
						</Button>
					</div>
				</div>
			</div>
		</main>
	)
}
