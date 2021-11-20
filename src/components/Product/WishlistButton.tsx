import { HeartIcon as HeartIconOutline } from '@heroicons/react/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/solid'
import clsx from 'clsx'
import React from 'react'
import toast from 'react-hot-toast'
import useSWR from 'swr'

import { fetcher, mutationFn } from '~/lib/fetchJson'
import { ProductType, WishlistItems } from '~/types'

interface WishlistButtonProps {
	product_id: string
	user_id: string | null | undefined
}

export function WishlistButton({ product_id, user_id }: WishlistButtonProps) {
	const { mutate, data } = useSWR<WishlistItems>('/api/wishlist', fetcher)
	const [wishlisted, setWishlisted] = React.useState(
		data?.find((item) => item.product_id === product_id) ? true : false
	)

	async function handleWishlistClick() {
		if (!user_id) {
			return toast('Please log in to favorite items!')
		}

		if (wishlisted) {
			toast('Removed from wishlist!')

			await mutationFn(`/api/wishlist/remove`, {
				productId: product_id,
			})

			setWishlisted(false)
		} else {
			toast('Added to wishlist!')

			await mutationFn(`/api/wishlist/add`, {
				productId: product_id,
			})

			setWishlisted(true)
		}
	}
	return (
		<button
			onClick={handleWishlistClick}
			className="bg-red-100 p-2 rounded-full outline-none transition-transform duration-300 hover:scale-150 active:scale-95"
		>
			{wishlisted ? (
				<HeartIconSolid className="h-5 w-5 text-red-500" />
			) : (
				<HeartIconOutline className={'w-5 h-5 text-red-500'} />
			)}
		</button>
	)
}
