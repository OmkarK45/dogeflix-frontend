import { SortTypes } from '~/components/Product/SortMenu'
import { ProductType } from '~/types'

export function getSortedProducts(
	products: ProductType[],
	sortBy: SortTypes
): ProductType[] {
	const productsCopy = JSON.parse(JSON.stringify(products)) as ProductType[]

	switch (sortBy) {
		case 'price_low_to_high':
			const sorted = productsCopy.sort((a, b) => a.price - b.price)
			return sorted
		case 'price_high_to_low':
			return productsCopy.sort((a, b) => b.price - a.price)
		case 'best_rating':
			return productsCopy.sort((a, b) => b.rating - a.rating)
		default:
			return products
	}
}
