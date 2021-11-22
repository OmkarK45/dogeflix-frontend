import useSWR from 'swr'
import { fetcher, mutationFn } from '~/lib/fetchJson'
import { WishlistItem, WishlistItems } from '~/types'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import { Heading } from '../ui/Heading'
import Modal from '../ui/Modal'

export function RemoveFromWishlistModal({
	item,
	open,
	setOpen,
}: {
	item: WishlistItem
	open: boolean
	setOpen: (open: boolean) => void
}) {
	const { data, mutate } = useSWR<WishlistItems>('/api/wishlist', fetcher)

	async function removeFromWishlist() {
		const newItems = data?.filter((i) => i.product_id !== item.product_id)
		console.log(data, newItems, item.product_id)
		await mutate(newItems, false)

		await mutationFn(`/api/wishlist/remove`, {
			productId: item.product_id,
		}).then(() => {
			mutate(newItems, true)
		})
	}

	return (
		<Modal isOpen={open} onClose={() => setOpen(false)}>
			<Modal.Header dismiss>
				<Heading size="h4">Remove from wishlist?</Heading>
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
					<Button onClick={async () => removeFromWishlist()} size="lg">
						Confirm removal
					</Button>
				</div>
			</Card.Body>
		</Modal>
	)
}
