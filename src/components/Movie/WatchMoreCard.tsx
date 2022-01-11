import { Link } from '../ui/Link'

export function WatchMoreCard() {
	return (
		<Link className="no-underline text-left flex cursor-pointer group hover:bg-gray-200 dark:hover:bg-gray-800 px-4 py-3 rounded-lg">
			<div className="self-center flex-shrink-0 w-1/3 mr-4 ">
				<img
					className="rounded-md"
					src={'https://wallpapercave.com/wp/wp1945919.jpg'}
				/>
			</div>
			<div>
				<h4 className="md:text-md">Avengers Infinity War</h4>
				<p className="mt-1 text-sm text-gray-500 md:text-base">Marvel</p>
			</div>
		</Link>
	)
}
