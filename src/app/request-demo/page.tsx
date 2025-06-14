// src/app/request-demo/page.tsx
'use client';
import { SERVICE_ID, PUBLIC_KEY, TEMPLATE_AUTO_REPLY, MSG_PUBLIC_KEY, MSG_SERVICE_ID, MSG_TEMPLATE_SUBMIT } from '@/lib/constants';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import ParticlesBackground from '@/components/ParticlesBackground';
import RequestDemoHero from './RequestDemoHero';
import RequestDemoFormSection from './RequestDemoFormSection';
import RequestDemoThankYou from './RequestDemoThankYou';
import { capitalize } from '@/utils/capitalize';

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
      const message = await emailjs.send(
        MSG_SERVICE_ID,
        MSG_TEMPLATE_SUBMIT,
        submission,
        MSG_PUBLIC_KEY
      )
      const reply = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_AUTO_REPLY,
        submission,
        PUBLIC_KEY
      );
      console.log('Email sent:', reply, message);
      setSubmitted(true);
    } catch (error: unknown) {
      if (typeof error === 'object' && error !== null && 'text' in error) {
        console.error('EmailJS error:', (error as { text?: string }).text);
      } else {
        console.error('EmailJS error:', error);
      }
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