import toast from 'react-hot-toast'
import useSWR from 'swr'
import { fetcher, mutationFn } from '~/lib/fetchJson'
import { CartItem, CartItems, WishlistItem, WishlistItems } from '~/types'

import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import { Heading } from '../ui/Heading'
import Modal from '../ui/Modal'

export function RemoveFromCartModal({
	item,
	open,
	setOpen,
}: {
	item: CartItem
	open: boolean
	setOpen: (open: boolean) => void
}) {
	const { data, mutate } = useSWR<CartItems>('/api/cart', fetcher)

	async function removeFromCart() {
		const newItems = data?.filter((i) => i.product_id !== item.product_id)
		console.log(data, newItems, item.product_id)
		await mutate(newItems, false)
		toast.success('Removed from cart')
		await mutationFn(`/api/cart/remove`, {
			productId: item.product_id,
		}).then(() => {
			mutate(newItems, true)
		})
	}

	return (
		<Modal isOpen={open} onClose={() => setOpen(false)}>
			<Modal.Header dismiss>
				<Heading size="h4">Remove from cart?</Heading>
				<p className="text-gray-500">You can add it later if you want.</p>
			</Modal.Header>
			<Card.Body noPadding className="mt-4">
				<div className="flex justify-end space-x-3">
					<Button
						type="button"
						onClick={() => setOpen(false)}
						size="lg"
						variant="dark"
					>
						Cancel
					</Button>
					<Button onClick={async () => removeFromCart()} size="lg">
						Confirm removal
					</Button>
				</div>
			</Card.Body>
		</Modal>
	)
}
