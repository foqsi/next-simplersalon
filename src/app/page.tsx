import Landing from '@/components/features/landing/Landing';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Simpler Salon',
    template: '%s | Simpler Salon',
  },
  description: 'Own your salon website with a one-time payment—no subscriptions, no hassle. Simpler Salon gives you full control and easy updates.',
  keywords: [
    'salon websites',
    'small business websites',
    'one-time payment websites',
    'website builder',
    'simpler salon',
    'affordable websites',
    'custom salon site',
    'no subscription website',
    'hair salon website',
    'nail salon website',
  ],
  openGraph: {
    title: 'Simpler Salon',
    description: 'Own your salon website with a one-time payment and full control. Built for simplicity and designed for beauty.',
    url: 'https://simplersalon.com',
    siteName: 'Simpler Salon',
    images: [
      {
        url: 'https://simplersalon.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Simpler Salon website preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Simpler Salon',
    description: 'A beautiful salon website you own—no subscriptions required.',
    images: ['https://simplersalon.com/og-image.png'],
  },
  metadataBase: new URL('https://simplersalon.com'),
};


export default function Home() {
  return (
    <>
      <Landing />
    </>
  )
}