'use client';

import { useState } from 'react';

export default function OneTimePurchaseContact() {
  const [form, setForm] = useState({ name: '', email: '', business: '', questions: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen px-4 py-16 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold text-center mb-2">Start Your One-Time Website Purchase</h1>
      <p className='text-sm text-center mb-8'>Fields marked with <span className='text-red-500'>*</span> are required.</p>
      {submitted ? (
        <div className="max-w-xl mx-auto text-center text-blue-400 font-semibold text-xl bg-white/10 backdrop-blur-md p-6 rounded-xl">
          🎉 Thank you! We&apos;ll contact you shortly.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6 bg-white/5 backdrop-blur-lg p-6 rounded-xl shadow-xl">
          <div>
            <label htmlFor="name" className="block mb-1 font-semibold">Name <span className='text-red-500'>*</span></label>
            <input type="text" name="name" id="name" required value={form.name} onChange={handleChange} className="w-full p-2 rounded bg-gray-800 border border-gray-700" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-semibold">Email <span className='text-red-500'>*</span></label>
            <input type="email" name="email" id="email" required value={form.email} onChange={handleChange} className="w-full p-2 rounded bg-gray-800 border border-gray-700" />
          </div>
          <div>
            <label htmlFor="business" className="block mb-1 font-semibold">Business Name <span className='text-red-500'>*</span></label>
            <input type="text" name="business" id="business" required value={form.business} onChange={handleChange} className="w-full p-2 rounded bg-gray-800 border border-gray-700" />
          </div>
          <div>
            <label htmlFor="questions" className="block mb-1 font-semibold">Any questions or notes?</label>
            <textarea name="questions" id="questions" rows={4} value={form.questions} onChange={handleChange} className="w-full p-2 rounded bg-gray-800 border border-gray-700"></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">Send Request</button>
        </form>
      )}
    </main>
  );
}