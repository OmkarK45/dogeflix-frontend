import { SVGProps } from 'react'

export function Logo(props: SVGProps<SVGSVGElement>) {
	return (
		<svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
			<path
				fill="currentColor"
				d="M12 20h8v2h-8C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.956 9.956 0 0 1-2 6h-2.708A8 8 0 1 0 12 20zm0-10a2 2 0 1 1 0-4a2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4a2 2 0 0 1 0 4zm8 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4a2 2 0 0 1 0 4z"
			></path>
		</svg>
	)
}
