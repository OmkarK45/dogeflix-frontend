import axios, { AxiosRequestConfig } from 'axios'

export const BASE_URL = process.env.NEXT_PUBLIC_API_URL

axios.defaults.withCredentials = true

export const fetcher = (
	url: string,
	options: AxiosRequestConfig<any> | undefined,
	token?: string
) => {
	return axios
		.get(BASE_URL + url, {
			...options,
			withCredentials: true,
		})
		.then((res) => res.data.data)
}

export const mutationFn = (
	url: string,
	data: any,
	options: AxiosRequestConfig<any> | undefined
) =>
	axios
		.post(url, data, {
			...options,
			withCredentials: true,
		})
		.then((res) => res.data)

export default async function fetchJson<JSON = unknown>(
	input: RequestInfo,
	init?: RequestInit
): Promise<JSON> {
	const response = await fetch(input, {
		...init,
		credentials: 'include',
	})

	// if the server replies, there's always some data in json
	// if there's a network error, it will throw at the previous line
	const data = await response.json()

	// response.ok is true when res.status is 2xx
	// https://developer.mozilla.org/en-US/docs/Web/API/Response/ok
	if (response.ok) {
		return data
	}

	throw new FetchError({
		message: response.statusText,
		response,
		data,
	})
}

export class FetchError extends Error {
	response: Response
	data: {
		message: string
	}
	constructor({
		message,
		response,
		data,
	}: {
		message: string
		response: Response
		data: {
			message: string
		}
	}) {
		// Pass remaining arguments (including vendor specific ones) to parent constructor
		super(message)

		// Maintains proper stack trace for where our error was thrown (only available on V8)
		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, FetchError)
		}

		this.name = 'FetchError'
		this.response = response
		this.data = data ?? { message: message }
	}
}
