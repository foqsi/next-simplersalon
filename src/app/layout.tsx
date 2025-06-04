import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import NavigationWrapper from '@/components/layouts/navigation/NavigationWrapper';
import Footer from "@/components/layouts/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} pt-12`}
      >
        <NavigationWrapper />
        {children}
        <Footer />
      </body>
    </html>
  );
}
