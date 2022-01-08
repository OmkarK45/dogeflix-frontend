export interface Movie {
	id: string
	title: string
	year: number
	description: string
	rating: number
	runtime: number
	genres: string[]
	director: string
	cast: string[]
	poster_url: string
	trailer_url: string
	isDolby: boolean
	is3D: boolean
	isIMAX: boolean
	writers: string[]
	imdb_id: string
	imdb_rating: number
	imdb_votes: number
	imdb_url: string
}
