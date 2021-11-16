interface Product {
	id: number
	name: string
	price: string
	imageSrc: string
	imageAlt: string
	color: string
	href: string
}
export function ProductCard({ product }: { product: Product }) {
	return (
		<div key={product.id} className="group relative">
			<div className="w-full h-56 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75 lg:h-72 xl:h-80">
				<img
					src={product.imageSrc}
					alt={product.imageAlt}
					className="w-full h-full object-center object-cover"
				/>
			</div>
			<h3 className="mt-4 text-sm text-gray-700">
				<a href={product.href}>
					<span className="absolute inset-0" />
					{product.name}
				</a>
			</h3>
			<p className="mt-1 text-sm text-gray-500">{product.color}</p>
			<p className="mt-1 text-sm font-medium text-gray-900">{product.price}</p>
		</div>
	)
}
