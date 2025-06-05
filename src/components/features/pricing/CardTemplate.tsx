'use client';

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
    <div className="w-full md:w-[380px] flex flex-col justify-between border border-gray-700 rounded-lg shadow-xl p-8 bg-white/10 backdrop-blur-md text-center transform transition duration-300 ease-in-out hover:scale-105 will-change-transform h-[450px]">
      <div>
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
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
    </div>
  );
}
