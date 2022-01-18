import { useState } from 'react'
import toast from 'react-hot-toast'
import { HiOutlinePencil } from 'react-icons/hi'
import useSWR from 'swr'
import { object, string } from 'zod'
import { fetcher, mutationFn } from '~/lib/fetchJson'
import { ApiResponse, Movie, PaginatedApiResponse, Playlist } from '~/lib/types'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import Form, { useZodForm } from '../ui/Form/Form'
import { Heading } from '../ui/Heading'
import { Input } from '../ui/Input'
import Modal from '../ui/Modal'

export function EditPlaylistModal({ playlist }: { playlist: Playlist }) {
	const { data, mutate } = useSWR<
		ApiResponse<Playlist> & PaginatedApiResponse<Movie>
	>(`/playlists/${playlist.id}?page=1&limit=10`, fetcher)

	const [isOpen, setIsOpen] = useState(false)

	const form = useZodForm({
		schema: object({
			name: string().min(1),
		}),
	})

	async function handlePlaylistRename(values: any) {
		await mutationFn(`/playlists/update`, {
			playlist_id: playlist.id,
			playlist_name: values.name,
		})
		// refetch now
		mutate()
		toast.success('Playlist has been renamed!')
		setIsOpen(false)
	}
	return (
		<div>
			<Button
				onClick={() => setIsOpen(true)}
				rounded="full"
				variant="ghost"
				className="!p-3"
			>
				<HiOutlinePencil className="w-5 h-5" />
			</Button>
			<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
				<Modal.Header dismiss>
					<Heading size="h3">Rename playlist</Heading>
				</Modal.Header>
				<Card.Body noPadding className="mt-6">
					<Form
						form={form}
						onSubmit={async (values) => handlePlaylistRename(values)}
					>
						<Input
							label="New name"
							placeholder="My *new* playlist"
							{...form.register('name')}
						/>
						<div className="flex justify-end space-x-2">
							<Button
								onClick={() => setIsOpen(false)}
								variant="ghost"
								size="lg"
							>
								Cancel
							</Button>
							<Form.SubmitButton size="lg">Rename</Form.SubmitButton>
						</div>
					</Form>
				</Card.Body>
			</Modal>
		</div>
	)
}
