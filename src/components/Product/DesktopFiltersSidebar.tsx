import { Disclosure } from '@headlessui/react'
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'

// 'red', 'blue', 'green', 'yellow', 'black', 'white'
export const filters = [
	{
		id: 'color',
		name: 'Color',
		options: [
			{ value: 'red', label: 'Red', checked: false },
			{ value: 'blue', label: 'Blue', checked: true },
			{ value: 'green', label: 'Green', checked: false },
			{ value: 'yellow', label: 'Yellow', checked: false },
			{ value: 'white', label: 'White', checked: false },
			{ value: 'black', label: 'Black', checked: false },
		],
	},
	{
		id: 'category',
		name: 'Category [TODO]',
		options: [
			{ value: 'new-arrivals', label: 'New Arrivals', checked: false },
			{ value: 'sale', label: 'Sale', checked: false },
			{ value: 'travel', label: 'Travel', checked: true },
			{ value: 'organization', label: 'Organization', checked: false },
			{ value: 'accessories', label: 'Accessories', checked: false },
		],
	},
	{
		// ['S', 'M', 'L', 'XL', 'XXL']
		id: 'size',
		name: 'Size',
		options: [
			{ value: 'S', label: 'Small', checked: false },
			{ value: 'M', label: 'Medium', checked: false },
			{ value: 'L', label: 'Large', checked: false },
			{ value: 'XL', label: 'Extra Large', checked: false },
			{ value: 'XXL', label: 'Double Extra Large', checked: false },
		],
	},
]

interface FilterProps {
	sizeFilter: Array<string>
	colorFilter: Array<string>
	categoryFilter: Array<string>
	setSizeFilter: (sizeFilter: Array<string>) => void
	setColorFilter: (colorFilter: Array<string>) => void
	setCategoryFilter: (categoryFilter: Array<string>) => void
}

export function DesktopFiltersSidebar({
	sizeFilter,
	colorFilter,
	categoryFilter,
	setSizeFilter,
	setColorFilter,
	setCategoryFilter,
}: FilterProps) {
	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		const { name, value, checked } = e.target
		if (name === 'size') {
			if (checked) {
				setSizeFilter([...sizeFilter, value])
			} else {
				setSizeFilter(sizeFilter.filter((item) => item !== value))
			}
		} else if (name === 'color') {
			if (checked) {
				setColorFilter([...colorFilter, value])
			} else {
				setColorFilter(colorFilter.filter((item) => item !== value))
			}
		} else if (name === 'category') {
			if (checked) {
				setCategoryFilter([...categoryFilter, value])
			} else {
				setCategoryFilter(categoryFilter.filter((item) => item !== value))
			}
		}
	}
	return (
		<form className="hidden lg:block sticky top-30">
			{filters.map((section) => (
				<Disclosure
					as="div"
					key={section.id}
					className="border-b border-gray-200 py-6"
				>
					{({ open }) => (
						<>
							<h3 className="-my-3 flow-root">
								<Disclosure.Button className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
									<span className="font-medium text-gray-900">
										{section.name}
									</span>
									<span className="ml-6 flex items-center">
										{open ? (
											<MinusSmIcon className="h-5 w-5" aria-hidden="true" />
										) : (
											<PlusSmIcon className="h-5 w-5" aria-hidden="true" />
										)}
									</span>
								</Disclosure.Button>
							</h3>
							<Disclosure.Panel className="pt-6">
								<div className="space-y-4">
									{section.options.map((option, optionIdx) => (
										<div key={option.value} className="flex items-center">
											<input
												id={`filter-${section.id}-${optionIdx}`}
												name={`${section.id}`}
												defaultValue={option.value}
												type="checkbox"
												onChange={handleChange}
												className="h-4 w-4 border-gray-300 rounded text-brand-600 focus:ring-brand-500"
											/>
											<label
												htmlFor={`filter-${section.id}-${optionIdx}`}
												className="ml-3 text-sm text-gray-600"
											>
												{option.label}
											</label>
										</div>
									))}
								</div>
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
			))}
		</form>
	)
}
