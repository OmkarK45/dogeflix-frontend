export const CATEGORIES: Record<string, string> = {
	men_jackets_coats: 'Mens Jackets & Coats',
	men_denims: 'Mens Jeans & Denims',
	men_trousers: 'Mens Trousers',
	men_t_shirt_vest: 'Mens T Shirts and Vests',
	women_dresses: 'Womens Dresses',
	women_tops: 'Womens Tops',
	women_jeans: 'Womens Jeans',
	women_jackets_coats: 'Women Jackets & Coats',
	women_trousers: 'Womens Trousers',
	women_knitwear: 'Womens Knitwear',
}

export const navigation = {
	categories: [
		{
			name: 'Women',
			featured: [
				{
					name: 'Dresses',
					href: '/products/women_dresses',
					imageSrc:
						'https://images.asos-media.com/products/asos-design-oversized-t-shirt-dress-with-frill-hem-in-rose/22707646-1-rose?$n_750w$&wid=750&fit=constrain',
					imageAlt:
						'Models sitting back to back, wearing Basic Tee in black and bone.',
				},
				{
					name: 'Tops',
					href: '/products/women_tops',
					imageSrc:
						'https://images.asos-media.com/products/asos-design-square-neck-short-sleeve-top-with-lace-inserts-in-tie-dye/22678173-1-multi?$n_750w$&wid=750&fit=constrain',
					imageAlt:
						'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
				},
				{
					name: 'Jeans',
					href: '/products/women_jeans',
					imageSrc:
						'https://images.asos-media.com/products/dr-denim-cadell-cropped-loose-fit-jeans-in-purple/200318832-1-deeppurplecord',
					imageAlt:
						'Model wearing minimalist watch with black wristband and white watch face.',
				},
				{
					name: 'Jackets',
					href: '/products/women_jackets_coats',
					imageSrc:
						'https://images.asos-media.com/products/muubaa-collar-detail-leather-jacket-in-black/201093663-1-black',
					imageAlt:
						'Model opening tan leather long wallet with credit card pockets and cash pouch.',
				},
				{
					name: 'Trousers',
					href: '/products/women_trousers',
					imageSrc:
						'https://images.asos-media.com/products/whistles-authentic-high-waist-flared-jean-in-black/201568027-1-black',
					imageAlt:
						'Model opening tan leather long wallet with credit card pockets and cash pouch.',
				},
			],
		},
		{
			name: 'Men',
			featured: [
				{
					name: 'Coats and Jackets',
					href: '/products/men_jackets_coats',
					imageSrc:
						'https://images.asos-media.com/products/urbancode-faux-leather-racer-jacket-in-black/200870523-1-black',
					imageAlt: 'Man wearning a jacket.',
				},
				{
					name: 'Denims and Jeans',
					href: '/products/men_jeans',
					imageSrc:
						'https://images.asos-media.com/products/wrangler-bryson-skinny-fit-jeans/23914382-1-blue',
					imageAlt: 'Model wearing jeans.',
				},
				{
					name: 'Trousers',
					href: '/products/men_trousers',
					imageSrc:
						'https://images.asos-media.com/products/religion-slim-tapered-leg-jeans-in-black/200388373-1-black',
					imageAlt: 'Person wearing a trouser.',
				},
				{
					name: 'T Shirts and Vests',
					href: '/products/men_t_shirt_vest',
					imageSrc:
						'https://images.asos-media.com/products/vans-equality-back-print-t-shirt-in-white/24371795-1-white',
					imageAlt: 'Model wearing a T Shirt.',
				},
			],
		},
	],
}
