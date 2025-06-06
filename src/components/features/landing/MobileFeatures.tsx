'use client';

import { FadeInLeft } from '@/components/animations/';
import GlowCard from '@/components/GlowCard';

export default function Features() {
  return (
    <section className="bg-gray-950 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold animate-slide-up">Why Choose Simpler Salon?</h2>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto animate-fade-in">
          We offer everything small businesses need to own and manage a modern, professional website without ongoing fees.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          { title: 'Full Ownership', desc: 'You pay once. No monthly subscriptions.' },
          { title: 'Easy Editing', desc: 'Update your content without code.' },
          { title: 'Responsive Design', desc: 'Looks great on phones, tablets, and desktops.' },
          { title: 'Gallery & Services', desc: 'Show off your work and update your services.' },
          { title: 'Fast & Secure', desc: 'Your site is optimized for speed and security.' },
          { title: 'Custom Branding', desc: 'Tailored to match your business and style.' },
        ].map((f, i) => (
          <FadeInLeft key={i}>
            <GlowCard className="mb-6  rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-blue-500">{f.title}</h3>
              <p className="text-white text-sm">{f.desc}</p>
            </GlowCard>
          </FadeInLeft>
        ))}
      </div>
    </section>
  );
}