import Hero from '@/components/Hero'
import Services from '@/components/Services'
import ProcessSteps from '@/components/ProcessSteps'
import Reviews2GIS from '@/components/Reviews2GIS'
import PricingSection from '@/components/PricingSection'
import FAQ from '@/components/FAQ'
import ContactSection from '@/components/ContactSection'
import CallToAction from '@/components/CallToAction'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <ProcessSteps />
      <Reviews2GIS />
      <PricingSection />
      <FAQ />
      <ContactSection />
      <CallToAction />
    </main>
  )
}