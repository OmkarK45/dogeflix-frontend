import { ProductType } from '~/types'
import { Link } from '../ui/Link'

export function ProductCard({
	product,
}: {
	product: Pick<
		ProductType,
		'images' | 'id' | 'title' | 'price' | 'slug' | 'brand'
	>
}) {
	return (
		<Link
			href={`/product/${product.brand}/${product.id}`}
			key={product.id}
			className="group relative no-underline "
		>
			<div className="w-full h-56 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75 lg:h-72 xl:h-80">
				<img
					src={product.images[1]}
					alt={`TODO`}
					className="w-full h-full object-center object-cover"
				/>
			</div>
			<h3 className="mt-4 text-sm text-gray-700">
				<span className="absolute inset-0" />
				{product.title}
			</h3>
			<p className="mt-1 text-sm font-medium text-gray-900">{product.price}</p>
		</Link>
	)
}
