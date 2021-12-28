import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { Fragment } from 'react'
import { navigation } from '~/lib/category'

export function MegaMenuMobile() {
	return (
		<Tab.Group as="div" className="mt-2">
			<div className="border-b border-gray-200">
				<Tab.List className="-mb-px flex px-4 space-x-8">
					{navigation.categories.map((category) => (
						<Tab
							key={category.name}
							className={({ selected }) =>
								clsx(
									selected
										? 'text-indigo-600 border-indigo-600'
										: 'text-gray-900 border-transparent',
									'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium'
								)
							}
						>
							{category.name}
						</Tab>
					))}
				</Tab.List>
			</div>
			<Tab.Panels as={Fragment}>
				{navigation.categories.map((category) => (
					<Tab.Panel key={category.name} className="px-4 py-6 space-y-12">
						<div className="grid grid-cols-2 gap-x-4 gap-y-10">
							{category.featured.map((item) => (
								<div key={item.name} className="group relative">
									<div className="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
										<img
											src={item.imageSrc}
											alt={item.imageAlt}
											className="object-center object-cover"
										/>
									</div>
									<a
										href={item.href}
										className="mt-6 block text-sm font-medium text-gray-900"
									>
										<span
											className="absolute z-10 inset-0"
											aria-hidden="true"
										/>
										{item.name}
									</a>
									<p aria-hidden="true" className="mt-1 text-sm text-gray-500">
										Shop now
									</p>
								</div>
							))}
						</div>
					</Tab.Panel>
				))}
			</Tab.Panels>
		</Tab.Group>
	)
}
