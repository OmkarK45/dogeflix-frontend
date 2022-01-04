import { useState } from 'react'
import { HeartIcon } from '@heroicons/react/solid'
import { MenuIcon, SearchIcon, ShoppingBagIcon } from '@heroicons/react/outline'
import clsx from 'clsx'

import useUser from '~/lib/useUser'

import { MobileMenu } from './MobileMenu'
import { ProfileDropdown } from '../User/ProfileDropdown'

import { GradientBar } from '../ui/GradientBar'
import { Link } from '../ui/Link'

export function Navbar() {
	const { user } = useUser({
		redirectIfFound: false,
	})

	const [open, setOpen] = useState(false)
	const [searchOpen, setSearchOpen] = useState(false)

	return (
		<div className="bg-white">
			{/* Mobile menu */}
			<MobileMenu open={open} setOpen={setOpen} />

			<header className="relative">
				<nav aria-label="Top">
					{user?.isLoggedIn ? (
						<GradientBar color="pink" />
					) : (
						<div className=" bg-gradient-to-r from-pink-600 to-yellow-500 bg-blend-darken bg-opacity-30">
							<div className="mx-auto h-10 px-4 flex items-center justify-between sm:px-6 lg:px-8">
								<div className="flex items-center space-x-6">
									<Link
										href="/auth/login"
										className="-m-2 p-2 block font-medium text-white no-underline"
									>
										Sign in
									</Link>
									<Link
										href="/auth/signup"
										className="-m-2 p-2 block font-medium text-white no-underline"
									>
										Create an account
									</Link>
								</div>
							</div>
						</div>
					)}
					{/* Secondary navigation */}
					<div className="bg-white">
						<div className=" mx-auto px-4 sm:px-6 lg:px-8">
							<div className="border-b border-gray-200">
								<div className="h-16 flex items-center justify-between">
									{/* Logo (lg+) */}
									<div className="hidden lg:flex-1 lg:flex lg:items-center">
										<Link
											href="/products"
											className="flex items-center space-x-2 no-underline"
										>
											<ShoppingBagIcon className="h-8 w-auto  text-yellow-600" />
											<h6 className="mt-1 text-2xl font-bold tracking-tight">
												DogeFlix
											</h6>
										</Link>
									</div>
									<div className="hidden h-full lg:flex bg-white z-20">
										{/* Flyout menus */}
									</div>
									{/* Mobile menu and search (lg-) */}
									<div className="flex-1  flex items-center lg:hidden">
										<button
											type="button"
											className="-ml-2 bg-white p-2 rounded-md text-gray-400"
											onClick={() => setOpen(true)}
										>
											<MenuIcon className="h-6 w-6" aria-hidden="true" />
										</button>

										{/* Search */}
										<button
											className="p-2 ml-2"
											onClick={() => setSearchOpen((prev) => !prev)}
										>
											<SearchIcon
												className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
												aria-hidden="true"
											/>
										</button>
									</div>

									{/* Logo (lg-) */}
									<Link href="/products" className="lg:hidden no-underline">
										<span className="flex items-center space-x-2">
											<ShoppingBagIcon className="h-8 w-auto hidden lg:block text-yellow-600" />
											<h5 className="mt-1 text-xl font-bold tracking-tighter">
												DogeFlix
											</h5>
										</span>
									</Link>

									<div className="flex-1 flex items-center justify-end">
										<div className="hidden lg:block">search here</div>

										<div className="flex items-center lg:ml-8">
											{user?.isLoggedIn ? (
												<div className="hidden md:block">
													<ProfileDropdown />
												</div>
											) : null}
											{/* Cart */}
											<div className="ml-4 flow-root lg:ml-8">
												<Link
													href="/cart"
													className="group -m-2 p-2 flex items-center no-underline"
												>
													<ShoppingBagIcon
														className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
														aria-hidden="true"
													/>
												</Link>
											</div>
											<div className="ml-4 flow-root lg:ml-8">
												<Link
													href="/wishlist"
													className="group -m-2 p-2 flex items-center no-underline"
												>
													<HeartIcon
														className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
														aria-hidden="true"
													/>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{searchOpen ? (
						<div
							className={clsx(
								'block md:hidden w-full py-2 px-3 transition-all duration-500 '
							)}
						>
							search here{' '}
						</div>
					) : null}
				</nav>
			</header>
		</div>
	)
}
