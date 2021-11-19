export function calculateOriginalPrice(price: number, discount: number) {
	let originalPrice = price

	if (discount) {
		originalPrice = price - (price * discount) / 100
	}

	return originalPrice.toFixed(2)
}
