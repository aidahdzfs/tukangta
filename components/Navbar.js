'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import WhatsAppButton from './WhatsAppButton';

const menuItems = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang', href: '/tentang' },
  { label: 'Layanan', href: '/layanan' },
  { label: 'Blog', href: '/blog' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40">
      <div className="absolute inset-0 bg-brand-soft/70 backdrop-blur-md border-b border-brand-line/40" />
      <nav className="relative max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/vercel.svg" alt="Logo Tukang Listrik Ta'" width={32} height={32} />
          <span className="font-semibold text-brand-blue-deep text-lg">Tukangta&apos;</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-brand-slate hover:text-brand-blue-deep relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-brand-gold after:transition-all hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
          <WhatsAppButton label="Hubungi Kami" />
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2"
          aria-label="Buka menu navigasi"
          aria-expanded={isOpen}
        >
          <span className="block w-6 h-0.5 bg-brand-blue-deep mb-1.5"></span>
          <span className="block w-6 h-0.5 bg-brand-blue-deep mb-1.5"></span>
          <span className="block w-4 h-0.5 bg-brand-blue-deep"></span>
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-4 pb-4 border-t border-brand-line">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="text-sm font-medium text-brand-slate pt-2">
              {item.label}
            </Link>
          ))}
          <WhatsAppButton label="Hubungi Kami" />
        </div>
      )}
    </header>
  );
}