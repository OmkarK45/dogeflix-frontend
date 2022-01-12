import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import clsx from 'clsx'
import _ from 'lodash'
import { useMemo } from 'react'
import { HiExternalLink } from 'react-icons/hi'
import useSWR from 'swr'
import { tmdBFetcher } from '~/lib/fetchJson'
import { Movie } from '~/lib/types'
import { Data } from '../ui/Data'
import { Link } from '../ui/Link'
import { IndeterminateProgress } from '../ui/Progress'

export function MovieMetadata({ data }: { data: Movie }) {
	const { data: imdbData } = useSWR('tt3501632', tmdBFetcher)

	const directors = useMemo(() => {
		if (!imdbData || !imdbData.crew) return []
		return _.groupBy(imdbData.crew, 'known_for_department')
			['Directing'].map((person) => person.name)
			.slice(0, 3)
	}, [imdbData])

	const writers = useMemo(() => {
		if (!imdbData || !imdbData.crew) return []
		return _.groupBy(imdbData.crew, 'known_for_department')
			['Writing'].map((person) => person.name)
			.slice(0, 3)
	}, [imdbData])

	const casts = useMemo(() => {
		if (!imdbData || !imdbData.cast) return []
		return _.groupBy(imdbData.cast, 'known_for_department')
			['Acting'].map((person) => person.name)
			.slice(0, 4)
	}, [imdbData])

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
									<IndeterminateProgress />
									<div className=" py-5 ">
										<dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
											<div className="sm:col-span-1">
												<dt className="text-sm font-medium text-gray-500">
													Directed By
												</dt>
												{imdbData &&
													directors.map((director, idx) => (
														<dd key={idx} className="mt-1 text-sm ">
															{director}
														</dd>
													))}
											</div>
											<div className="sm:col-span-1">
												<dt className="text-sm font-medium text-gray-500">
													Written By
												</dt>
												{imdbData &&
													writers.map((writer, idx) => (
														<dd key={idx} className="mt-1 text-sm ">
															{writer}
														</dd>
													))}
											</div>
											<div className="sm:col-span-1">
												<dt className="text-sm font-medium text-gray-500">
													Cast
												</dt>
												{imdbData &&
													casts.map((cast) => (
														<dd key={cast} className="mt-1 text-sm ">
															{cast}
														</dd>
													))}
											</div>
											<div className="sm:col-span-1">
												<dt className="text-sm font-medium text-gray-500">
													IMDb Rating
												</dt>
												<dd className="mt-1 text-sm ">
													<span className="flex items-center space-x-2">
														<p>{data.rating}</p>
														<Link
															target="_blank"
															rel="noopener noreferrer"
															href={`https://www.imdb.com/title/${data?.imdb_id}/`}
															className="flex items-center text-gray-500 font-normal "
														>
															<HiExternalLink size={'16'} />
														</Link>
													</span>
												</dd>
											</div>
											<div className="sm:col-span-1">
												<dt className="text-sm font-medium text-gray-500">
													Genres
												</dt>
												<dd className="mt-1 text-sm ">
													{data.genre.map((genre, idx) => {
														return (
															<p
																key={genre}
																className="lowercase first-letter:capitalize"
															>
																{genre.toUpperCase()}
															</p>
														)
													})}
												</dd>
											</div>
											<div className="sm:col-span-2">
												<dt className="text-sm font-medium text-gray-500">
													About
												</dt>
												<dd className="mt-1 text-sm ">{data.description}</dd>
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
