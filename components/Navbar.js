'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

const menuItems = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang', href: '/tentang' },
  { label: 'Layanan', href: '/layanan' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40">
      <div className="absolute inset-0 bg-brand-soft/70 backdrop-blur-md border-b border-brand-line/40" />
      <nav className="relative max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
          <Image src="/logo.png" alt="Logo Tukang Listrik Ta'" width={32} height={32} />
          <span className="font-semibold text-brand-blue-deep text-lg">
            Tukangta.<span className="text-brand-gold">co</span>
          </span>
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
          <WhatsAppButton label='Konsultasi Gratis' message='Halo, saya mau konsultasi gratis'/>
        </div>

        {/* Tombol hamburger, animasi jadi X */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-brand-blue-deep"
          aria-label="Buka menu navigasi"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Dropdown mobile */}
<div
  className={`md:hidden overflow-hidden transition-all duration-300 ${
    isOpen ? 'max-h-96' : 'max-h-0'
  }`}
>
  <div className="relative bg-brand-soft/95 backdrop-blur-md border-t border-brand-line/60 px-4 py-4">
    <div className="flex flex-col divide-y divide-brand-line/60">
      {menuItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={() => setIsOpen(false)}
          className="text-sm font-medium text-brand-slate hover:text-brand-blue-deep py-3.5 transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </div>
    <div className="mt-4">
      <WhatsAppButton label="Konsultasi Gratis" message="Halo, saya mau konsultasi gratis" />
    </div>
  </div>
</div>
    </header>
  );
}