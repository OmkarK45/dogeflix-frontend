import { Fragment, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
	MenuIcon,
	SearchIcon,
	ShoppingBagIcon,
	XIcon,
} from '@heroicons/react/outline'
import { Link } from '../ui/Link'
import { MobileMenu } from './MobileMenu'
import { MegaMenu } from './MegaMenu'
import { HeartIcon } from '@heroicons/react/solid'
import { SearchBar } from '../Search/SearchBar'
import clsx from 'clsx'
import { ProfileDropdown } from '../User/ProfileDropdown'

export const navigation = {
	categories: [
		{
			name: 'Women',
			featured: [
				{
					name: 'New Arrivals',
					href: '#',
					imageSrc:
						'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
					imageAlt:
						'Models sitting back to back, wearing Basic Tee in black and bone.',
				},
				{
					name: 'Basic Tees',
					href: '#',
					imageSrc:
						'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
					imageAlt:
						'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
				},
				{
					name: 'Accessories',
					href: '#',
					imageSrc:
						'https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg',
					imageAlt:
						'Model wearing minimalist watch with black wristband and white watch face.',
				},
				{
					name: 'Carry',
					href: '#',
					imageSrc:
						'https://tailwindui.com/img/ecommerce-images/mega-menu-category-04.jpg',
					imageAlt:
						'Model opening tan leather long wallet with credit card pockets and cash pouch.',
				},
			],
		},
		{
			name: 'Men',
			featured: [
				{
					name: 'New Arrivals',
					href: '#',
					imageSrc:
						'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg',
					imageAlt:
						'Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.',
				},
				{
					name: 'Basic Tees',
					href: '#',
					imageSrc:
						'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg',
					imageAlt: 'Model wearing light heather gray t-shirt.',
				},
				{
					name: 'Accessories',
					href: '#',
					imageSrc:
						'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-03.jpg',
					imageAlt:
						'Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.',
				},
				{
					name: 'Carry',
					href: '#',
					imageSrc:
						'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-04.jpg',
					imageAlt:
						'Model putting folded cash into slim card holder olive leather wallet with hand stitching.',
				},
			],
		},
	],
}

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
}

export function Navbar() {
	const [open, setOpen] = useState(false)
	const [searchOpen, setSearchOpen] = useState(false)
	console.log(searchOpen)
	return (
		<div className="bg-white">
			{/* Mobile menu */}
			<MobileMenu open={open} setOpen={setOpen} />

			<header className="relative">
				<nav aria-label="Top">
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
												DogeMart
											</h6>
										</Link>
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
												DogeMart
											</h5>
										</span>
									</Link>

									<div className="flex-1 flex items-center justify-end">
										<div className="hidden lg:block">
											<SearchBar />
										</div>

										<div className="flex items-center lg:ml-8">
											<div className="hidden md:block">
												<ProfileDropdown />
											</div>
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
													<span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
														0
													</span>
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
													<span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
														0
													</span>
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
							<SearchBar />
						</div>
					) : null}
				</nav>
			</header>
		</div>
	)
}
