import { HiOutlineShare } from 'react-icons/hi'
import ButtonOrLink from '../ui/ButtonOrLink'
import { RiMovie2Line } from 'react-icons/ri'
import Image from 'next/image'
import React from 'react'
import { IconType } from 'react-icons/lib'

interface MovieCardProps {
	poster_url?: string
	title?: string
	subtitle?: string
	hideShare?: boolean
	icon?: any
}

export function MovieCard({
	poster_url,
	title,
	subtitle,
	hideShare,
	icon,
}: MovieCardProps) {
	const Icon = icon
	return (
		<div className="relative flex items-end justify-center overflow-hidden bg-gray-300 md:rounded-lg group h-56">
			{poster_url ? (
				<Image
					alt="Movie Poster"
					layout="fill"
					src={poster_url}
					className="absolute object-contain object-center w-full h-full transition duration-300 ease-out transform scale-100 group-hover:scale-105"
				/>
			) : (
				<div>
					<div className="absolute left-0 bottom-0 flex items-center justify-center w-full h-full bg-gray-300 dark:bg-gray-700 opacity-50 group-hover:opacity-75">
						{icon ? (
							<Icon className="w-14 h-14" />
						) : (
							<RiMovie2Line className="w-14 h-14 text-gray-500 dark:text-gray-300" />
						)}
					</div>
				</div>
			)}

			<div className="absolute z-10 w-full h-full bg-gradient-to-b from-transparent to-black opacity-90"></div>
			<div className="relative flex justify-between items-center w-full px-4 z-20 py-3 text-left">
				<div>
					<h2 className="line-clamp-1 font-sans text-xl font-semibold text-white">
						{title}
					</h2>
					<span className="inline-block font-sans text-xs text-white">
						{subtitle}
					</span>
				</div>
				{!hideShare && (
					<ButtonOrLink className="bg-pink-600 p-3 !rounded-full">
						<HiOutlineShare className="w-5 h-5 text-white" />
					</ButtonOrLink>
				)}
			</div>
		</div>
	)
}
