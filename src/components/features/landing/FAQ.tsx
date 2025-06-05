'use client';

const faqs = [
  {
    q: 'Do I really only pay once?',
    a: 'Yes. You pay a flat fee and the website is yours forever.',
  },
  {
    q: 'Can I update my site later?',
    a: 'Yes, through a simple admin panel where you can manage services, images, and more.',
  },
  {
    q: 'Do I need to know how to code?',
    a: 'No coding needed. Everything is built to be easy to use.',
  },
];

export default function FAQ() {
  return (
    <section className="bg-gradient-to-tr from-blue-950 via-gray-900 to-gray-950 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h3>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i}>
              <h4 className="font-semibold text-blue-400">{faq.q}</h4>
              <p className="text-gray-300">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
