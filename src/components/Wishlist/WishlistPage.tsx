import router from 'next/router'
import useSWR from 'swr'
import { fetcher } from '~/lib/fetchJson'
import { WishlistItem as WishlistItemType } from '~/types'
import { ErrorFallback } from '../ui/Fallbacks/ErrorFallback'
import { Heading } from '../ui/Heading'
import { WishlistItem } from './WishlistItem'

export function Wishlist({
	wishlistItems,
}: {
	wishlistItems: WishlistItemType[]
}) {
	// TODO: replace this with useSWR Infinite
	const { data, error } = useSWR<WishlistItemType[]>('/api/wishlist', fetcher, {
		fallbackData: wishlistItems,
	})
	return (
		<div className="bg-white min-h-screen">
			<div className="max-w-2xl mx-auto  px-4 sm:px-6 lg:max-w-7xl lg:px-8">
				<div className="sticky top-0 py-6 min-w-full bg-white z-10">
					<Heading size="h3">Your wishlist</Heading>
				</div>
				<form className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
					<section aria-labelledby="cart-heading" className="lg:col-span-12">
						<ul className="border-t border-b border-gray-200 divide-y divide-gray-200">
							{wishlistItems.length === 0 && (
								<ErrorFallback
									action={() =>
										router.push('/products', undefined, { shallow: true })
									}
									buttonText="Take me to shop."
									message="Your wishlist is empty!"
								/>
							)}
							{wishlistItems.map((product, productIdx) => (
								<WishlistItem
									item={product}
									key={productIdx}
									productIdx={productIdx}
								/>
							))}
						</ul>
					</section>
				</form>
			</div>
		</div>
	)
}
