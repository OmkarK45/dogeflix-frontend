import {
	HiHeart,
	HiOutlineChevronDown,
	HiOutlineHome,
	HiOutlineLogout,
	HiOutlineShoppingCart,
} from 'react-icons/hi'
import useUser from '~/lib/useUser'
import { Menu, MenuItem } from '../ui/Dropdown'

export function ProfileDropdown() {
	const { user } = useUser({
		redirectIfFound: false,
	})

	return (
		<Menu
			dropdown={
				<>
					<MenuItem
						href={'/products'}
						icon={<HiOutlineHome className="w-5 h-5" />}
					>
						Home
					</MenuItem>
					<MenuItem
						href={`/cart`}
						icon={<HiOutlineShoppingCart className="w-5 h-5" />}
					>
						My Cart
					</MenuItem>
					<MenuItem href={`/wishlist`} icon={<HiHeart className="w-5 h-5" />}>
						My wishlist
					</MenuItem>
					<MenuItem icon={<HiOutlineLogout className="w-5 h-5" />}>
						Signout
					</MenuItem>
				</>
			}
			dropdownClassName="mr-5 mt-6"
		>
			<span className="font-medium capitalize text-base flex items-center space-x-1">
				<HiOutlineChevronDown /> <p>Hi, {user?.data.user?.name}!</p>
			</span>
		</Menu>
	)
}
