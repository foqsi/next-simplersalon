import Header from '@/components/features/pricing/Header';
import PricingCard from '@/components/features/pricing/PricingCard';
import Comparison from '@/components/features/pricing/Comparison';
import FAQ from '@/components/features/pricing/FAQ';
import CTA from '@/components/features/pricing/CallToAction';
import { FadeIn, FadeInDown } from '@/components/animations/';

export default function PricingPage() {
  return (
    <main>
      <FadeIn>
        <Header />
      </FadeIn>
      <FadeIn delay={0.3}>
        <PricingCard />
      </FadeIn>
      <Comparison />
      <FAQ />
      <FadeInDown>
        <CTA />
      </FadeInDown>
    </main>
  );
}
