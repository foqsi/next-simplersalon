'use client';

import ParticlesBackground from '@/components/ParticlesBackground';

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col justify-center items-center text-white text-center px-4 bg-gradient-to-br from-gray-800 to-gray-700">
      {/* Particle Background */}
      <ParticlesBackground />

      {/* Animated Blobs */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500 rounded-full mix-blend-lighten blur-3xl opacity-20 top-[-100px] left-[-100px] animate-blob delay duration-2" />
      <div className="absolute w-[500px] h-[500px] bg-purple-500 rounded-full mix-blend-lighten blur-3xl opacity-20 top-0 right-[-150px] animate-blob delay-1s" />
      <div className="absolute w-[600px] h-[600px] bg-pink-500 rounded-full mix-blend-lighten blur-3xl opacity-20 bottom-[-100px] left-[50%] transform -translate-x-1/2 animate-blob delay-2s" />

      {/* Hero Content */}
      <div className="z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up text-gradient bg-gradient-to-r from-white via-white to-blue-500 bg-clip-text text-transparent">
          Own Your Salon Website—No Monthly Fees
        </h1>
        <p className="max-w-xl mx-auto text-lg text-gray-200 animate-fade-in">
          One-time payment. Full ownership. Simply update your content whenever you want.
        </p>
        <div className="mt-8 flex justify-center animate-slide-up">
          <a
            href="/pricing"
            className="bg-blue-500 text-white px-6 py-3 rounded shadow hover:bg-blue-600 transition transform hover:scale-105"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
}
