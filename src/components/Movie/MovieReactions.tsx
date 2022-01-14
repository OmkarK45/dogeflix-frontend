import clsx from 'clsx'
import React, { useState } from 'react'
import useSWR from 'swr'
import { fetcher, mutationFn } from '~/lib/fetchJson'
import { ApiResponse, Movie, ReactionType, VideoReaction } from '~/lib/types'
import { Button } from '../ui/Button'

export function MovieReactions({ data }: { data: Movie }) {
	const { data: movieData, mutate } = useSWR<ApiResponse<Movie>>(
		`/videos/${data.video_id}`,
		fetcher
	)

	const { data: hasReacted, mutate: mutateHasReacted } = useSWR<
		Record<ReactionType, boolean>
	>(`/reactions/${data.video_id}/user-reactions`, fetcher)

	async function handleReaction(reactionType: ReactionType) {
		if (!hasReacted) return {}

		mutateHasReacted(
			{
				...hasReacted,
				[reactionType]: !hasReacted[reactionType],
			},
			false
		)

		mutate(
			{
				...movieData?.data,
				success: true,
				code: 'SUCCESS',
				data: {
					...movieData?.data,
					// @ts-ignore
					reactions: {
						...movieData?.data.reactions,
						[reactionType]:
							movieData?.data?.reactions &&
							movieData?.data?.reactions?.[reactionType] +
								(hasReacted?.[reactionType] ? -1 : 1),
					},
				},
			},
			false
		)

		mutationFn(`/reactions/toggle`, {
			reactionType: reactionType,
			video_id: movieData?.data.video_id,
		})
	}

	console.log(hasReacted)
	return (
		<>
			{movieReactions.map((reaction, index) => (
				<Button
					onClick={() => handleReaction(reaction.type)}
					key={reaction.type}
					variant="ghost"
					size="sm"
					className={clsx(
						'border border-gray-300 dark:border-gray-800 !px-3 py-1 !rounded-full',
						hasReacted?.[reaction.type] &&
							'border-2 dark:border-pink-400 dark:bg-pink-600/40'
					)}
				>
					<span className="flex items-center">
						<img
							src={reaction.img_src}
							alt={reaction.type}
							className="w-6 h-6 block"
						/>
					</span>
					<p className="ml-2 ">{data?.reactions[reaction.type]}</p>
				</Button>
			))}
		</>
	)
}

const movieReactions: Array<Reaction> = [
	{ type: 'NICE', img_src: 'https://cdn.frankerfacez.com/emoticon/487501/4' },
	{ type: 'YIKES', img_src: 'https://cdn.frankerfacez.com/emoticon/451760/1' },
	{ type: 'KEKW', img_src: 'https://cdn.frankerfacez.com/emoticon/381875/4' },
	{
		type: 'POGGERS',
		img_src: 'https://cdn.frankerfacez.com/emoticon/214129/1',
	},
]

type Reaction = {
	type: ReactionType
	img_src: string
}
