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
            subtitle="Deskripsi dummy: daftar lengkap layanan kelistrikan yang kami tangani, dari skala kecil hingga besar."
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

      <section className="bg-brand-blue-deep py-16 text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-white mb-3">
            Layanan yang Anda butuhkan tidak ada di daftar?
          </h2>
          <p className="text-white/70 mb-6">
            Deskripsi dummy: hubungi kami langsung, kemungkinan besar kami tetap bisa membantu.
          </p>
          <WhatsAppButton label="Tanya via WhatsApp" />
        </div>
      </section>
    </>
  );
}