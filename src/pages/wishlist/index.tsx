import { Navbar } from '~/components/Nav/DesktopNav'
import { Wishlist } from '~/components/Wishlist/WishlistPage'
import useUser from '~/lib/useUser'

export default function WishlistPage() {
	const { user } = useUser({
		redirectTo: '/',
	})
	return (
		<>
			<Navbar />
			<Wishlist />
		</>
	)
}
