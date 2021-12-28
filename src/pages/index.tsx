import { HeroSection } from '~/components/Hero'
import { Navbar } from '~/components/Nav/DesktopNav'
import { SEO } from '~/components/SEO'

export default function LandingPage() {
	return (
		<>
			<SEO
				title="Dogemart | Shop what the world loves."
				description="We got brand new collection of winter clothes that you will love! Shop now and get 20% OFF."
				image="https://i.imgur.com/nyx2LXF.png"
				cardType="summary_large_image"
				path="/"
			/>
			<Navbar />
			{/* probably add carousel here as well for now, create the MVP */}
			<HeroSection />
		</>
	)
}
