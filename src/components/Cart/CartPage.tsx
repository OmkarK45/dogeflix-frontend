import { Button } from '../ui/Button'
import { Heading } from '../ui/Heading'
import { Link } from '../ui/Link'
import { CartItem } from './CartItem'

export const products = [
	{
		id: 1,
		name: 'Basic Tee',
		href: '#',
		price: '$32.00',
		color: 'Sienna',
		inStock: true,
		size: 'Large',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg',
		imageAlt: "Front of men's Basic Tee in sienna.",
	},
	{
		id: 2,
		name: 'Basic Tee',
		href: '#',
		price: '$32.00',
		color: 'Black',
		inStock: false,
		leadTime: '3–4 weeks',
		size: 'Large',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-02.jpg',
		imageAlt: "Front of men's Basic Tee in black.",
	},
	{
		id: 3,
		name: 'Nomad Tumbler',
		href: '#',
		price: '$35.00',
		color: 'White',
		inStock: true,
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-03.jpg',
		imageAlt: 'Insulated bottle with white base and black snap lid.',
	},
	{
		id: 4,
		name: 'Nomad Tumbler',
		href: '#',
		price: '$35.00',
		color: 'White',
		inStock: true,
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-03.jpg',
		imageAlt: 'Insulated bottle with white base and black snap lid.',
	},
	{
		id: 5,
		name: 'Nomad Tumbler',
		href: '#',
		price: '$35.00',
		color: 'White',
		inStock: true,
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-03.jpg',
		imageAlt: 'Insulated bottle with white base and black snap lid.',
	},
	{
		id: 6,
		name: 'Nomad Tumbler',
		href: '#',
		price: '$35.00',
		color: 'White',
		inStock: true,
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-03.jpg',
		imageAlt: 'Insulated bottle with white base and black snap lid.',
	},
	{
		id: 7,
		name: 'Nomad Tumbler',
		href: '#',
		price: '$35.00',
		color: 'White',
		inStock: true,
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-03.jpg',
		imageAlt: 'Insulated bottle with white base and black snap lid.',
	},
]

export function Cart() {
	return (
		<div className="bg-white">
			<div className="max-w-2xl mx-auto  px-4 sm:px-6 lg:max-w-7xl lg:px-8">
				<div className="sticky top-0 py-6 min-w-full bg-white z-10">
					<Heading size="h3">Shopping Cart</Heading>
				</div>
				<form className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
					<section aria-labelledby="cart-heading" className="lg:col-span-7">
						<ul className="border-t border-b border-gray-200 divide-y divide-gray-200">
							{products.map((product, productIdx) => (
								<CartItem
									product={product}
									key={productIdx}
									productIdx={productIdx}
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
								<dd className="text-sm font-medium text-gray-900">$99.00</dd>
							</div>
							<div className="border-t border-gray-200 pt-4 flex items-center justify-between">
								<dt className="flex items-center text-sm text-gray-600">
									<span>Shipping estimate</span>
								</dt>
								<dd className="text-sm font-medium text-gray-900">$5.00</dd>
							</div>
							<div className="border-t border-gray-200 pt-4 flex items-center justify-between">
								<dt className="flex text-sm text-gray-600">
									<span>Tax estimate</span>
								</dt>
								<dd className="text-sm font-medium text-gray-900">$8.32</dd>
							</div>
							<div className="border-t border-gray-200 pt-4 flex items-center justify-between">
								<dt className="text-base font-medium text-gray-900">
									Order total
								</dt>
								<dd className="text-base font-medium text-gray-900">$112.32</dd>
							</div>
						</dl>

						<div className="mt-6">
							<Button type="submit" size="xl" fullWidth>
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
