'use client';

import '@fortawesome/fontawesome-free/css/all.min.css';
import { AddtlLinks, NavLinks, LegalLinks } from '@/components/NavLinks';

// TODO: Update Quick Links

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-800 to-gray-700 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-2">Simpler Salon</h2>
          <p className="text-gray-400 mb-4">
            Stop paying monthly for your small business' website. Pay once, own it forever, and update whenever you want.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm flex flex-col">
            <NavLinks />
            <AddtlLinks />
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Legal</h3>
          <ul className='space-y-2 text-gray-300 text-sm flex flex-col'>
            <LegalLinks />
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-12 text-center text-gray-500 text-sm border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} Simpler Salon. All rights reserved.
      </div>
    </footer>
  );
}
