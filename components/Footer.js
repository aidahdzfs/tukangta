import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-blue-deep text-white/70">
      <div className="max-w-6xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-white font-semibold text-lg mb-3">Tukang Listrik Ta&apos;</h3>
          <p className="text-sm leading-relaxed max-w-xs">
            Jasa instalasi listrik bersertifikat, rapi, dan terpercaya untuk rumah dan bangunan Anda.
          </p>
        </div>

        <div>
          <h4 className="text-white/90 font-medium mb-4 text-sm uppercase tracking-wide">
            Link Cepat
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/tentang" className="hover:text-brand-gold transition-colors">Tentang</Link></li>
            <li><Link href="/layanan" className="hover:text-brand-gold transition-colors">Layanan</Link></li>
            <li><Link href="/blog" className="hover:text-brand-gold transition-colors">Blog</Link></li>
            <li><Link href="/kontak" className="hover:text-brand-gold transition-colors">Kontak</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white/90 font-medium mb-4 text-sm uppercase tracking-wide">
            Kontak
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li>WhatsApp: 0812-3456-7890 (dummy)</li>
            <li>Email: info@tukangta.co (dummy)</li>
            <li>
              <a
                href="https://instagram.com/Instalatir_listrik"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-gold transition-colors"
              >
                @Instalatir_listrik
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 text-center text-xs py-5 text-white/40">
        &copy; {new Date().getFullYear()} Tukang Listrik Ta&apos;. Semua hak dilindungi.
      </div>
    </footer>
  );
}