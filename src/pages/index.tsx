import { Footer } from '~/components/Common/Footer'
import { HeroSection } from '~/components/Hero'
import { CTA } from '~/components/Hero/CTA'
import { Logos } from '~/components/Hero/Logos'
import { Navbar } from '~/components/Nav/DesktopNav'
import { SEO } from '~/components/SEO'
import { GradientBar } from '~/components/ui/GradientBar'

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
				<HeroSection />
			</div>
			<Logos />
			<div className="my-12">
				<CTA />
			</div>
		</>
	)
}
