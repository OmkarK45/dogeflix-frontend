import { GenreType, Movie } from './types'

export const movies: Movie[] = [
	{
		video_id: '123123',
		id: 'asd-2324s-123sdf',
		title: 'The Shawshank Redemption',
		poster_url: 'https://wallpaperaccess.com/full/645154.jpg',
		genre: ['FAMILY', 'ACTION'],
		rating: 9.3,
		duration: 142,
		year: 1994,
		description: 'Two imprisoned',
		cast: [
			'Tim Robbins',
			'Morgan Freeman',
			'Bob Gunton',
			'William Sadler',
			'Clancy Brown',
			'Gil Bellows',
		],
		director: 'Frank Darabont',
		writers: ['Stephen King'],
		imdb_id: 'tt0111161',
	},

	{
		id: 'asd-2324s-123sdf6',
		title: 'The Avengers',
		poster_url:
			'https://cdn.vox-cdn.com/thumbor/kLhMHqhPRHYV2SPs-qOgIw_uO6I=/0x0:1920x1080/1200x800/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/63304028/surprise_marvel_releases_a_new_full_trailer_and_poster_for_avengers_endgame_social.0.jpg',
		genre: ['CRIME', 'DRAMA'],
		rating: 9.2,
		duration: 175,
		year: 1972,
		description:
			'Marvels Avengers assemble as a team to save the world from an intergalactic threat.',
		cast: [
			'Robert Downey Jr.',
			'Chris Evans',
			'Mark Ruffalo',
			'Chris Hemsworth',
			'Scarlett Johansson',
			'Jeremy Renner',
		],
		director: 'Joss Whedon',
		writers: ['Joss Whedon', 'Joe Russo'],
		imdb_id: 'tt0068646',
		video_id: '213123',
	},
	{
		id: 'asd-2324s-123sdf7',
		title: 'Ferdinand',
		poster_url:
			'https://funtasticlife.com/wp-content/uploads/2017/04/Ferdinand-Movie-Poster-horizontal.jpg',
		genre: ['DRAMA'],
		rating: 9.2,
		duration: 175,
		year: 2017,

		description: 'Ferdinand is a movie about ',
		cast: ['Robert Downey Jr.', 'Chris Evans', 'Mark Ruffalo'],
		director: 'Joss Whedon',
		writers: ['Joss Whedon', 'Joe Russo'],
		imdb_id: 'tt0068646',
		video_id: '23123',
	},
]
