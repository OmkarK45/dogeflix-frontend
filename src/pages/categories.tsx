import { HiOutlineFilm, HiOutlineMusicNote } from 'react-icons/hi'
import { PageHeader } from '~/components/Common/PageHeader'
import { Navbar } from '~/components/Nav/DesktopNav'
import { GenreType } from '~/lib/types'

import {
	GiMagnifyingGlass,
	GiPistolGun,
	GiTank,
	GiTreasureMap,
} from 'react-icons/gi'
import React from 'react'
import {
	ConfettiIcon,
	IcBaselineFamilyRestroom,
	Icons8Fantasy,
	MdiDramaMasks,
	MdiPistol,
	RaphaelHistory,
} from '~/components/ui/Icones'
import { AiOutlineHeart, AiOutlineSmile } from 'react-icons/ai'
import { MdOutlineTheaterComedy, MdSportsFootball } from 'react-icons/md'
import { BiBookBookmark } from 'react-icons/bi'
import { BiGhost } from 'react-icons/bi'
import { RiAliensFill, RiTvLine } from 'react-icons/ri'
import { MovieCard } from '~/components/Movie/MovieCard'
import { IconType } from 'react-icons/lib'
import { Link } from '~/components/ui/Link'

export default function Categories() {
	return (
		<>
			<Navbar />
			<PageHeader title="The DogeFlix Catelogue." />
			<div className="mx-auto container md:max-w-7xl ">
				<div className="container px-2 md:px-0 row mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 pt-6 gap-8">
					{MOVIE_CATEGORIES.map((category, idx) => {
						return (
							<Link
								className="no-underline"
								href={`/${category}`}
								key={category}
							>
								<MovieCard
									icon={MOVIE_ICONS[category]}
									hideShare
									title={category}
								/>
							</Link>
						)
					})}
				</div>
			</div>
		</>
	)
}

export const MOVIE_CATEGORIES: GenreType[] = [
	'ADVENTURE',
	'ACTION',
	'ANIMATION',
	'BIOGRAPHY',
	'COMEDY',
	'CRIME',
	'DOCUMENTARY',
	'DRAMA',
	'FAMILY',
	'FANTASY',
	'HISTORY',
	'HORROR',
	'MUSIC',
	'MUSICAL',
	'MYSTERY',
	'ROMANCE',
	'SCI_FI',
	'TV_MOVIE',
	'THRILLER',
	'WAR',
	'WESTERN',
	'SPORT',
]

const MOVIE_ICONS: Record<GenreType, IconType> = {
	MOVIE: HiOutlineFilm,
	ADVENTURE: GiTreasureMap,
	ACTION: GiPistolGun,
	ANIMATION: ConfettiIcon,
	BIOGRAPHY: AiOutlineSmile,
	COMEDY: MdOutlineTheaterComedy,
	CRIME: MdiPistol,
	DOCUMENTARY: BiBookBookmark,
	DRAMA: MdiDramaMasks,
	FAMILY: IcBaselineFamilyRestroom,
	FANTASY: Icons8Fantasy,
	HISTORY: RaphaelHistory,
	HORROR: BiGhost,
	MUSIC: HiOutlineMusicNote,
	MUSICAL: HiOutlineMusicNote,
	MYSTERY: GiMagnifyingGlass,
	ROMANCE: AiOutlineHeart,
	SCI_FI: RiAliensFill,
	SPORT: MdSportsFootball,
	TV_MOVIE: RiTvLine,
	THRILLER: HiOutlineFilm,
	WAR: GiTank,
	WESTERN: HiOutlineFilm,
}
