import useUser from '../lib/useUser'

export default function Welcome() {
	const { user } = useUser({
		redirectTo: '/login',
	})

	return <div>Welcome {JSON.stringify(user, null, 2)}</div>
}
