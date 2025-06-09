'use client';

import PricingCardTemplate from './CardTemplate';

const allFeatures = [
  'Responsive, mobile-optimized website',
  'Admin dashboard to update services and gallery',
  'No monthly fees — one flat rate',
  'Domain connection and launch support',
  'Site customization (Colors, UI)',
  'Automated appointment emails or texts',
  'Search engine optimization (SEO)',
  'Optimized speed, image delivery & meta tags for Google',
  'Tailored features and design based on your needs',
  'Priority developer support & quick turnaround',
  '1 month of post-launch updates & maintenance included',
  'Initial content setup (images, text, services) handled for you',
];


export default function PricingCard() {
  return (
    <section className="pt-4 pb-16 px-4 bg-gradient-to-b from-gray-800 to-blue-950 text-white flex flex-col md:flex-row justify-center items-center gap-8">
      <PricingCardTemplate
        title="One-Time Purchase"
        description="Everything you need for one flat price."
        price="$200"
        allFeatures={allFeatures}
        includedFeatures={[
          'Responsive, mobile-optimized website',
          'Admin dashboard to update services and gallery',
          'No monthly fees — one flat rate',
          'Domain connection and launch support',
        ]}
        buttonText="Get Started"
        buttonLink="/otp"
      />

      <PricingCardTemplate
        title="Custom Purchase Package"
        description="Includes additional support"
        price="$400+"
        allFeatures={allFeatures}
        includedFeatures={allFeatures} // all included
        buttonText="Get Started"
        buttonLink="/cpp"
      />

    </section>
  );
}
