import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';

export const metadata = {
  title: 'Blog',
  description: 'Artikel dan tips seputar instalasi listrik rumah dan bangunan.',
};

const dummyPosts = [
  {
    slug: 'tips-1',
    title: 'Judul Artikel Dummy Pertama',
    date: '1 September 2026',
    excerpt: 'Ringkasan dummy singkat tentang isi artikel ini, satu atau dua kalimat saja.',
  },
  {
    slug: 'tips-2',
    title: 'Judul Artikel Dummy Kedua',
    date: '15 Agustus 2026',
    excerpt: 'Ringkasan dummy singkat tentang isi artikel ini, satu atau dua kalimat saja.',
  },
  {
    slug: 'tips-3',
    title: 'Judul Artikel Dummy Ketiga',
    date: '2 Agustus 2026',
    excerpt: 'Ringkasan dummy singkat tentang isi artikel ini, satu atau dua kalimat saja.',
  },
];

export default function BlogPage() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <SectionHeading
          title="Blog"
          subtitle="Deskripsi dummy: tips dan informasi seputar kelistrikan rumah dan bangunan."
        />
        <div className="divide-y divide-brand-line">
          {dummyPosts.map((post) => (
            <article key={post.slug} className="py-6 group">
              <p className="text-sm text-brand-slate/60 mb-1">{post.date}</p>
              <h2 className="text-xl font-semibold text-brand-blue-deep group-hover:text-brand-blue transition-colors mb-2">
                {post.title}
              </h2>
              <p className="text-brand-slate">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}