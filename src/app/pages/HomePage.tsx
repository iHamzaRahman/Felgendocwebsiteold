import { Hero } from '../components/Hero';
import { TrustStats } from '../components/TrustStats';
import { Services } from '../components/Services';
import { LeasingSection } from '../components/LeasingSection';
import { BeforeAfterGallery } from '../components/BeforeAfterGallery';
import { Testimonials } from '../components/Testimonials';
import { WhyUs } from '../components/WhyUs';
import { CTABanner } from '../components/CTABanner';
import { Contact } from '../components/Contact';

export function HomePage() {
  return (
    <>
      <Hero />
      <TrustStats />
      <Services />
      <LeasingSection />
      <BeforeAfterGallery />
      <Testimonials />
      <WhyUs />
      <CTABanner />
      <Contact />
    </>
  );
}
