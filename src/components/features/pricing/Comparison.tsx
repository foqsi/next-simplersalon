'use client';

import { FadeIn } from '@/components/animations/';

export default function Comparison() {
  return (
    <section className="relative z-0 bg-gray-900 text-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold mb-8 text-center">Why Choose Simpler?</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <FadeIn>
            <div className="border rounded p-6 bg-gray-800 border-blue-500">
              <h4 className="text-xl font-semibold mb-2 text-blue-400">Simpler Salon</h4>
              <ul className="text-sm space-y-1 text-blue-100">
                <li>✔ One-time payment</li>
                <li>✔ Full ownership</li>
                <li>✔ Easy content editing</li>
                <li>✔ No subscriptions</li>
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="border rounded p-6 bg-white/10 backdrop-blur-md border-red-400">
              <h4 className="text-xl font-semibold mb-2 text-red-400">Monthly Site Builders</h4>
              <ul className="text-sm space-y-1 text-red-100">
                <li>✘ Monthly fees forever</li>
                <li>✘ Generic templates</li>
                <li>✘ Limited ownership</li>
                <li>✘ Hidden upgrade costs</li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}