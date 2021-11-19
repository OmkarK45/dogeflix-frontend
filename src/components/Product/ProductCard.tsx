import { StarIcon } from '@heroicons/react/solid'
import { calculateOriginalPrice } from '~/lib/price'
import { ProductType } from '~/types'

import { Badge } from '../ui/Badge'
import { Link } from '../ui/Link'
import { RupeeIcon } from '../ui/RupeeIcon'

import { RatingStars } from './ProductReviews'

export function ProductCard({
	product,
}: {
	product: Pick<
		ProductType,
		| 'images'
		| 'id'
		| 'title'
		| 'price'
		| 'slug'
		| 'brand'
		| 'rating'
		| 'reviews'
		| '_count'
		| 'discount'
	>
}) {
	return (
		<Link
			href={`/product/${product.brand}/${product.id}`}
			key={product.id}
			className="group relative no-underline "
		>
			<div className="w-full h-56 bg-gray-200 rounded-md overflow-hidden lg:h-72 xl:h-80">
				<img
					src={product.images[1]}
					alt={`TODO`}
					className="w-full h-full object-center object-cover group-hover:scale-125 duration-500"
				/>
			</div>
			<h3 className="mt-4 text-sm text-gray-700">
				<span className="absolute inset-0" />
				{product.title}
			</h3>

			<div className="mt-1 flex flex-col ">
				<div className="flex space-x-1">
					<p className="text-gray-700 text-sm">{product.rating}</p>
					<StarIcon
						className={'text-yellow-400 h-5 w-5 flex-shrink-0'}
						aria-hidden="true"
					/>
					<div className="hidden md:block">
						<RatingStars averageRating={product.rating} />
					</div>
				</div>

				<p className="text-sm text-gray-500">
					({product._count.reviews}{' '}
					{product._count.reviews === 1 ? 'review' : 'reviews'})
				</p>
			</div>

			<span className="mt-1 flex items-center md:space-x-2 text-xl font-medium text-gray-900">
				<span className="flex items-center">
					<RupeeIcon className="text-gray-900 w-6 h-6" />
					<p>{calculateOriginalPrice(product.price, product.discount)}</p>
					<del className="text-sm ml-2 text-gray-500">{product.price}</del>
				</span>

				<Badge variant="orange" size="xs" className="hidden md:block">
					{product.discount}% Off
				</Badge>
			</span>
			<Badge size="xs" variant="orange" className="block md:hidden text-xs">
				{product.discount}% Off
			</Badge>
		</Link>
	)
}
