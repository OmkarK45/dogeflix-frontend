import { products } from '../Cart/CartPage'
import { Heading } from '../ui/Heading'
import { WishlistItem } from './WishlistItem'

export function Wishlist() {
	return (
		<div className="bg-white">
			<div className="max-w-2xl mx-auto  px-4 sm:px-6 lg:max-w-7xl lg:px-8">
				<div className="sticky top-0 py-6 min-w-full bg-white z-10">
					<Heading size="h3">Your wishlist</Heading>
				</div>
				<form className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
					<section aria-labelledby="cart-heading" className="lg:col-span-12">
						<ul className="border-t border-b border-gray-200 divide-y divide-gray-200">
							{products.map((product, productIdx) => (
								<WishlistItem
									product={product}
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
