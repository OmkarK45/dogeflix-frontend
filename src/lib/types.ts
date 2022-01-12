import { HttpStatus } from './statusCodes'

export interface Movie {
	id: string
	title: string
	year: number
	description: string
	rating: number
	duration: number
	genre: GenreType[]
	director: string
	cast: string[]
	poster_url: string
	writers: string[]
	imdb_id: string
	video_id: string
	plot?: string
	release?: string
}

interface PageInfo {
	totalCount: number
	totalPage: number
	currentPage: number
	next: {
		page: number
		limit: number
	}
}

export interface PaginatedApiResponse<T extends any = any> {
	data: T[]
	pageInfo: PageInfo
	success: boolean
	code: typeof HttpStatus
}

export interface ApiResponse<T extends any = any> {
	data: T
	success: boolean
	code: typeof HttpStatus
}

export type GenreType =
	| 'MOVIE'
	| 'ADVENTURE'
	| 'ACTION'
	| 'ANIMATION'
	| 'BIOGRAPHY'
	| 'COMEDY'
	| 'CRIME'
	| 'DOCUMENTARY'
	| 'DRAMA'
	| 'FAMILY'
	| 'FANTASY'
	| 'HISTORY'
	| 'HORROR'
	| 'MUSIC'
	| 'MUSICAL'
	| 'MYSTERY'
	| 'ROMANCE'
	| 'SCI_FI'
	| 'TV_MOVIE'
	| 'THRILLER'
	| 'WAR'
	| 'WESTERN'
	| 'SPORT'
