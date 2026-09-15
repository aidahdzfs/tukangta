import Link from 'next/link';
import WhatsAppButton from '@/components/WhatsAppButton';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import { services } from '@/lib/services-data';
import { ArrowDown } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero — center, tanpa ikon petir, teks diringkas */}
      <section className="relative">
        <div className="max-w-3xl mx-auto px-4 py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-brand-blue-deep leading-[1.1] mb-6">
            Instalasi listrik yang <span className="text-brand-gold">Terpercaya</span> dan Berkualitas.
          </h1>
          <p className="text-brand-slate text-lg mb-10 max-w-lg mx-auto">
            Tambah daya, pemasangan baru, dan perbaikan ditangani teknisi bersertifikat.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/layanan"
              className="bg-brand-gold text-brand-blue-deep font-semibold px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-brand-gold/30 hover:-translate-y-0.5 transition-all"
            >
              Lihat layanan
            </Link>
            <a
              href="#layanan"
              className="group inline-flex items-center gap-2 text-brand-blue-deep font-semibold hover:text-brand-blue transition-colors"
            >
              Kenali kami lebih lanjut
              <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Ringkasan Layanan — putih, tapi transparan-lembut agar blob global masih terasa */}
      <section id='layanan' className="bg-white/60 backdrop-blur-sm py-20">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading title="Layanan yang kami tangani"/>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
            {services.map((service, i) => (
              <ServiceCard 
                key={service.slug} 
                number={String(i + 1).padStart(2, '0')} 
                title={service.title} 
                description={service.description} 
                icon={service.icon}
              />
            ))}
          </div>
          <div className="relative text-center mt-12">
            <Link href="/layanan" className="text-brand-blue font-semibold hover:underline">
              Lihat semua layanan
            </Link>
          </div>
        </div>
      </section>

      {/* Kenapa Pilih Kami — masih terang, aksen border bukan blok gelap penuh */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading title="Dikerjakan oleh teknisi bersertifikat" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Bersertifikat' },
              { label: 'Rapi & bersih' },
              { label: 'Garansi pengerjaan' },
              { label: 'Respon cepat' },
            ].map((badge) => (
              <div key={badge.label} className="group cursor-default bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-brand-line hover:border-brand-gold transition-colors">
                <div className="h-0.5 w-8 bg-brand-gold mb-4 transition-all group-hover:w-12" />
                <p className="text-brand-blue-deep font-medium">{badge.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section className="bg-white/60 backdrop-blur-sm py-20">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading title="Apa kata pelanggan kami" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard name="Nama Dummy 1" role="Pemilik rumah" quote="Testimoni dummy — pengerjaan rapi dan cepat." />
            <TestimonialCard name="Nama Dummy 2" role="Pemilik toko" quote="Testimoni dummy — teknisinya ramah dan profesional." />
            <TestimonialCard name="Nama Dummy 3" role="Pemilik rumah" quote="Testimoni dummy — harga jelas, hasil memuaskan." />
          </div>
        </div>
      </section>

      {/* CTA + Footer menyatu — CTA jadi awal gradient yang berlanjut ke footer */}
      <section className="relative pt-24 pb-16 text-center overflow-hidden bg-gradient-to-b from-brand-blue to-brand-blue-deep">
        <div className="blob absolute -top-10 left-1/3 w-72 h-72 rounded-full bg-brand-gold/15 blur-3xl" />
        <div className="relative max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Butuh bantuan instalasi listrik sekarang?
          </h2>
          <p className="text-white/80 mb-10">
            Hubungi kami sekarang untuk konsultasi gratis dan penawaran harga.
          </p>
          <WhatsAppButton 
            label='Chat kami sekarang' 
            showArrow
            className='px-7 py-3.5'
          />
        </div>
      </section>
    </>
  );
}