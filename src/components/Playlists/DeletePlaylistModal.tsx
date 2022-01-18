import { useRouter } from 'next/router'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi'
import { mutationFn } from '~/lib/fetchJson'
import { Playlist } from '~/lib/types'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import { Heading } from '../ui/Heading'
import Modal from '../ui/Modal'

export function DeletePlaylistModal({ playlist }: { playlist: Playlist }) {
	const [isOpen, setIsOpen] = useState(false)
	const router = useRouter()
	async function handlePlaylistDelete() {
		mutationFn(`/playlists/delete`, {
			playlist_id: playlist.id,
		}).then(() => {
			toast.success('Playlist deleted successfully')
			router.push('/my-playlists', undefined, { shallow: true })
		})
	}

	return (
		<div>
			<Button
				onClick={() => setIsOpen(true)}
				rounded="full"
				variant="ghost"
				className="!p-3"
			>
				<HiOutlineTrash className="w-5 h-5" />
			</Button>
			<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
				<Modal.Header dismiss>
					<Heading size="h3">Delete playlist?</Heading>
					<p className="text-sm mt-3">
						Are you sure you want to delete this playlist? This action cannot be
						undone.
					</p>
				</Modal.Header>
				<Card.Body noPadding className="flex justify-end mt-4 space-x-3">
					<Button
						type="button"
						onClick={() => setIsOpen(false)}
						size="lg"
						variant="dark"
					>
						Cancel
					</Button>
					<Button
						variant="danger"
						onClick={handlePlaylistDelete}
						type="submit"
						size="lg"
					>
						Delete
					</Button>
				</Card.Body>
			</Modal>
		</div>
	)
}
