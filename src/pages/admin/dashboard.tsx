/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
	CalendarIcon,
	ChartBarIcon,
	FolderIcon,
	HomeIcon,
	InboxIcon,
	MenuIcon,
	UsersIcon,
	XIcon,
	PlusIcon,
} from '@heroicons/react/outline'
import { Heading } from '~/components/ui/Heading'
import { TabbedLayout } from '~/components/ui/TabbedLayout'
import { TrashIcon, ViewListIcon } from '@heroicons/react/solid'

const navigation = [
	{ name: 'All Products', href: '#', icon: HomeIcon, current: true },
	{ name: 'Add Product', href: '#', icon: PlusIcon, current: false },
	{ name: 'Projects', href: '#', icon: FolderIcon, current: false },
]

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
}

export default function Dashboard() {
	const [sidebarOpen, setSidebarOpen] = useState(false)

	return (
		<div className="h-screen  overflow-hidden bg-white">
			<div className="max-w-7xl mt-20 mx-auto">
				<div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
					<TabbedLayout
						isTabbed={true}
						navigation={[
							{
								component: <div>Product List</div>,
								icon: ViewListIcon,
								id: '',
								name: 'Product List',
							},
							{
								component: <div>Add Product Form</div>,
								icon: PlusIcon,
								id: '',
								name: 'Add a product',
							},
							{
								component: <div>Remove Product Form</div>,
								icon: TrashIcon,
								id: '',
								name: 'Remove Product',
							},
						]}
					/>
				</div>
			</div>
		</div>
	)
}
