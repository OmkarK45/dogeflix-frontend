/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Fragment } from 'react'
import {
	ArrowLeftIcon,
	LightningBoltIcon,
	ShoppingBagIcon,
	ShoppingCartIcon,
	StarIcon,
} from '@heroicons/react/solid'
import { Tab } from '@headlessui/react'
import { Heading } from '../ui/Heading'
import { Button } from '../ui/Button'
import { ProductImagesGallery } from './ProductImagesGallery'
import { Badge } from '../ui/Badge'
import { ShareSection } from '../Common/ShareSection'
import { ProductSizeAndColor } from './ProductSizeAndColor'

export const product = {
	name: 'Louis Vuitton Handbag',
	version: { name: '1.0', date: 'June 5, 2021', datetime: '2021-06-05' },
	price: '$220',
	description:
		'The Speedy Bandoulière 20 is an on-trend compact handbag, just the right size to carry daily essentials. It’s made from smooth grained Monogram Empreinte leather, embossed with an Oversized Monogram pattern. The hardware and padlock are a golden color.',
	highlights: [
		'Embossed grained cowhide leather',
		'Cowhide-leather trim',
		'Microfiber lining',
	],
	images: [
		{
			id: 1,
			name: 'Angled view',
			src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
			alt: 'Angled front view with bag zipped and handles upright.',
		},
		{
			id: 2,
			name: 'Angled view',
			src: 'https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg',
			alt: 'Angled front view with bag zipped and handles upright.',
		},
		{
			id: 3,
			name: 'Angled view',
			src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
			alt: 'Angled front view with bag zipped and handles upright.',
		},
		// More images...
	],
	sizes: [
		{ name: 'XXS', inStock: true },
		{ name: 'XS', inStock: true },
		{ name: 'S', inStock: true },
		{ name: 'M', inStock: true },
		{ name: 'L', inStock: true },
		{ name: 'XL', inStock: false },
	],
	colors: [
		{ name: 'Black', bgColor: 'bg-gray-900', selectedColor: 'ring-gray-900' },
		{
			name: 'Heather Grey',
			bgColor: 'bg-gray-400',
			selectedColor: 'ring-gray-400',
		},
	],
	imageAlt:
		'Sample of 30 icons with friendly and fun details in outline, filled, and brand color styles.',
}
const reviews = {
	average: 4,
	featured: [
		{
			id: 1,
			rating: 5,
			content: `
        <p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
      `,
			date: 'July 16, 2021',
			datetime: '2021-07-16',
			author: 'Emily Selman',
			avatarSrc:
				'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
		},
		{
			id: 2,
			rating: 5,
			content: `
        <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
      `,
			date: 'July 12, 2021',
			datetime: '2021-07-12',
			author: 'Hector Gibbons',
			avatarSrc:
				'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
		},
		// More reviews...
	],
}

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
}

export function ProductDetails() {
	return (
		<div className="bg-white">
			<div className="mx-auto  px-4 py-7 sm:px-6 lg:max-w-7xl lg:px-8">
				<Button variant="dark" href="/products" className="mb-2">
					<ArrowLeftIcon className="w-4 h-4 mr-2" /> Back to store
				</Button>
				{/* Product */}
				<div className="lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
					{/* Product image */}
					<div className="lg:row-end-1 lg:col-span-4">
						<ProductImagesGallery images={product.images} />
					</div>

					{/* Product details */}
					<div className="max-w-2xl mx-auto mt-14 sm:mt-16 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-3">
						<div className="flex flex-col">
							<div className="mt-4">
								<Badge variant="orange" className="mb-2 relative shine">
									Louis Vuitton
								</Badge>
								<h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
									{product.name}
								</h1>

								<h2 id="information-heading" className="sr-only">
									Product information
								</h2>
							</div>

							<div className="flex items-center mt-4">
								<div className="mr-2">
									<p className="text-3xl text-gray-900 ">{product.price}</p>
								</div>
								<div className="border-l border-gray-300">
									<p className="text-sm text-gray-700 ml-2">
										{reviews.average}
										<span className="sr-only"> out of 5 stars</span>
									</p>
								</div>

								<div className="ml-1 flex items-center ">
									{[0, 1, 2, 3, 4].map((rating) => (
										<StarIcon
											key={rating}
											className={classNames(
												reviews.average > rating
													? 'text-yellow-400'
													: 'text-gray-200',
												'h-5 w-5 flex-shrink-0'
											)}
											aria-hidden="true"
										/>
									))}
								</div>
								<div aria-hidden="true" className="ml-4 text-sm text-gray-300">
									·
								</div>
								<div className="ml-4 flex">
									<a
										href="#"
										className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
									>
										See all 512 reviews
									</a>
								</div>
								<p className="sr-only">{reviews.average} out of 5 stars</p>
							</div>
						</div>

						<p className="text-gray-500 mt-6">{product.description}</p>
						<div className="mt-4">
							<ProductSizeAndColor />
						</div>
						<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
							<Button type="button" fullWidth size="xl">
								<LightningBoltIcon className="w-5 h-5 mr-2" /> Pay{' '}
								{product.price}
							</Button>
							<Button type="button" variant="dark" size="xl">
								<ShoppingCartIcon className="w-5 h-5 text-gray-500 mr-2" /> Add
								to cart
							</Button>
						</div>

						<div className="border-t border-gray-200 mt-10 pt-10">
							<h3 className="text-sm font-medium text-gray-900">Highlights</h3>
							<div className="mt-4 prose prose-sm text-gray-500">
								<ul role="list">
									{product.highlights.map((highlight) => (
										<li key={highlight}>{highlight}</li>
									))}
								</ul>
							</div>
						</div>

						<ShareSection />
					</div>

					<div className="w-full max-w-2xl mx-auto mt-16 lg:max-w-none lg:mt-0 lg:col-span-4">
						<div className="border-b border-gray-200"></div>
						<Heading size="h5" className="py-6">
							Customer Reviews
						</Heading>
						<div className="border-b border-gray-200"></div>
						<div>
							{reviews.featured.map((review, reviewIdx) => (
								<div
									key={review.id}
									className="flex text-sm text-gray-500 space-x-4"
								>
									<div className="flex-none py-10">
										<img
											src={review.avatarSrc}
											alt=""
											className="w-10 h-10 bg-gray-100 rounded-full"
										/>
									</div>
									<div
										className={classNames(
											reviewIdx === 0 ? '' : 'border-t border-gray-200',
											'py-10'
										)}
									>
										<h3 className="font-medium text-gray-900">
											{review.author}
										</h3>
										<p>
											<time dateTime={review.datetime}>{review.date}</time>
										</p>

										<div className="flex items-center mt-4">
											{[0, 1, 2, 3, 4].map((rating) => (
												<StarIcon
													key={rating}
													className={classNames(
														review.rating > rating
															? 'text-yellow-400'
															: 'text-gray-300',
														'h-5 w-5 flex-shrink-0'
													)}
													aria-hidden="true"
												/>
											))}
										</div>
										<p className="sr-only">{review.rating} out of 5 stars</p>

										<div
											className="mt-4 prose prose-sm max-w-none text-gray-500"
											dangerouslySetInnerHTML={{ __html: review.content }}
										/>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
