import Image from 'next/image';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import WhatsAppButton from '@/components/WhatsAppButton';
import { services } from '@/lib/services-data';

export const metadata = {
  title: 'Layanan Kami',
  description: 'Daftar lengkap layanan instalasi listrik: tambah daya, pemasangan baru, perbaikan, dan sertifikasi.',
};

export default function LayananPage() {
  return (
    <>
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            title="Layanan Kami"
            subtitle="Daftar lengkap layanan kelistrikan yang kami tangani, dari skala kecil hingga besar."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
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
        </div>
      </section>

      {/* Dokumentasi Pelayanan */}
      <section className="bg-brand-soft py-20">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            title="Bagaimana Kami Bekerja"
            subtitle="Dokumentasi proses pengerjaan langsung di lapangan untuk tiap jenis layanan."
          />
          <div className="space-y-14">
            {services.map((service, i) => (
              <div
                key={service.slug}
                className={`flex flex-col ${
                  i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
                } items-center gap-8 md:gap-12`}
              >
                <div className="w-full md:w-1/2">
                  {service.image ? (
                    <Image
                      src={service.image}
                      alt={`Dokumentasi pengerjaan ${service.title}`}
                      width={600}
                      height={400}
                      className="rounded-xl object-cover w-full h-64 md:h-80"
                    />
                  ) : (
                    <div className="w-full h-64 md:h-80 rounded-xl bg-brand-line flex items-center justify-center text-brand-slate/50 text-sm">
                      Foto proses pengerjaan
                    </div>
                  )}
                </div>
                <div className="w-full md:w-1/2">
                  <span className="text-brand-gold font-semibold text-sm uppercase tracking-wide">
                    {String(i + 1).padStart(2, '0')} — {service.title}
                  </span>
                  <p className="text-brand-slate leading-relaxed mt-3">
                    {service.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-blue-deep py-16 text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-white mb-3">
            Layanan yang Anda butuhkan tidak ada di daftar?
          </h2>
          <p className="text-white/70 mb-6">
            Hubungi kami langsung, kemungkinan besar kami tetap bisa membantu.
          </p>
          <WhatsAppButton label="Tanya via WhatsApp" />
        </div>
      </section>
    </>
  );
}