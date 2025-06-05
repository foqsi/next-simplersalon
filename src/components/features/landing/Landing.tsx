// app/page.tsx or app/landing/page.tsx
import Hero from './Hero';
import Features from './Features';
import MobileFeatures from './MobileFeatures';
import CTA from './CallToAction';
import Comparison from './Comparison';
import FAQ from './FAQ';
import { FadeIn } from '@/components/animations/';
import OtherFeatures from './OtherFeatures';

export default function LandingPage() {
  return (
    <main className='bg-gray-800'>
      <FadeIn>
        <Hero />
      </FadeIn>
      <FadeIn>
        <div className='hidden md:flex'>
          <Features />
        </div>
        <div className='md:hidden'>
          <MobileFeatures />
        </div>
        <OtherFeatures />
        <Comparison />
        <FAQ />
      </FadeIn>
      <FadeIn delay={0.3}>
        <CTA />
      </FadeIn>
    </main>
  );
}
