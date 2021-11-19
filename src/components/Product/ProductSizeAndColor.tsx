import { RadioGroup } from '@headlessui/react'
import clsx from 'clsx'
import { useState } from 'react'
import { ProductType } from '~/types'

export function ProductSizeAndColor({
	sizes,
	colors,
}: Pick<ProductType, 'sizes' | 'colors'>) {
	const [selectedColor, setSelectedColor] = useState(colors[0])
	const [selectedSize, setSelectedSize] = useState(sizes[0])

	return (
		<form>
			{/* Color picker */}
			<div>
				<h2 className="text-sm font-medium text-gray-900">Color</h2>

				<RadioGroup
					value={selectedColor}
					onChange={setSelectedColor}
					className="mt-2"
				>
					<RadioGroup.Label className="sr-only">
						Choose a color
					</RadioGroup.Label>
					<div className="flex items-center space-x-3">
						{colors.map((color) => (
							<RadioGroup.Option
								key={color}
								value={color}
								className={({ active, checked }) =>
									clsx(
										active && checked ? 'ring ring-offset-1' : '',
										!active && checked ? 'ring-2' : '',
										'-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
									)
								}
							>
								<RadioGroup.Label as="p" className="sr-only">
									{color}
								</RadioGroup.Label>
								<span
									aria-hidden="true"
									className={clsx(
										// color.bgColor,
										`bg-[${color}]-500`,
										'h-8 w-8 border border-black border-opacity-10 rounded-full'
									)}
								/>
							</RadioGroup.Option>
						))}
					</div>
				</RadioGroup>
			</div>

			{/* Size picker */}
			<div className="mt-8">
				<div className="flex items-center justify-between">
					<h2 className="text-sm font-medium text-gray-900">Sizes available</h2>
				</div>

				<RadioGroup
					value={selectedSize}
					onChange={setSelectedSize}
					className="mt-2"
				>
					<RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
					<div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
						{sizes.map((size) => (
							<RadioGroup.Option
								key={size}
								value={size}
								className={({ active, checked }) =>
									clsx(
										'cursor-pointer focus:outline-none',

										active ? 'ring-2 ring-offset-2 ring-brand-500' : '',
										checked
											? 'bg-brand-600 border-transparent text-white hover:bg-brand-700'
											: 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50',
										'border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1'
									)
								}
								disabled={!size}
							>
								<RadioGroup.Label as="p">{size}</RadioGroup.Label>
							</RadioGroup.Option>
						))}
					</div>
				</RadioGroup>
			</div>
		</form>
	)
}
