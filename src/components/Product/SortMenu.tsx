import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import clsx from 'clsx'
import { Fragment } from 'react'

export type SortTypes =
	| 'most_popular'
	| 'newest'
	| 'price_low_to_high'
	| 'price_high_to_low'
	| 'best_rating'

export const sortOptions = [
	{ name: 'Most Popular', value: 'most_popular', current: true },
	{ name: 'Best Rating', value: 'best_rating', current: false },
	{ name: 'Newest', value: 'newest', current: false },
	{ name: 'Price: Low to High', value: 'price_low_to_high', current: false },
	{ name: 'Price: High to Low', value: 'price_high_to_low', current: false },
] as { name: string; value: SortTypes; current: boolean }[]

export function SortMenu({
	sortValue,
	setSortValue,
}: {
	sortValue: string
	setSortValue: (value: SortTypes) => void
}) {
	function setSortOption(value: SortTypes) {
		setSortValue(value)
	}
	return (
		<Menu as="div" className=" relative inline-block text-left">
			<div>
				<Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
					{sortValue
						? sortOptions.find((option) => option.value === sortValue)?.name
						: 'Sort'}
					<ChevronDownIcon
						className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
						aria-hidden="true"
					/>
				</Menu.Button>
			</div>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div className="py-1">
						{sortOptions.map((option) => (
							<Menu.Item key={option.name}>
								{({ active }) => (
									<button
										onClick={() => setSortOption(option.value)}
										className={clsx(
											sortValue === option.value
												? 'font-medium text-gray-900'
												: 'text-gray-500',
											active ? 'bg-gray-100' : '',
											'block px-4 py-2 text-sm w-full text-left'
										)}
									>
										{option.name}
									</button>
								)}
							</Menu.Item>
						))}
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	)
}
