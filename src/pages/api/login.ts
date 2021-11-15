import type { User } from './user'

import { withIronSessionApiRoute } from 'iron-session/next'
// TODO : fix path alias
import { sessionOptions } from '../../lib/session'
import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import cookie, { serialize } from 'cookie'
export default withIronSessionApiRoute(loginRoute, sessionOptions)

/**
 * "code": "SUCCESS",
  "success": true,
  "data": {
    "message": "Login successful",
    "user": {
      "id": "b5fca53b-64c4-406c-a1aa-87213a88a62a",
      "email": "root_user2@gmail.com",
      "name": "root_user1",
      "role": "USER",
      "created_at": "2021-11-12T15:45:16.133Z",
      "update_at": "2021-11-12T15:45:16.133Z"
    }
  }
 * */

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
	const { email, password } = await req.body

	try {
		const response = await axios.post(
			`${process.env.API_URL}/auth/login`,
			{ email, password },
			{ withCredentials: true }
		)
		console.log(response.headers)

		const user = {
			isLoggedIn: true,
			login: response.data.data,
			avatarUrl: 'OK',
		} as User

		req.session.user = user
		console.log(response.headers)
		res.setHeader('Set-Cookie', response.headers['set-cookie'] as any)

		await req.session.save()

		res.json(user)
	} catch (error) {
		console.log('[ERROR IN LOGIN ROUTE]:', error)
		res.status(500).json({ message: (error as Error).message })
	}
}
