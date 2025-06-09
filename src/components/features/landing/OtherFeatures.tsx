'use client';

import Image from 'next/image';
import { FadeIn } from '@/components/animations';

const features = [
  {
    title: 'Free Consultation',
    items: [
      `Honest feedback - if my service isn't the right fit, I'll tell you.`,
      'Websites built with performance and SEO in mind.',
      'No-pressure planning tailored to your goals.',
    ],
    image: '/oneonone.png',
  },
  {
    title: 'Backend Support',
    items: [
      'Database integration for services or appointments.',
      'Contact forms + email alerts.',
      'Custom API or third-party integrations tailored to your needs.',
    ],
    image: '/api.png',
  },
  {
    title: 'Ongoing Expertise',
    items: [
      'Direct support from a developer - No middleman or AI.',
      'Scalable, modern tech stack',
      'Quick updates or feature add-ons when needed (may be extra costs)',
    ],
    image: '/support.png',
  },
];

export default function OtherFeatures() {
  return (
    <section className="border-t border-gray-800 bg-gradient-to-bl from-gray-950 via-gray-950 to-gray-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gradient bg-gradient-to-r from-blue-500 to-white bg-clip-text text-transparent">More Than a Website</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mt-4">
              When you work with Simpler Salon, you’re getting a site — plus hosting, database help, and direct developer support.
            </p>
          </FadeIn>
        </div>

        <div className="space-y-16">
          {features.map((group, i) => (
            <div
              key={i}
              className={`flex flex-col-reverse md:flex-row ${i % 2 === 1 ? 'md:flex-row-reverse' : ''
                } items-center gap-10 md:gap-16 py-12`}
            >
              {/* Text Content */}
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-blue-500 mb-4">{group.title}</h3>
                <ul className="space-y-2 text-base text-gray-200">
                  {group.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✔</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className="relative w-full max-w-[300px] aspect-square">
                <Image
                  src={group.image}
                  alt={group.title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
