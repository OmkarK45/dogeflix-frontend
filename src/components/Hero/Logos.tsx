export function Logos() {
	return (
		<div className="container mx-auto pt-16">
			<div className="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto ">
				<h1 className=" xl:text-5xl md:text-3xl text-xl text-center  font-extrabold mb-5 pt-4">
					Trailers from Top Tier Movie Studios
				</h1>
				<p className="text-base md:text-lg lg:text-xl text-center text-gray-600 font-normal xl:w-10/12 xl:mx-auto">
					We care about the quality of our content. We have partnered with
					(FAKE) top movie studios around the world to deliver trailers right to
					you.
				</p>
			</div>
			<div className="">
				<div className="max-w-7xl mx-auto py-6 px-4  sm:px-6 lg:px-8">
					<div className="flow-root mt-8 lg:mt-10">
						<div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
							{logos.map((logo, idx) => {
								return (
									<div
										key={idx}
										className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4"
									>
										<img
											className="h-12 invert grayscale text-white"
											src={logo}
											alt="Tuple"
										/>
									</div>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

const logos = [
	'https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg',
	'https://upload.wikimedia.org/wikipedia/commons/6/64/Warner_Bros_logo.svg',
	'https://upload.wikimedia.org/wikipedia/commons/7/7e/Columbia_Pictures_logo.png',
	'https://upload.wikimedia.org/wikipedia/commons/b/b6/Universal_Pictures_logo.svg',
	'https://upload.wikimedia.org/wikipedia/commons/a/a5/Paramount_Plus.svg',
]
