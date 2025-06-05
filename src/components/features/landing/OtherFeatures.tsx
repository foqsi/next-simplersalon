'use client';

import Image from 'next/image';
import { FadeIn } from '@/components/animations';

const features = [
  {
    title: 'Hosting & Performance',
    items: [
      'Fast, secure hosting included',
      'Performance-optimized sites',
      'SEO & accessibility ready',
    ],
    image: '/images/performance.png',
  },
  {
    title: 'Backend Support',
    items: [
      'Database integration for services or appointments',
      'Contact forms + email notifications',
      'Custom API or third-party integrations',
    ],
    image: '/images/database.png',
  },
  {
    title: 'Ongoing Expertise',
    items: [
      'Direct support from a developer (not a chatbot)',
      'Scalable, modern tech stack',
      'Quick updates or feature add-ons when needed',
    ],
    image: '/images/support.png',
  },
];

export default function OtherFeatures() {
  return (
    <section className="border-t border-gray-800 bg-gradient-to-bl from-gray-950 via-gray-950 to-gray-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">More Than a Website</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              When you work with Simpler Salon, you’re getting a site — plus hosting, database help, and direct developer support.
            </p>
          </FadeIn>
        </div>

        <div className="space-y-16">
          {features.map((group, i) => (
            <FadeIn key={i} delay={i * 0.2}>
              <div className="grid md:grid-cols-2 gap-8 items-center bg-gray-800 border border-gray-700 rounded-xl p-6 shadow">
                {/* Text Content */}
                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-4">{group.title}</h3>
                  <ul className="space-y-2 text-sm text-gray-300 list-disc list-inside">
                    {group.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Optional Image */}
                {group.image && (
                  <div className="relative w-full h-48 md:h-64">
                    <Image
                      src={group.image}
                      alt={group.title}
                      fill
                      className="object-contain rounded-md"
                    />
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
