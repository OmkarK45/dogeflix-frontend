import { getISODay } from 'date-fns'
import router from 'next/router'
import { useState } from 'react'
import toast from 'react-hot-toast'
import useSWR from 'swr'
import { fetcher } from '~/lib/fetchJson'
import { calculateOriginalPrice } from '~/lib/price'
import { CartItems } from '~/types'
import { Button } from '../ui/Button'
import { ErrorFallback } from '../ui/Fallbacks/ErrorFallback'
import { LoadingFallback } from '../ui/Fallbacks/LoadingFallback'
import { Heading } from '../ui/Heading'
import { Link } from '../ui/Link'
import { CartItem } from './CartItem'

export function Cart({ cartItems }: { cartItems: CartItems }) {
	const [quantity, setQuantity] = useState(1)

	const { data: cartItemsData, error } = useSWR<CartItems>(
		'/api/cart',
		fetcher,
		{
			fallbackData: cartItems,
		}
	)

	if (!cartItemsData) {
		return <LoadingFallback />
	}

	function getSubtotal(cartItems: CartItems) {
		return cartItems.reduce((total, item) => {
			return (
				total +
				parseFloat(
					calculateOriginalPrice(item.product.price, item.product.discount)
				) *
					quantity
			)
		}, 0)
	}

	return (
		<div className="bg-white min-h-screen">
			<div className="max-w-2xl mx-auto  px-4 sm:px-6 lg:max-w-7xl lg:px-8">
				<div className="sticky top-0 py-6 min-w-full bg-white z-10">
					<Heading size="h3">Shopping Cart ({cartItemsData.length})</Heading>
				</div>
				<form className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
					<section aria-labelledby="cart-heading" className="lg:col-span-7">
						<ul className="border-t border-b border-gray-200 divide-y divide-gray-200">
							{cartItemsData.length === 0 && (
								<ErrorFallback
									noAction
									buttonText="Take me to shop."
									message="Your cart is empty!"
								/>
							)}
							{cartItemsData.map((product, productIdx) => (
								<CartItem
									item={product}
									key={productIdx}
									productIdx={productIdx}
									setQuantity={setQuantity}
								/>
							))}
						</ul>
					</section>

					{/* Order summary */}
					<section className="mt-16 sticky top-20 w-full bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5">
						<h2
							id="summary-heading"
							className="text-lg font-medium text-gray-900"
						>
							Order summary
						</h2>

						<dl className="mt-6 space-y-4">
							<div className="flex items-center justify-between">
								<dt className="text-sm text-gray-600">Subtotal</dt>
								<dd className="text-sm font-medium text-gray-900">
									${getSubtotal(cartItemsData).toFixed(2)}
								</dd>
							</div>
							<div className="border-t border-gray-200 pt-4 flex items-center justify-between">
								<dt className="flex items-center text-sm text-gray-600">
									<span>Shipping estimate</span>
								</dt>
								<dd className="text-sm font-medium text-gray-900">FREE</dd>
							</div>
							<div className="border-t border-gray-200 pt-4 flex items-center justify-between">
								<dt className="flex text-sm text-gray-600">
									<span>Tax estimate</span>
								</dt>
								<dd className="text-sm font-medium text-gray-900">$0.00</dd>
							</div>
							<div className="border-t border-gray-200 pt-4 flex items-center justify-between">
								<dt className="text-base font-medium text-gray-900">
									Order total
								</dt>
								<dd className="text-base font-medium text-gray-900">
									${getSubtotal(cartItemsData).toFixed(2)}
								</dd>
							</div>
						</dl>

						<div className="mt-6">
							<Button
								onClick={(e) => {
									e.preventDefault()
									toast.success('Thank you for shopping with us :) ')
								}}
								size="xl"
								fullWidth
							>
								Checkout
							</Button>
						</div>
						<div className="flex items-center justify-center mt-6">
							<Link href="/products">Continue Shopping</Link>
						</div>
					</section>
				</form>
			</div>
		</div>
	)
}
