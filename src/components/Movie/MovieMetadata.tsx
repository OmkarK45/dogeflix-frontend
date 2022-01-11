import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import clsx from 'clsx'
import { HiExternalLink } from 'react-icons/hi'

export function MovieMetadata() {
	return (
		<>
			<div className="max-w-3xl  ">
				<dl className=" ">
					<Disclosure as="div" className="pt-6">
						{({ open }) => (
							<>
								<dt className="text-lg">
									<Disclosure.Button className="text-left w-full flex justify-between items-start ">
										<span className="font-medium ">More on this film</span>
										<span className="ml-6 h-7 flex items-center">
											<ChevronDownIcon
												className={clsx(
													open ? '-rotate-180' : 'rotate-0',
													'h-6 w-6 transform'
												)}
												aria-hidden="true"
											/>
										</span>
									</Disclosure.Button>
								</dt>
								<Disclosure.Panel as="dd" className="mt-2 pr-12">
									<div className=" py-5 ">
										<dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
											<div className="sm:col-span-1">
												<dt className="text-sm font-medium text-gray-500">
													Directed By
												</dt>
												<dd className="mt-1 text-sm ">Margot Foster</dd>
											</div>
											<div className="sm:col-span-1">
												<dt className="text-sm font-medium text-gray-500">
													Written By
												</dt>
												<dd className="mt-1 text-sm ">Margot Foster</dd>
											</div>
											<div className="sm:col-span-1">
												<dt className="text-sm font-medium text-gray-500">
													Cast
												</dt>
												<dd className="mt-1 text-sm ">
													Robert Downey, Mark Ruffalo
												</dd>
											</div>
											<div className="sm:col-span-1">
												<dt className="text-sm font-medium text-gray-500">
													IMDb Rating
												</dt>
												<dd className="mt-1 text-sm ">
													<span className="flex items-center space-x-2">
														<p>9.8</p>
														<HiExternalLink size={'16'} />
													</span>
												</dd>
											</div>
											<div className="sm:col-span-1">
												<dt className="text-sm font-medium text-gray-500">
													Genres
												</dt>
												<dd className="mt-1 text-sm ">Drama, Comedy, Action</dd>
											</div>
											<div className="sm:col-span-2">
												<dt className="text-sm font-medium text-gray-500">
													About
												</dt>
												<dd className="mt-1 text-sm ">
													Thanos is a fictional character appearing in American
													comic books published by Marvel Comics. Thanos
													discovered the Infinity Stones, a set of powerful
													weapons and artifacts, and used them to conquer the
													universe. The avengers must stop Thanos and his army
													of .
												</dd>
											</div>
										</dl>
									</div>
								</Disclosure.Panel>
							</>
						)}
					</Disclosure>
				</dl>
			</div>
		</>
	)
}
