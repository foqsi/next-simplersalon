// src/app/request-demo/page.tsx
'use client';

import { useState } from 'react';
import ParticlesBackground from '@/components/ParticlesBackground';
import RequestDemoHero from './RequestDemoHero';
import RequestDemoFormSection from './RequestDemoFormSection';
import RequestDemoThankYou from './RequestDemoThankYou';

export default function RequestDemoPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-800 to-gray-700 text-white">
      <ParticlesBackground />
      <RequestDemoHero />

      <section className="relative z-10 py-6 px-4 sm:px-6 md:px-8">
        {submitted ? (
          <RequestDemoThankYou />
        ) : (
          <RequestDemoFormSection
            form={form}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        )}
      </section>
    </div>
  );
}