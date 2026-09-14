import Link from 'next/link';
import Image from 'next/image';
import { MessageCircle, Mail, ArrowUp } from 'lucide-react';
import { contactItems } from '@/lib/contact-data';

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const iconMap = {
  whatsapp: MessageCircle,
  email: Mail,
  instagram: InstagramIcon,
};

export default function Footer() {
  const footerContacts = contactItems.filter((item) => item.showInFooter);

  return (
    <footer className="bg-brand-blue-deep text-white/70">
      <div className=" max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-3 gap-10">
          <Link href="/" className="flex items-center gap-1">
            <Image src="/logo.png" alt="Logo Tukang Listrik Ta'" width={70} height={70} />
            <div className='grid'>
              <span className="text-white font-semibold text-lg ">Tukang Listrik Ta&apos;</span>
              <span className="text-sm leading-relaxed max-w-xs">Terpercaya, Rapi, dan Berkualitas</span>
            </div>
          </Link>
        <div className='md:ml-20'>
          <h4 className="text-white/90 font-medium mb-4 text-sm uppercase tracking-wide">
            Link Cepat
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/tentang" className="hover:text-brand-gold transition-colors">Tentang</Link></li>
            <li><Link href="/layanan" className="hover:text-brand-gold transition-colors">Layanan</Link></li>
          </ul>
        </div>

        {/* Kontak — hanya 3 item (showInFooter: true) */}
        <div>
          <h4 className="text-white/90 font-medium mb-4 text-sm uppercase tracking-wide">
            Kontak
          </h4>
          <ul className="space-y-3 text-sm">
            {footerContacts.map((item) => {
              const Icon = iconMap[item.id];
              const content = (
                <span className="flex items-start gap-2.5">
                  <Icon className="w-4 h-4 mt-0.5 shrink-0 text-brand-gold" />
                  <span>{item.label}</span>
                </span>
              );
              return (
                <li key={item.id}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="hover:text-brand-gold transition-colors"
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Tukang Listrik Ta&apos;. Semua hak dilindungi.</p>
          <a href="#top" className="flex items-center gap-1.5 hover:text-brand-gold transition-colors">
            Kembali ke atas <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}