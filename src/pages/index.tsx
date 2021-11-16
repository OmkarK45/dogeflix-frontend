import { HeroSection } from '~/components/Hero'
import { Navbar } from '~/components/Nav/DesktopNav'

export default function LandingPage() {
	return (
		<>
			<Navbar />
			{/* probably add carousel here as well for now, create the MVP */}
			<HeroSection />
		</>
	)
}
