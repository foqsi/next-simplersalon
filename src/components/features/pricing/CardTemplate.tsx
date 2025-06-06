'use client';

import GlowCard from '@/components/GlowCard';
import Link from 'next/link';

interface Props {
  title: string;
  description: string;
  price: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
}

export default function PricingCardTemplate({
  title,
  description,
  price,
  features,
  buttonText,
  buttonLink,
}: Props) {
  return (
    <GlowCard className='text-center mx-auto hover:scale-105 max-w-[420px]'>
      <div>
        <h2 className="text-2xl font-bold mb-2 text-blue-400">{title}</h2>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="text-5xl font-extrabold text-blue-400 mb-6">{price}</div>
        <ul className="text-sm text-gray-200 space-y-2 text-left mx-auto max-w-[250px]">
          {features.map((feature, index) => (
            <li key={index}>✓ {feature}</li>
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <Link
          href={buttonLink}
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition font-medium"
        >
          {buttonText}
        </Link>
      </div>
    </GlowCard>
  );
}
