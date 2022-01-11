import { Button } from '../ui/Button'

export function MovieReactions() {
	return (
		<>
			<Button
				variant="ghost"
				size="sm"
				className="border border-gray-300 dark:border-gray-800 !px-3 py-1 !rounded-full"
			>
				<span className="flex items-center">
					<img
						src="https://cdn.frankerfacez.com/emoticon/487501/4"
						alt="I like this"
						className="w-6 h-6 block"
					/>
				</span>
				<p className="ml-2">99</p>
			</Button>
			<Button
				variant="ghost"
				size="sm"
				className="border border-gray-300 dark:border-gray-800 !px-3 py-1 !rounded-full"
			>
				<span className="flex items-center">
					<img
						src="https://cdn.frankerfacez.com/emoticon/451760/1"
						alt="I like this"
						className="w-6 h-6 block"
					/>
				</span>
				<p className="ml-2">99</p>
			</Button>
			<Button
				variant="ghost"
				size="sm"
				className="border border-gray-300 dark:border-gray-800 !px-3 py-1 !rounded-full"
			>
				<span className="flex items-center">
					<img
						src="https://cdn.frankerfacez.com/emoticon/381875/4"
						alt="I like this"
						className="w-6 h-6 block"
					/>
				</span>
				<p className="ml-2">99</p>
			</Button>
			<Button
				variant="ghost"
				size="sm"
				className="border border-gray-300 dark:border-gray-800 !px-3 py-1 !rounded-full"
			>
				<span className="flex items-center">
					<img
						src="https://cdn.discordapp.com/emojis/529195628669173761.webp?size=128&quality=lossless"
						alt="I like this"
						className="w-6 h-6 block"
					/>
				</span>
				<p className="ml-2">99</p>
			</Button>
		</>
	)
}
