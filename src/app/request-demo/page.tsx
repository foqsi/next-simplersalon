// src/app/request-demo/page.tsx
'use client';
import { SERVICE_ID, PUBLIC_KEY, TEMPLATE_AUTO_REPLY } from '@/lib/constants';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import ParticlesBackground from '@/components/ParticlesBackground';
import RequestDemoHero from './RequestDemoHero';
import RequestDemoFormSection from './RequestDemoFormSection';
import RequestDemoThankYou from './RequestDemoThankYou';

export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();

export default function RequestDemoPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const submission = {
      name: capitalize(form.name),
      email: form.email.trim(),
      message: form.message.trim(),
    };

    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_AUTO_REPLY,
        submission,
        PUBLIC_KEY
      );
      console.log('Email sent:', result);
      setSubmitted(true);
    } catch (error: any) {
      console.error('EmailJS error:', error?.text || error);
    }

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