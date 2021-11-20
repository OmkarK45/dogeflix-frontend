import { GetServerSideProps, GetStaticProps, NextPageContext } from 'next'
import { Navbar } from '~/components/Nav/DesktopNav'
import { ProductDetails } from '~/components/Product/ProductDetails'
import { fetcher } from '~/lib/fetchJson'
import { ProductType } from '~/types'

export default function ProductDetailsPage({
	product,
}: {
	product: ProductType
}) {
	return (
		<>
			<Navbar />
			<ProductDetails product={product} />
		</>
	)
}

ProductDetailsPage.getInitialProps = async (ctx: NextPageContext) => {
	const { id } = ctx.query

	const product = await fetcher<ProductType>(`/api/products/${id}`, {
		method: 'GET',
	})

	console.log('called')
	return {
		product,
	}
}
