'use client';

export default function CTA() {
  return (
    <section className="bg-gradient-to-b from-blue-950 to-blue-900 text-white text-center py-16 px-4">
      <h3 className="text-3xl font-bold mb-4">Ready to Own Your Website?</h3>
      <p className="mb-6 text-lg">No subscriptions. Just you and your brand — forever.</p>
      <a
        href="/request-demo"
        className="bg-white text-blue-600 px-6 py-3 rounded hover:bg-gray-300 transition"
      >
        Claim Your Spot
      </a>
    </section>
  );
}