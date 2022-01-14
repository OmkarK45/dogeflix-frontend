import { PaginatedApiResponse, Playlist, Movie } from '~/lib/types'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import { Heading } from '../ui/Heading'
import Modal from '../ui/Modal'
import { HiOutlinePlay, HiPlus } from 'react-icons/hi'
import { useState } from 'react'
import useSWR, { mutate } from 'swr'
import useUser from '~/lib/useUser'
import { fetcher, mutationFn } from '~/lib/fetchJson'
import { Spinner } from '../ui/Spinner'
import { ErrorFallback } from '../ui/Fallbacks/ErrorFallback'
import { Link } from '../ui/Link'
import { object, string, z } from 'zod'
import Form, { useZodForm } from '../ui/Form/Form'
import { Input } from '../ui/Input'
import toast from 'react-hot-toast'

interface AddToPlaylistModalProps {
	movie: Movie
}

const NewPlaylistSchema = object({
	name: string(),
})

export function AddToPlaylistModal({ movie }: AddToPlaylistModalProps) {
	const [showForm, setShowForm] = useState(false)
	const [isOpen, setIsOpen] = useState(false)
	const [loading, setIsLoading] = useState(false)

	const { user } = useUser({
		redirectIfFound: false,
	})

	const { data, error, mutate } = useSWR<PaginatedApiResponse<Playlist>>(
		`/playlists`,
		fetcher
	)

	const form = useZodForm({ schema: NewPlaylistSchema })

	async function handleAddToPlaylist(playlistId: string) {
		await mutationFn(`/playlists/add-to-playlist`, {
			video_id: movie.id,
			playlist_id: playlistId,
		})
		mutate()
		toast.success('Added to playlist!')
	}

	async function handleCreatePlaylist(
		values: z.infer<typeof NewPlaylistSchema>
	) {
		await mutationFn(`/playlists/add-to-playlist`, {
			playlist_name: values.name,
			video_id: movie.id,
		}).then((res) => {
			form.reset()
			toast.success('Created and added to playlist!')
		})
		mutate()
	}

	return (
		<>
			<Button onClick={() => setIsOpen(true)} size="xl" variant="ghost">
				<span className="flex text-pink-800 dark:text-pink-200 items-center space-x-2">
					<HiPlus className="w-5 h-5" />
					<p>Add to playlist</p>
				</span>
			</Button>

			<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
				<Modal.Header dismiss>
					<Heading size="h3">Add to playlist</Heading>
				</Modal.Header>
				<Modal.Content>
					<div className="sm:flex sm:items-start">
						<div className="mt-3 text-center sm:mt-0 sm:text-left">
							<div className="mt-2">
								<p className="text-sm text-gray-500">
									Please choose a playlist to add video to. You can create a new
									playlist or select an existing one. You can manage your
									playlists at any time. Please note that you can only add a
									video to a playlist once.
									<Link href="/playlists">Your Playlists</Link>
								</p>
							</div>
						</div>
					</div>
				</Modal.Content>
				{!data ? (
					<div className="py-10 flex items-center space-x-4 justify-center">
						<Spinner /> <p className="font-medium">Loading</p>
					</div>
				) : null}
				{data && !error && (
					<>
						<div className="flow-root mt-8">
							<ul
								role="list"
								className="-my-5 divide-y divide-gray-200 dark:divide-gray-700 overflow-y-scroll max-h-64"
							>
								{data.data.map((playlist: Playlist) => (
									<li key={playlist.id} className="py-4">
										<div className="flex items-center space-x-4">
											<div className="bg-pink-500 text-white p-2 rounded-full">
												<HiOutlinePlay className="w-8 h-8 " />
											</div>
											<div className="flex-1 min-w-0">
												<p className="text-sm font-medium truncate">
													{playlist.name}
												</p>
												<p className="text-sm text-gray-500 truncate">
													{playlist._count.video} Videos
												</p>
											</div>
											<div>
												<Button
													onClick={() => handleAddToPlaylist(playlist.id)}
													variant="ghost"
													size="lg"
												>
													Add
												</Button>
											</div>
										</div>
									</li>
								))}
							</ul>
						</div>
					</>
				)}
				{data?.data.length === 0 && (
					<ErrorFallback
						noAction
						message="No playlists found. Create one to add video."
					/>
				)}

				<div className="mt-10 mb-5 ">
					<Button
						onClick={() => setShowForm((prev) => !prev)}
						size="lg"
						variant="ghost"
					>
						<span className="flex items-center space-x-3">
							<HiPlus className="w-5 h-5" />
							<p>Create new playlist</p>
						</span>
					</Button>
				</div>

				{showForm && (
					<Form
						form={form}
						onSubmit={(values) => {
							handleCreatePlaylist(values)
						}}
					>
						<div className="flex w-full px-0">
							<div className="w-3/4	">
								<Input
									{...form.register('name')}
									label="Playlist Name"
									placeholder="Action Movies, Retro Stuff"
									className="flex-1 "
								/>
							</div>
							<Button
								type="submit"
								variant="ghost"
								size="sm"
								className="w-1/4 mt-7"
							>
								Create
							</Button>
						</div>
						<p className="text-sm text-gray-500">
							Clicking create will create a playlist with given name and add the
							video.
						</p>
					</Form>
				)}

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
						<Button onClick={() => setIsOpen(false)} type="submit" size="lg">
							Finish
						</Button>
					</div>
				</Card.Body>
			</Modal>
		</>
	)
}
