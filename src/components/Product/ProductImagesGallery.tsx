import { Tab } from '@headlessui/react'
import clsx from 'clsx'

export function ProductImagesGallery({ images }: { images: string[] }) {
	return (
		<Tab.Group as="div" className="flex flex-col-reverse">
			{/* Image selector */}
			<div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
				<Tab.List className="grid grid-cols-4 gap-6">
					{images.map((image, idx) => (
						<Tab
							key={idx}
							className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none "
						>
							{({ selected }) => (
								<>
									<span className="absolute inset-0 rounded-md overflow-hidden">
										<img
											src={image}
											alt=""
											className="w-full h-full object-center object-contain"
										/>
									</span>
									<span
										className={clsx(
											selected ? 'ring-brand-500' : 'ring-transparent',
											'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
										)}
										aria-hidden="true"
									/>
								</>
							)}
						</Tab>
					))}
				</Tab.List>
			</div>

			<Tab.Panels className="w-full aspect-w-1 aspect-h-1">
				{images.map((image, idx) => (
					<Tab.Panel key={idx}>
						<img
							src={image}
							className="w-full h-full object-center object-contain sm:rounded-lg "
						/>
					</Tab.Panel>
				))}
			</Tab.Panels>
		</Tab.Group>
	)
}
