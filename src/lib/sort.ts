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

export function getFilteredProducts(
	products: ProductType[],
	filters: {
		category: string[]
		size: string[]
		color: string[]
	}
): ProductType[] {
	const productsCopy = JSON.parse(JSON.stringify(products)) as ProductType[]

	const filteredProducts = productsCopy.filter((product) => {
		const { category, size, color } = filters
		// check if category array elements are in the product category array

		// temporarily short-circuit the check if category array is empty
		const categoryMatch = category.every((category) => true)
		// check if size array elements are in the product size array
		const sizeMatch = size.every((size) => product.sizes.includes(size))
		// check if color array elements are in the product color array
		const colorMatch = color.every((color) => product.colors.includes(color))

		if (category.length > 0 && !categoryMatch) {
			return false
		}

		if (size.length > 0 && !sizeMatch) {
			return false
		}

		if (color.length > 0 && !colorMatch) {
			return false
		}

		return true
	})

	return filteredProducts
}
