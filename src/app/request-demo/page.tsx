'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ParticlesBackground from '@/components/ParticlesBackground';

export default function RequestDemoPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: hook up to email service or API endpoint
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-800 to-gray-700 text-white">
      <ParticlesBackground />

      {/* Hero Heading */}
      <section className="relative z-10 min-h-[40vh] flex flex-col justify-center items-center text-center px-4 pt-20 pb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 animate-slide-up">
          Request a Demo
        </h1>
        <p className="max-w-xl text-gray-300 animate-fade-in">
          See how simple it can be to manage your own website. Just tell us who you are.
        </p>
      </section>

      {/* Main Form Section */}
      <section className="relative z-10 py-8 px-4 sm:px-6 md:px-8">
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="text-center text-blue-400 font-semibold text-xl bg-white/10 backdrop-blur-md p-6 rounded-xl max-w-lg mx-auto"
          >
            🎉 Thank you! We'll reach out to schedule your demo soon.
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl mx-auto bg-white/5 backdrop-blur-lg rounded-xl shadow-xl px-4 sm:px-6 py-6 space-y-6"
          >
            <div>
              <label htmlFor="name" className="block mb-1 font-semibold text-sm text-white">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 font-semibold text-sm text-white">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 font-semibold text-sm text-white">
                Message (optional)
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition font-semibold"
            >
              Request Demo
            </button>
          </motion.form>
        )}
      </section>
    </div>
  );
}
