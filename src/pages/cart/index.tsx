import { Cart } from '~/components/Cart/CartPage'
import { Navbar } from '~/components/Nav/DesktopNav'
import useUser from '~/lib/useUser'

export default function CartPage() {
	const { user } = useUser({ redirectTo: '/' })

	return (
		<>
			<Navbar />
			<Cart />
		</>
	)
}
