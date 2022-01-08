import { Navbar } from '~/components/Nav/DesktopNav'
import ReactPlayer from 'react-player'
import { VideoPageLayout } from '~/components/Common/VIdeoPageLayout'

export default function WatchPage() {
	return (
		<div>
			<Navbar />
			<div className="max-w-7xl mx-auto">
				<VideoPageLayout />
			</div>
		</div>
	)
}
