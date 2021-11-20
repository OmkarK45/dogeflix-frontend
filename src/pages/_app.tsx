import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr'
import { Toaster } from 'react-hot-toast'

import fetchJson from '../lib/fetchJson'
import { NProgress } from '~/components/ui/NProgress'
import { toastOptions } from '~/lib/toastOptions'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<SWRConfig
			value={{
				fetcher: fetchJson,
				onError: (err) => {
					console.error(err)
				},
			}}
		>
			<NProgress />
			<Toaster position="bottom-right" toastOptions={toastOptions} />
			<Component {...pageProps} />
		</SWRConfig>
	)
}
export default MyApp
