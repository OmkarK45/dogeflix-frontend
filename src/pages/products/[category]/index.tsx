import { Navbar } from '~/components/Nav/DesktopNav'
import { CategoryProductsList } from '~/components/Product/CategoryProductList'
import { SEO } from '~/components/SEO'

export default function CategoryProductsListPage() {
	return (
		<>
			<SEO
				title="Dogemart | Shop what the world loves."
				description="We got brand new collection of winter clothes that you will love! Shop now and get 20% OFF."
				image="https://i.imgur.com/nyx2LXF.png"
				cardType="summary_large_image"
				path="/"
			/>
			<Navbar />
			<CategoryProductsList />
		</>
	)
}
