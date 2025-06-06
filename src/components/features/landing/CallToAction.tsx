'use client';

export default function CallToAction() {
  return (
    <section className="border-t border-blue-900 bg-gradient-to-b from-blue-950 to-blue-900 text-white text-center py-20 px-6 shadow-inner">
      <h2 className="text-3xl font-bold mb-4 animate-fade-in">Ready to Get Started?</h2>
      <p className="text-lg mb-6 max-w-2xl mx-auto animate-fade-in delay-300">
        Let us help you own your website with zero hassle. Pay once and take full control.
      </p>
      <a
        href="/request-demo"
        className="bg-white text-blue-700 px-6 py-3 rounded font-bold shadow-lg hover:bg-gray-300 transition transform hover:scale-105"
      >
        Book Your Demo
      </a>
    </section>
  );
}