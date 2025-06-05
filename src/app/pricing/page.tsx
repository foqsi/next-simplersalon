import Header from '@/components/features/pricing/Header';
import PricingCard from '@/components/features/pricing/PricingCard';
import CTA from '@/components/features/pricing/CallToAction';
import { FadeInDown } from '@/components/animations/';
import ParticlesBackground from '@/components/ParticlesBackground';

export default function PricingPage() {
  return (
    <main className='relative z-0 bg-gray-800'>
      <ParticlesBackground />
      <FadeInDown>
        <Header />
        <PricingCard />
        <CTA />
      </FadeInDown>
    </main>
  );
}
