'use client';

export default function PricingCard() {
  return (
    <section className="py-16 px-4 bg-gray-950 text-white">
      <div className="max-w-xl mx-auto text-center border border-gray-700 rounded-lg shadow-xl p-8 bg-white/10 backdrop-blur-md">
        <h2 className="text-3xl font-bold mb-2">One-Time Purchase</h2>
        <p className="text-gray-300 mb-6">Everything you need for one flat price.</p>
        <div className="text-5xl font-extrabold text-blue-400 mb-4">$299</div>
        <ul className="text-sm text-gray-200 space-y-2 mb-6">
          <li>✔ Custom, mobile-friendly website</li>
          <li>✔ Admin panel to manage content</li>
          <li>✔ SEO optimized</li>
          <li>✔ Fast and secure hosting</li>
          <li>✔ No ongoing monthly charges</li>
        </ul>
        <a
          href="#contact"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}