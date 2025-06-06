'use client';

export default function Header() {
  return (
    <section className="text-center pt-16 px-4 bg-gradient-to-b from-gray-700 to-gray-800 text-white">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-gradient bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent">Simple Pricing, Forever Yours</h1>
      <p className="text-gray-300 max-w-xl mx-auto">
        One-time payment. No subscriptions. Get a professional, editable website that you own.
      </p>
    </section>
  );
}