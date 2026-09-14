import WhatsAppButton from '@/components/WhatsAppButton';
import SectionHeading from '@/components/SectionHeading';

export const metadata = {
  title: 'Kontak',
  description: 'Hubungi Tukang Listrik Ta\' untuk konsultasi dan pemesanan jasa instalasi listrik.',
};

export default function KontakPage() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-12">
        <div>
          <SectionHeading
            title="Hubungi Kami"
            subtitle="Deskripsi dummy: kami siap membantu, hubungi lewat WhatsApp untuk respon paling cepat."
          />
          <WhatsAppButton label="Chat via WhatsApp" />
        </div>

        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-brand-line space-y-4">
          <div>
            <p className="text-sm text-brand-slate/70">Alamat</p>
            <p className="text-brand-blue-deep font-medium">Makassar, Sulawesi Selatan, Indonesia</p>
          </div>
          <div>
            <p className="text-sm text-brand-slate/70">Jam Operasional</p>
            <p className="text-brand-blue-deep font-medium">Setiap hari, 10.00–00.00</p>
          </div>
          <div>
            <p className="text-sm text-brand-slate/70">Email</p>
            <p className="text-brand-blue-deep font-medium">tukangta.co13@gmail.com</p>
          </div>
          <div>
            <p className="text-sm text-brand-slate/70">Instagram</p>
            <a
              href="https://instagram.com/tukangta.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-blue font-medium hover:underline"
            >
              @tukangta.co
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}