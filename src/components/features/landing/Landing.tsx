// app/page.tsx or app/landing/page.tsx
import Hero from './Hero';
import Features from './Features';
import MobileFeatures from './MobileFeatures';
import CTA from './CallToAction';
import { FadeIn } from '@/components/animations/';

export default function LandingPage() {
  return (
    <main>
      <FadeIn>
        <Hero />
      </FadeIn>
      <FadeIn delay={0.3}>
        <div className='hidden md:flex'>
          <Features />
        </div>
        <div className='md:hidden'>
          <MobileFeatures />
        </div>
      </FadeIn>
      <FadeIn delay={0.3}>
        <CTA />
      </FadeIn>
    </main>
  );
}
