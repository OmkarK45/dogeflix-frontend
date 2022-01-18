import { HiOutlineShare } from 'react-icons/hi'
import ButtonOrLink from '../ui/ButtonOrLink'
import { RiMovie2Line } from 'react-icons/ri'
interface MovieCardProps {
	poster_url?: string
	title?: string
	subtitle?: string
	hideShare?: boolean
}

export function MovieCard({
	poster_url,
	title,
	subtitle,
	hideShare,
}: MovieCardProps) {
	return (
		<div className="relative flex items-end justify-center overflow-hidden bg-gray-300 md:rounded-lg group h-56">
			{poster_url ? (
				<img
					src={poster_url}
					className="absolute object-cover object-center w-full h-full transition duration-300 ease-out transform scale-100 group-hover:scale-105"
				/>
			) : (
				<div>
					<div className="absolute left-0 bottom-0 flex items-center justify-center w-full h-full bg-gray-300 dark:bg-gray-700 opacity-50 group-hover:opacity-75">
						<RiMovie2Line className="w-14 h-14 text-gray-500 dark:text-gray-300" />
					</div>
				</div>
			)}

			<div className="absolute z-10 w-full h-full bg-gradient-to-b from-transparent to-black opacity-90"></div>
			<div className="relative flex justify-between items-center w-full px-4 z-20 py-3 text-left">
				<div>
					<h2 className=" font-sans text-xl font-semibold text-white">
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
