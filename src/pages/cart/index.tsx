import { NextPageContext } from 'next'
import { Cart } from '~/components/Cart/CartPage'
import { Navbar } from '~/components/Nav/DesktopNav'
import { fetcher } from '~/lib/fetchJson'
import useUser from '~/lib/useUser'
import { CartItem } from '~/types'

export default function CartPage({ cart }: { cart: CartItem[] }) {
	const { user } = useUser({ redirectIfFound: false, redirectTo: '/' })
	return (
		<>
			<Navbar />
			<Cart cartItems={cart} />
		</>
	)
}

CartPage.getInitialProps = async (ctx: NextPageContext) => {
	try {
		const cart = await fetcher<CartItem[]>('/api/cart', {
			method: 'GET',
			headers: {
				cookie: ctx.req?.headers.cookie ?? '',
			},
		})
		return {
			cart,
		}
	} catch (error) {
		return {
			cart: [],
		}
	}
}
