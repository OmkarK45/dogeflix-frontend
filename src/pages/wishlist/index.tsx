import { NextPageContext } from 'next'
import { Navbar } from '~/components/Nav/DesktopNav'
import { Wishlist } from '~/components/Wishlist/WishlistPage'
import { fetcher } from '~/lib/fetchJson'
import useUser from '~/lib/useUser'
import { WishlistItem } from '~/types'

export default function WishlistPage({
	wishlistItems,
}: {
	wishlistItems: WishlistItem[]
}) {
	const { user } = useUser({ redirectIfFound: false, redirectTo: '/' })

	return (
		<>
			<Navbar />
			<Wishlist wishlistItems={wishlistItems} />
		</>
	)
}

WishlistPage.getInitialProps = async (ctx: NextPageContext) => {
	try {
		const wishlistItems = await fetcher<WishlistItem[]>('/api/wishlist', {
			method: 'GET',
			headers: {
				cookie: ctx.req?.headers.cookie ?? '',
			},
		})
		return {
			wishlistItems,
		}
	} catch (error) {
		return {
			wishlistItems: null,
		}
	}
}
