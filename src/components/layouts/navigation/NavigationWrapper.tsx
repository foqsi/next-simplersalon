'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Logo from '@/components/Logo';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';

export default function NavigationWrapper() {
  const router = useRouter();

  const handleLogoClick = (e: React.MouseEvent) => {
    if (window.location.pathname === '/') {
      e.preventDefault();
      router.replace('/');
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-800 to-gray-700 shadow-lg z-[100]">
      <div className="relative max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo and Title */}
        <Link
          href="/"
          onClick={handleLogoClick}
          className="flex items-center gap-2 text-white hover:opacity-80 transition z-10"
        >
          <Logo className="w-12 h-12" />
          <span className="text-xl font-bold">
            Simpler <span className="text-blue-500">Salon</span>
          </span>
        </Link>

        {/* Centered Desktop Navigation */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl">
          <DesktopNavigation />
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden z-10">
          <MobileNavigation />
        </div>
      </div>
    </header>

  );
}
