import axios, { AxiosRequestConfig } from 'axios'

export const BASE_URL = process.env.NEXT_PUBLIC_API_URL

const ax = axios.create({
	baseURL: BASE_URL,
	withCredentials: true,
})

export const fetcher = (url: string, init?: RequestInit) => {
	console.log(BASE_URL + url)
	return fetch(BASE_URL + url, {
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
		},
		method: 'GET',
		...init,
	}).then((res) => res.json())
}

export const mutationFn = (url: string, data: any, options?: RequestInit) => {
	return fetch(BASE_URL + url, {
		method: 'POST',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
		...options,
	}).then((res) => res.json())
}

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
