import SectionHeading from '@/components/SectionHeading';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata = {
  title: 'Tentang Kami',
  description: 'Kenali lebih dekat Tukang Listrik Ta\', jasa instalasi listrik bersertifikat dan terpercaya.',
};

export default function TentangPage() {
  return (
    <>
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading
            title="Tentang Tukang Listrik Ta'"
            subtitle="Deskripsi dummy: cerita singkat siapa kami dan bagaimana kami memulai usaha ini."
          />
          <div className="space-y-5 text-brand-slate leading-relaxed">
            <p>
              Paragraf dummy pertama — ceritakan bagaimana bisnis ini dimulai, sejak kapan berdiri, dan apa yang membedakan Anda dari jasa listrik lain di sekitar area layanan.
            </p>
            <p>
              Paragraf dummy kedua — jelaskan filosofi kerja: kenapa mengutamakan kerapian, keamanan, dan kejelasan biaya kepada pelanggan.
            </p>
            <p>
              Paragraf dummy ketiga — sebutkan cakupan area layanan dan jenis bangunan yang biasa ditangani (rumah tinggal, ruko, dll).
            </p>
          </div>
        </div>
      </section>

      {/* Kredensial singkat */}
      <section className="bg-white/60 backdrop-blur-sm py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Tahun Berdiri', value: '20XX' },
              { label: 'Proyek Selesai', value: '100+' },
              { label: 'Area Layanan', value: 'Kota Anda' },
              { label: 'Tim Teknisi', value: '5+ Orang' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-2xl font-semibold text-brand-blue-deep mb-1">{item.value}</p>
                <p className="text-sm text-brand-slate">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 text-center">
        <WhatsAppButton label="Konsultasi Gratis via WhatsApp" />
      </section>
    </>
  );
}