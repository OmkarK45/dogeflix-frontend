import useUser from '../lib/useUser'

export default function SgProfile() {
	const { user } = useUser({
		redirectTo: '/login',
	})

	return (
		<div>
			<h1>Your GitHub profile</h1>
			<h2>
				This page uses{' '}
				<a href="https://nextjs.org/docs/basic-features/pages#static-generation-recommended">
					Static Generation (SG)
				</a>{' '}
				and the <a href="/api/user">/api/user</a> route (using{' '}
				<a href="https://github.com/vercel/swr">vercel/SWR</a>)
			</h2>
			{user && (
				<>
					<p style={{ fontStyle: 'italic' }}>
						Public data, from , reduced to `login` and `avatar_url`.
					</p>

					<pre>{JSON.stringify(user, null, 2)}</pre>
				</>
			)}
		</div>
	)
}
