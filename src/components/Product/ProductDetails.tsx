import useSWR, { useSWRConfig } from 'swr'
import { useRouter } from 'next/router'
import {
	ArrowLeftIcon,
	HeartIcon,
	LightningBoltIcon,
	ShoppingCartIcon,
} from '@heroicons/react/solid'
import toast from 'react-hot-toast'
import { CheckCircleIcon } from '@heroicons/react/outline'
import clsx from 'clsx'

import { calculateOriginalPrice } from '~/lib/price'
import { CartItems, ProductType } from '~/types'
import { fetcher, mutationFn } from '~/lib/fetchJson'
import useUser from '~/lib/useUser'

import { ShareSection } from '../Common/ShareSection'
import { ProductImagesGallery } from './ProductImagesGallery'
import { ProductSizeAndColor } from './ProductSizeAndColor'
import { ProductReviews, RatingStars } from './ProductReviews'

import { Button } from '../ui/Button'
import { Link } from '../ui/Link'
import { RupeeIcon } from '../ui/RupeeIcon'
import { Badge } from '../ui/Badge'

export function ProductDetails({ product }: { product: ProductType }) {
	const { user } = useUser({
		redirectIfFound: false,
	})

	const router = useRouter()

	const { data } = useSWR<ProductType>(
		`/api/products/${router.query.id}`,
		fetcher,
		{
			fallbackData: product,
		}
	)

	const { data: cartData, mutate: cartMutate } = useSWR<CartItems>(
		'/api/cart',
		fetcher
	)

	if (!data) return null

	if (!cartData) return null

	const alreadyInCart =
		cartData?.length > 0 &&
		cartData.find((item) => item.product_id === router.query.id)

	async function handleAddToCart() {
		if (alreadyInCart) {
			return toast('Product is already in cart!')
		}

		await cartMutate(
			[
				...(cartData || ([] as CartItems)),
				{
					id: router.query.id as string,
					product_id: router.query.id as string,
					product: data!,
					quantity: 1,
					user_id: user?.data?.user?.id!,
				},
			],
			false
		)

		toast.success('Product added to cart!')

		await mutationFn('/api/cart/add', {
			productId: router.query.id as string,
			quantity: 1,
		})
	}

	return (
		<div className="bg-white">
			<div className="mx-auto  px-4 py-7 sm:px-6 lg:max-w-7xl lg:px-8">
				<Button variant="dark" href="/products" className="mb-2">
					<ArrowLeftIcon className="w-4 h-4 mr-2" /> Back to store
				</Button>
				{/* Product */}
				<div className="lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
					{/* Product image */}
					<div className="lg:row-end-1 lg:col-span-4">
						<ProductImagesGallery images={data.images} />
					</div>

					{/* Product details */}
					<div className="max-w-2xl mx-auto mt-14 sm:mt-16 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-3">
						<div className="flex flex-col">
							<div className="mt-4">
								<Badge variant="orange" className="mb-2 relative shine">
									{data.brand}
								</Badge>
								<div className="flex justify-between items-center">
									<h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
										{data.title}{' '}
									</h1>
									<button className="bg-red-100 p-2 rounded-full outline-none transition-transform duration-300 hover:scale-150 active:scale-95">
										<HeartIcon className="w-5 h-5 text-red-500" />
									</button>
								</div>
								<h2 id="information-heading" className="sr-only">
									Product information
								</h2>
							</div>

							<div className="flex items-center justify-between mt-4">
								<div className="flex mr-2 items-center">
									<RupeeIcon className="text-gray-900 w-8 h-8 -ml-1" />
									<p className="text-3xl text-gray-900 ">
										{calculateOriginalPrice(data.price, data.discount)}
									</p>
									<del className="text-lg ml-2 text-gray-500">{data.price}</del>
									<p className="ml-2 text-red-700 font-bold">
										{data.discount}% Off
									</p>
								</div>
								<div>
									<div className="flex items-center space-x-2">
										<p>{data.rating}</p>
										<RatingStars averageRating={data.rating} />{' '}
									</div>
									<div className="flex">
										<Link
											href="#reviews"
											className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
										>
											See all {data._count.reviews} reviews
										</Link>
									</div>
								</div>
							</div>
						</div>

						<p className="text-gray-500 mt-6">{data.description}</p>
						<div className="mt-4">
							<ProductSizeAndColor colors={data.colors} sizes={data.sizes} />
						</div>
						<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
							<Button type="button" fullWidth size="xl">
								<LightningBoltIcon className="w-5 h-5 mr-2" /> Buy now{' '}
								{data.price}
							</Button>
							<Button
								onClick={handleAddToCart}
								type="button"
								variant="dark"
								size="xl"
								className={clsx(alreadyInCart && 'cursor-newtab')}
								href={alreadyInCart ? '/cart' : '#'}
							>
								{alreadyInCart ? (
									<>
										<CheckCircleIcon className="w-5 h-5 text-gray-500 mr-2" />
										Added to Cart
									</>
								) : (
									<>
										<ShoppingCartIcon className="w-5 h-5 text-gray-500 mr-2" />
										Add to cart
									</>
								)}
							</Button>
						</div>

						<div className="border-t border-gray-200 mt-10 pt-10">
							<h3 className="text-sm font-medium text-gray-900">Highlights</h3>
							<div className="mt-4 prose prose-sm text-gray-500">
								<ul role="list">
									{data.features.map((highlight) => (
										<li key={highlight}>{highlight}</li>
									))}
								</ul>
							</div>
						</div>

						<ShareSection />
					</div>

					<ProductReviews
						reviews={data.reviews}
						totalReviews={data._count.reviews}
					/>
				</div>
			</div>
		</div>
	)
}
