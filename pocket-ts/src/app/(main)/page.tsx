import { AboutUs } from '@/components/AboutUs'
import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Stats } from '@/components/Stats'
import { TrustBadges } from '@/components/TrustBadges'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <PrimaryFeatures />
      <SecondaryFeatures />
      <TrustBadges />
      <AboutUs />
      <CallToAction />
      <Reviews />
      <Pricing />
      <Faqs />
    </>
  )
}
