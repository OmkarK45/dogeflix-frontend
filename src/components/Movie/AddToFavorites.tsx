import { Button } from '../ui/Button/index'
import { HiHeart, HiPlus } from 'react-icons/hi'

export function AddToFavorites() {
	return (
		<div className="flex space-x-2">
			<Button size="xl" variant="ghost">
				<span className="flex text-pink-800 dark:text-pink-200 items-center space-x-2">
					<HiHeart className="w-5 h-5" />
					<p>Add to favorites</p>
				</span>
			</Button>
			<Button size="xl" variant="ghost">
				<span className="flex text-pink-800 dark:text-pink-200 items-center space-x-2">
					<HiPlus className="w-5 h-5" />
					<p>Add to playlist</p>
				</span>
			</Button>
		</div>
	)
}
