import { CheckIcon, ClockIcon, XIcon } from '@heroicons/react/solid'

interface CartProduct {
	id: number
	name: string
	price: string
	imageSrc: string
	imageAlt: string
	href: string
	size?: string
	color: string
	inStock: boolean
}

export function WishlistItem({
	product,
	productIdx,
}: {
	product: CartProduct
	productIdx: number
}) {
	return (
		<li key={product.id} className="flex py-6 sm:py-10">
			<div className="flex-shrink-0">
				<img
					src={product.imageSrc}
					alt={product.imageAlt}
					className="w-24 h-24 rounded-md object-center object-cover sm:w-48 sm:h-48"
				/>
			</div>

			<div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
				<div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
					<div>
						<div className="flex justify-between">
							<h3 className="text-sm">
								<a
									href={product.href}
									className="font-medium text-gray-700 hover:text-gray-800"
								>
									{product.name}
								</a>
							</h3>
						</div>
						<div className="mt-1 flex text-sm">
							<p className="text-gray-500">{product.color}</p>
							{product.size ? (
								<p className="ml-4 pl-4 border-l border-gray-200 text-gray-500">
									{product.size}
								</p>
							) : null}
						</div>
						<p className="mt-1 text-sm font-medium text-gray-900">
							{product.price}
						</p>
					</div>

					<div className="mt-4 sm:mt-0 sm:pr-9">
						<div className="absolute top-0 right-0">
							<button
								type="button"
								className="-m-2 p-2 inline-flex text-gray-400 hover:text-gray-500"
							>
								<span className="sr-only">Remove</span>
								<XIcon className="h-5 w-5" aria-hidden="true" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</li>
	)
}
