import type { NextPage } from 'next'

import styles from '../styles/Home.module.css'
import useUser from '../lib/useUser'
import fetchJson, { FetchError } from '../lib/fetchJson'
import { useState } from 'react'

const Home: NextPage = () => {
	const [errorMsg, setErrorMsg] = useState('')

	const { mutateUser } = useUser({
		redirectTo: '/profile-sg',
		redirectIfFound: true,
	})

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()

		const body = {
			email: e.currentTarget.email.value,
			password: e.currentTarget.password.value,
		}

		try {
			mutateUser(
				await fetchJson('/api/login', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(body),
					credentials: 'include',
				})
			)
		} catch (error) {
			if (error instanceof FetchError) {
				setErrorMsg(error.data.message)
			} else {
				console.error('An unexpected error happened:', error)
			}
		}
	}

	return (
		<div className={styles.container}>
			<div>login</div>
			<div>Error : {errorMsg}</div>
			<form onSubmit={handleSubmit}>
				<input type="text" placeholder="email" name="email" />
				<input type="text" placeholder="password" name="password" />
				<button type="submit">Submit</button>
			</form>
		</div>
	)
}

export default Home
