import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { Fragment } from 'react'
import { navigation } from './DesktopNav'

export function MegaMenu() {
	return (
		<Popover.Group className="px-4 bottom-0 inset-x-0 z-10">
			<div className="h-full flex justify-center space-x-8">
				{navigation.categories.map((category) => (
					<Popover key={category.name} className="flex">
						{({ open }) => (
							<>
								<div className="relative flex">
									<Popover.Button
										className={clsx(
											open
												? 'border-indigo-600 text-indigo-600'
												: 'border-transparent text-gray-700 hover:text-gray-800',
											'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px'
										)}
									>
										{category.name}
									</Popover.Button>
								</div>

								<Transition
									as={Fragment}
									enter="transition ease-out duration-200"
									enterFrom="opacity-0"
									enterTo="opacity-100"
									leave="transition ease-in duration-150"
									leaveFrom="opacity-100"
									leaveTo="opacity-0"
								>
									<Popover.Panel className="absolute top-full inset-x-0 text-sm text-gray-500">
										{/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
										<div
											className="absolute inset-0 top-1/2 bg-white shadow"
											aria-hidden="true"
										/>

										<div className="relative bg-white">
											<div className="max-w-7xl mx-auto px-8">
												<div className="grid grid-cols-4 gap-y-10 gap-x-8 py-16">
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
																className="mt-4 block font-medium text-gray-900"
															>
																<span
																	className="absolute z-10 inset-0"
																	aria-hidden="true"
																/>
																{item.name}
															</a>
															<p aria-hidden="true" className="mt-1">
																Shop now
															</p>
														</div>
													))}
												</div>
											</div>
										</div>
									</Popover.Panel>
								</Transition>
							</>
						)}
					</Popover>
				))}
			</div>
		</Popover.Group>
	)
}
