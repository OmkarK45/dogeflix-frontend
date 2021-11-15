import useUser from '../lib/useUser'
import useSWR from 'swr'
import { fetcher } from '../lib/fetchJson'

export default function SgProfile() {
	const { user } = useUser({
		redirectTo: '/',
	})

	const { data, error } = useSWR('/auth/user-info', fetcher)

	return (
		<div>
			{user && (
				<>
					{process.env.NEXT_PUBLIC_API_URL}
					<pre>{JSON.stringify(user, null, 2)}</pre>
					<pre>{JSON.stringify(data, null, 2)}</pre>
				</>
			)}
		</div>
	)
}
