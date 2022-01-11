export function Logos() {
	return (
		<section className=" dark:bg-gray-900/10">
			<div className="flex flex-col px-5 pb-20 mx-auto sm:flex-row pt-14 max-w-7xl sm:px-6 lg:px-14">
				<div className="w-full max-w-sm mx-auto space-y-2 sm:mx-0 sm:max-w-none sm:w-1/2 pr-14 lg:pr-10 xl:pr-32">
					<div className="flex items-center">
						{[...Array(5)].map((_, i) => (
							<svg
								key={i}
								className="w-6 h-6 text-indigo-400 fill-current"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
							</svg>
						))}

						<div className="flex-grow-0 w-full h-0 my-4 ml-2 dark:bg-gray-800 dark:borer-gray-800 bg-green-200 border-b border-gray-200"></div>
					</div>

					<h3 className="text-2xl font-bold dark:text-white text-gray-900 sm:text-xl lg:text-2xl">
						Trailers from Top Studios
					</h3>
					<p className="text-sm text-gray-500">
						We bring exclusive access to the best trailers from the top studios.
					</p>
				</div>
				<div className="grid w-full grid-cols-2 mt-20 sm:mt-0 sm:w-1/2 gap-y-8 sm:gap-y-1 gap-x-8 md:grid-cols-3">
					{logos.map((logo, i) => {
						return (
							<div
								key={logo}
								className="flex my-4 items-center justify-center col-span-1"
							>
								<img className="h-12 text-green-600 fill-current" src={logo} />
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}

const logos = [
	'https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg',
	'https://upload.wikimedia.org/wikipedia/commons/6/64/Warner_Bros_logo.svg',
	'https://upload.wikimedia.org/wikipedia/commons/7/7e/Columbia_Pictures_logo.png',
	'https://upload.wikimedia.org/wikipedia/commons/b/b6/Universal_Pictures_logo.svg',
	'https://upload.wikimedia.org/wikipedia/commons/a/a5/Paramount_Plus.svg',
]
