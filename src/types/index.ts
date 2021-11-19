export interface ProductType {
	id: string
	title: string
	brand: string
	excerpt: string
	description: string
	images: string[]
	price: number
	discount: number
	stock: number
	user: string
	slug: string
	user_id: string
	sizes: string[]
	colors: string[]
	features: string[]
	reviews: Review[]
	rating: number
	_count: {
		reviews: number
	}
}

export interface Review {
	id: string
	product_id: string
	user_id: string
	rating: number
	comment: string
	created_at: string
	updated_at: string
}

export interface CartItem {
	id: string
	product: ProductType
	quantity: number
	product_id: string
	user_id: string
}

export interface WishlistItem {
	id: string
	product: ProductType
	product_id: string
	user_id: string
}

export type CartItems = CartItem[]

export type WishlistItems = WishlistItem[]

export interface User {
	id: string
	name: string
	email: string
	role: string
	reviews: Review[]
	cart: CartItems
	wishlist: WishlistItems
}
