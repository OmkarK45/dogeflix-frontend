import { CheckIcon, ClockIcon, XIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import { calculateOriginalPrice } from '~/lib/price'
import { WishlistItem } from '~/types'
import { Link } from '../ui/Link'
import { RupeeIcon } from '../ui/RupeeIcon'
import { RemoveFromWishlistModal } from './RemoveFromWishlistModal'

export function WishlistItem({
	item,
	productIdx,
}: {
	item: WishlistItem
	productIdx: number
}) {
	const [modalOpen, setModalOpen] = useState<boolean>(false)

	const originalPriceOfProduct = calculateOriginalPrice(
		item.product.price,
		item.product.discount
	)

	return (
		<li key={item.product_id} className="flex py-6 sm:py-10">
			<div className="flex-shrink-0">
				<Link
					rel="noreferrer noopener"
					target="_blank"
					href={`/product/${item.product.id}/${item.product.slug}`}
					className="font-medium text-gray-700 hover:text-gray-800 no-underline"
				>
					<img
						src={item.product.images[0]}
						alt={'TODO'}
						className="w-24 h-24 rounded-md object-center object-cover sm:w-48 sm:h-48"
					/>
				</Link>
			</div>

			<div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
				<div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
					<div>
						<div className="flex justify-between">
							<Link
								rel="noreferrer noopener"
								target="_blank"
								href={`/product/${item.product.id}/${item.product.slug}`}
								className="font-medium text-gray-700 hover:text-gray-800 no-underline"
							>
								<h3 className="text-base">{item.product.title}</h3>
							</Link>
							<h3 className="text-sm">
								<span className="flex items-center">
									<RupeeIcon className="w-5 h-5" />
									{originalPriceOfProduct}
								</span>
							</h3>
						</div>
						<div className="mt-1 flex text-sm">
							<p className="text-gray-500 capitalize">
								{item.color ? item.color : '-'}
							</p>

							<p className="ml-4 pl-4 border-l border-gray-200 text-gray-500">
								{item.size ? item.size : '-'}
							</p>
						</div>
						<p className="mt-1 text-sm font-medium text-gray-900"></p>
					</div>
					<RemoveFromWishlistModal
						item={item}
						open={modalOpen}
						setOpen={setModalOpen}
					/>
					<div className="mt-4 sm:mt-0 sm:pr-9">
						<div className="absolute top-0 right-0">
							<button
								onClick={() => setModalOpen(true)}
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
