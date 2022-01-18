import { ExclamationIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { HiHeart } from 'react-icons/hi'
import useSWR, { mutate } from 'swr'
import { fetcher, mutationFn } from '~/lib/fetchJson'
import { Movie } from '~/lib/types'
import useUser from '~/lib/useUser'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import { Heading } from '../ui/Heading'
import Modal from '../ui/Modal'

interface AddToFavoriteModalProps {
	movie: Movie
}

export function AddToFavoriteModal({ movie }: AddToFavoriteModalProps) {
	const [isOpen, setIsOpen] = useState(false)
	const router = useRouter()

	const { user } = useUser({
		redirectIfFound: false,
	})

	const { data: hasFavorited } = useSWR(
		`/favorites/${movie.video_id}/has-favorited`,
		fetcher
	)

	async function handleAddToFavorites() {
		if (hasFavorited.id) {
			mutate(`/favorites/${movie.video_id}/has-favorited`, { id: false }, false)
			toast.success('Removed from favorites')
			setIsOpen(false)
		} else {
			mutate(`/favorites/${movie.video_id}/has-favorited`, { id: true }, false)
			toast.success('Added to favorites')
			setIsOpen(false)
		}
		mutationFn(`/favorites/toggle-favorites`, {
			video_id: movie.video_id,
		})
	}

	return (
		<>
			<Button
				onClick={() => {
					if (!user?.isLoggedIn) {
						return router.push(
							`/auth/login?redirect=/watch/${movie.video_id}/${movie.imdb_id}`
						)
					} else {
						setIsOpen(true)
					}
				}}
				size="xl"
				variant="ghost"
			>
				<span className="flex text-pink-800 dark:text-pink-200 items-center space-x-2">
					<HiHeart className="w-5 h-5" />
					{hasFavorited?.id ? <p>Favorited</p> : <p>Add to favorites</p>}
				</span>
			</Button>
			<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
				<Modal.Header dismiss>
					<Heading size="h3">
						{hasFavorited?.id ? 'Remove from favorites' : 'Add to favorites'}
					</Heading>
				</Modal.Header>
				<Modal.Content>
					<div className="sm:flex sm:items-start">
						<div className="mt-3 text-center sm:mt-0 sm:text-left">
							<div className="mt-2">
								<p className="text-sm text-gray-500">
									{hasFavorited?.id
										? 'Are you sure you want to remove this movie from your favorites?'
										: 'Are you sure you want to add this movie to your favorites?'}
								</p>
							</div>
						</div>
					</div>
				</Modal.Content>
				<Card.Body noPadding className="mt-4">
					<div className="flex justify-end space-x-3">
						<Button
							type="button"
							onClick={() => setIsOpen(false)}
							size="lg"
							variant="dark"
						>
							Cancel
						</Button>
						<Button onClick={handleAddToFavorites} size="lg">
							{hasFavorited?.id ? 'Remove' : 'Add'}
						</Button>
					</div>
				</Card.Body>
			</Modal>
		</>
	)
}
