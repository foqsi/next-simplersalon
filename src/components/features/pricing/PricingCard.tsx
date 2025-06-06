'use client';

import PricingCardTemplate from './CardTemplate';

export default function PricingCard() {
  return (
    <section className="pt-4 pb-16 px-4 bg-gradient-to-b from-gray-800 to-blue-950 text-white flex flex-col md:flex-row justify-center gap-8">
      <PricingCardTemplate
        title="One-Time Purchase"
        description="Everything you need for one flat price."
        price="$200"
        features={[
          'Custom, mobile-friendly website',
          'Admin panel to manage content',
          'No ongoing monthly charges',
          'Domain setup',
        ]}
        buttonText="Get Started"
        buttonLink="/otp"
      />
      <PricingCardTemplate
        title="Custom Purchase Package"
        description="Includes additional support"
        price="$400+"
        features={[
          'Everything in One-Time Purchase',
          'Appointment confirmation automation',
          'SEO Optimization',
          'Additional customization'
        ]}
        buttonText="Talk to Us"
        buttonLink="/cpp"
      />
    </section>
  );
}
