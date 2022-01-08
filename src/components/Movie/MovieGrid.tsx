import { Movie } from '~/lib/types'
import { Heading } from '../ui/Heading'

export function MovieGrid() {
	return (
		<div>
			<div>
				<div className="relative py-6 lg:py-10">
					<img
						className="z-0 w-full h-full absolute inset-0 object-cover"
						// src="https://tuk-cdn.s3.amazonaws.com/assets/webapp/common/bg_image_dark.png"
						src="https://res.cloudinary.com/dogecorp/image/upload/v1641642456/background2_amemmq.png"
						alt="bg"
					/>
					<div className="z-10 relative max-w-7xl container px-6 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between">
						<div>
							<Heading
								size="h3"
								className="text-2xl font-bold leading-tight text-white"
							>
								Action Movies
							</Heading>
						</div>
					</div>
				</div>
				<div className="mx-auto container md:max-w-7xl">
					<div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8">
						<div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-24" />
						<div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-24" />
						<div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-24" />
						<div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-24" />
						<div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-24" />
						<div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-24" />
						<div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-24" />
						<div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-24" />
					</div>
				</div>
			</div>
		</div>
	)
}
