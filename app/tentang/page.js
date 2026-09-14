import Image from 'next/image';
import SectionHeading from '@/components/SectionHeading';
import WhatsAppButton from '@/components/WhatsAppButton';
import { team } from '@/lib/team-data';
import { partners } from '@/lib/partners-data';
import { Clock, Mail, MapPin, MessageCircle } from 'lucide-react';
import { contactItems } from '@/lib/contact-data';

const iconMap = {
  whatsapp: MessageCircle,
  email: Mail,
  address: MapPin,
  hours: Clock,
};

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
iconMap.instagram = InstagramIcon;

export const metadata = {
  title: 'Tentang Kami',
  description: 'Kenali lebih dekat Tukang Listrik Ta\', jasa instalasi listrik bersertifikat dan terpercaya.',
};

export default function TentangPage() {
  const tentangContacts = contactItems.filter((item) => item.showInTentang);
  return (
    <>
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-14 items-stretch">
          {/* Kolom teks — tidak berubah */}
          <div>
            <div className="h-1 w-10 bg-brand-gold mb-5" />
            <h1 className="text-3xl md:text-4xl font-bold text-brand-blue-deep mb-6 leading-tight">
              Berawal dari Komitmen, Tumbuh Lewat Kepercayaan
            </h1>
            <div className="space-y-4 text-brand-slate leading-relaxed text-justify">
              <p>
                Tukangta.co hadir untuk menjawab kebutuhan instalasi listrik yang sering diabaikan: dikerjakan asal jadi, tanpa standar keamanan yang jelas. Kami memilih jalan berbeda — setiap pekerjaan ditangani teknisi bersertifikat dengan proses yang transparan dari awal hingga selesai.
              </p>
              <p>
                Kerapian dan keamanan bukan nilai tambah, melainkan standar minimum bagi kami. Setiap pemasangan diperiksa ulang, setiap biaya dijelaskan di depan — tanpa kejutan, tanpa kompromi pada keselamatan penghuni rumah atau bangunan Anda.
              </p>
              <p>
                Saat ini kami melayani instalasi rumah tinggal, ruko, hingga bangunan komersial skala kecil-menengah, dengan cakupan area yang terus kami perluas seiring bertambahnya kepercayaan pelanggan.
              </p>
            </div>
          </div>

          {/* Kolom kanan — Info Kontak, meregang mengikuti tinggi kolom teks */}
          <div className="relative h-full">
            <div className="bg-brand-blue-deep rounded-2xl p-8 text-white h-full flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-lg mb-8">Hubungi Kami Langsung</h3>
                <div className="space-y-8">
                  {tentangContacts.map((item) => {
                    const Icon = iconMap[item.id];
                    const content = (
                      <span className="flex items-start gap-3">
                        <span className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 shrink-0">
                          <Icon className="w-4 h-4 text-brand-gold" />
                        </span>
                        <span className="text-sm text-white/80 pt-2">{item.label}</span>
                      </span>
                    );
                    return item.href ? (
                      <a
                        key={item.id}
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="block hover:text-brand-gold transition-colors"
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={item.id}>{content}</div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-white/10">
                <p className="text-white/60 text-sm mb-4">
                  Ada pertanyaan sebelum menggunakan jasa kami?
                </p>
                <a
                  href="https://wa.me/62895338547564"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand-gold text-brand-blue-deep font-semibold px-5 py-2.5 rounded-full hover:shadow-lg hover:shadow-brand-gold/30 hover:-translate-y-0.5 transition-all"
                >
                  Chat via WhatsApp
                </a>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-brand-gold/30 rounded-2xl -z-10" />
          </div>
        </div>
      </section>

      {/* Mitra */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-brand-blue-deep mb-2 text-center">
            Bermitra Dengan
          </h2>
          <p className="text-brand-slate text-center mb-10">
            Kami bekerja sama dengan pemasok material dan lembaga sertifikasi berikut.
          </p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-6">
            {partners.map((partner) =>
              partner.logo ? (
                <Image
                  key={partner.name}
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={40}
                  className="grayscale hover:grayscale-0 transition-all"
                />
              ) : (
                <div
                  key={partner.name}
                  className="text-brand-slate/50 font-semibold text-lg tracking-wide grayscale hover:grayscale-0 hover:text-brand-blue transition-all"
                >
                  {partner.name}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Tim Bersertifikat */}
      <section className="bg-brand-blue-deep py-20">
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeading
            title="Dikerjakan oleh Teknisi Bersertifikat"
            subtitle="Setiap pekerjaan ditangani langsung oleh teknisi yang memiliki sertifikasi kompetensi resmi."
            dark
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {team.map((person) => (
              <div
                key={person.slug}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-brand-gold/50 transition-colors"
              >
                {person.photo ? (
                  <Image
                    src={person.photo}
                    alt={person.name}
                    width={64}
                    height={64}
                    className="rounded-full mb-4 object-cover"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-white/20 mb-4 flex items-center justify-center text-white/60 text-xs">
                    Foto
                  </div>
                )}
                <p className="text-white font-semibold">{person.name}</p>
                <p className="text-white/60 text-sm mb-3">{person.role}</p>
                <div className="flex items-start gap-2 text-xs text-brand-gold">
                  <span>🎓</span>
                  <span>{person.certificate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kredensial singkat */}
      <section className="bg-white/60 backdrop-blur-sm py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Tahun Berdiri', value: '2018' },
              { label: 'Proyek Selesai', value: '50+' },
              { label: 'Area Layanan', value: 'Makassar' },
              { label: 'Tim Teknisi', value: '4+ Orang' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-2xl font-semibold text-brand-blue-deep mb-1">{item.value}</p>
                <p className="text-sm text-brand-slate">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Footer menyatu — CTA jadi awal gradient yang berlanjut ke footer */}
      <section className="relative pt-24 pb-16 text-center overflow-hidden">
        <div className="blob absolute -top-10 left-1/3 w-72 h-72 rounded-full bg-brand-gold/15 blur-3xl" />
        <div className="relative max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-brand-blue-deep mb-4">
            Ingin mengenal kami lebih jauh?
          </h2>
          <p className="text-brand-blue-deep mb-10">
            Hubungi kami sekarang untuk konsultasi gratis dan penawaran harga.
          </p>
          <WhatsAppButton label="Konsultasi Gratis via WhatsApp" />
        </div>
      </section>
    </>
  );
}