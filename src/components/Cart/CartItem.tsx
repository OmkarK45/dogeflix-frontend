import { CheckIcon, ClockIcon, XIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import { calculateOriginalPrice } from '~/lib/price'
import { CartItem } from '~/types'
import { Link } from '../ui/Link'
import { RupeeIcon } from '../ui/RupeeIcon'
import { RemoveFromCartModal } from './RemoveFromCartModal'

export function CartItem({
	item,
	productIdx,
	setQuantity,
}: {
	item: CartItem
	productIdx: number
	setQuantity: (quantity: number) => void
}) {
	const [modalOpen, setModalOpen] = useState(false)

	const originalPriceOfProduct = calculateOriginalPrice(
		item.product.price,
		item.product.discount
	)

	return (
		<li key={item.id} className="flex py-6 sm:py-10">
			<div className="flex-shrink-0">
				<img
					src={item.product.images[0]}
					alt="TODO"
					className="w-24 h-24 rounded-md object-center object-cover sm:w-48 sm:h-48"
				/>
			</div>

			<div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
				<div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
					<div>
						<div className="flex justify-between">
							<h3 className="text-sm">
								<Link
									href={`/product/${item.product_id}/${item.product.slug}`}
									className="font-medium no-underline text-gray-700 hover:text-gray-800"
								>
									{item.product.title}
								</Link>
							</h3>
						</div>
						<div className="mt-1 flex text-sm">
							{/* TODO : this color is not something which is chosen by user. I need to save color and size information in DB from cart item */}
							<p className="text-gray-500 capitalize">
								{item.color ? item.color : '--'}
							</p>
							{item.product.sizes[0] ? (
								<p className="ml-4 pl-4 border-l border-gray-200 text-gray-500">
									{item.size ? item.size : '-'}
								</p>
							) : null}
						</div>
						<p className="mt-1 text-sm font-medium text-gray-900 flex items-center">
							<RupeeIcon className="w-5 h-5" /> {originalPriceOfProduct}
						</p>
					</div>

					<div className="mt-4 sm:mt-0 sm:pr-9">
						<label htmlFor={`quantity-${productIdx}`} className="sr-only">
							Quantity, {item.quantity}
						</label>
						<select
							id={`quantity-${productIdx}`}
							name={`quantity-${productIdx}`}
							defaultValue={item.quantity}
							onChange={(e) => setQuantity(parseInt(e.target.value))}
							className="max-w-full rounded-md border border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
						>
							<option value={1}>1</option>
							<option value={2}>2</option>
							<option value={3}>3</option>
							<option value={4}>4</option>
							<option value={5}>5</option>
							<option value={6}>6</option>
							<option value={7}>7</option>
							<option value={8}>8</option>
						</select>

						<RemoveFromCartModal
							item={item}
							open={modalOpen}
							setOpen={setModalOpen}
						/>

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

				<p className="mt-4 flex text-sm text-gray-700 space-x-2">
					{item.product.stock > 0 ? (
						<CheckIcon
							className="flex-shrink-0 h-5 w-5 text-green-500"
							aria-hidden="true"
						/>
					) : (
						<ClockIcon
							className="flex-shrink-0 h-5 w-5 text-gray-300"
							aria-hidden="true"
						/>
					)}

					<span>{item.product.stock > 0 ?? 'In stock'}</span>
				</p>
			</div>
		</li>
	)
}
