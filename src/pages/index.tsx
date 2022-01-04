import { HeroSection } from '~/components/Hero'
import { Navbar } from '~/components/Nav/DesktopNav'
import { SEO } from '~/components/SEO'

export default function LandingPage() {
	return (
		<>
			<SEO
				title="DogeFlix | Home of trailers."
				description="We got brand new collection of winter clothes that you will love! Shop now and get 20% OFF."
				image="https://i.imgur.com/nyx2LXF.png"
				cardType="summary_large_image"
				path="/"
			/>
			<div className="hero-bg bg-[#0F003A]">
				<Navbar />
				{/* probably add carousel here as well for now, create the MVP */}
				<HeroSection />
			</div>
			<div>ok</div>
		</>
	)
}
