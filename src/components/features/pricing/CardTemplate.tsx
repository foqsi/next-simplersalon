'use client';

import Link from 'next/link';
import GlowCard from '@/components/GlowCard';

interface Props {
  title: string;
  description: string;
  price: string;
  allFeatures: string[];
  includedFeatures: string[];
  buttonText: string;
  buttonLink: string;
}

export default function PricingCardTemplate({
  title,
  description,
  price,
  allFeatures,
  includedFeatures,
  buttonText,
  buttonLink,
}: Props) {
  return (
    <GlowCard className="flex flex-col justify-between h-full w-full max-w-md p-6 text-white text-left"
      glowColorStrong="rgba(1, 1, 1)">
      <div>
        <h2 className="text-2xl font-bold text-blue-400 mb-1">{title}</h2>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="text-5xl font-extrabold text-blue-400 mb-6">{price}</div>

        <ul className="text-sm text-gray-200 space-y-3">
          {allFeatures.map((feature, index) => {
            const included = includedFeatures.includes(feature);
            return (
              <li key={index} className="flex items-start gap-2">
                <span className={included ? 'text-green-400' : 'text-red-500'}>
                  {included ? '✓' : '✕'}
                </span>
                <span className={included ? '' : 'opacity-50 line-through'}>{feature}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-10">
        <Link
          href={buttonLink}
          className="inline-block w-full text-center bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition font-semibold"
        >
          {buttonText}
        </Link>
      </div>
    </GlowCard>
  );
}
