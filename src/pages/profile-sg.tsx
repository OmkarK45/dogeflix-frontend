import useUser from '../lib/useUser'
import Link from 'next/link'
import useSWR from 'swr'
import { fetcher } from '../lib/fetchJson'

export default function SgProfile() {
	const { user } = useUser({
		redirectTo: '/login',
	})

	const { data, error } = useSWR('/auth/user-info', fetcher)
	if (error) return <div>failed to load</div>
	if (!data) return <div>loading...</div>

	return (
		<div>
			<h1>Your GitHub profile</h1>
			<h2>
				This page uses{' '}
				<Link href="https://nextjs.org/docs/basic-features/pages#static-generation-recommended">
					Static Generation (SG)
				</Link>{' '}
				and the <Link href="/api/user">/api/user</Link> route (using{' '}
				<Link href="https://github.com/vercel/swr">vercel/SWR</Link>)
			</h2>
			{user && (
				<>
					<p style={{ fontStyle: 'italic' }}>
						Public data, from , reduced to `login` and `avatar_url`.
					</p>
					{process.env.NEXT_PUBLIC_API_URL}

					<pre>{JSON.stringify(data, null, 2)}</pre>
					<pre>{JSON.stringify(user, null, 2)}</pre>
				</>
			)}
		</div>
	)
}
