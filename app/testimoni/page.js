'use client';

import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

export default function TestimoniPage() {
  const [form, setForm] = useState({ name: '', role: '', quote: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const res = await fetch('/api/testimoni', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (!res.ok) {
      setError('Gagal mengirim testimoni. Coba lagi sebentar lagi.');
      return;
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="max-w-lg mx-auto px-4 py-24 text-center">
        <CheckCircle2 className="w-14 h-14 text-brand-gold mx-auto mb-5" />
        <h1 className="text-2xl font-semibold text-brand-blue-deep mb-3">
          Terima kasih atas testimoninya!
        </h1>
        <p className="text-brand-slate">
          Testimoni Anda sudah tersimpan dan akan tampil di halaman utama kami.
        </p>
      </section>
    );
  }

  return (
    <section className="max-w-lg mx-auto px-4 py-20">
      <SectionHeading
        title="Bagikan Pengalaman Anda"
        subtitle="Testimoni Anda membantu calon pelanggan lain lebih percaya dengan layanan kami."
        align="center"
      />

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-brand-blue-deep mb-1.5">
            Nama
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Nama Anda"
            className="w-full rounded-lg border border-brand-line px-4 py-2.5 text-brand-slate focus:outline-none focus:ring-2 focus:ring-brand-gold/50 bg-white/70"
          />
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-medium text-brand-blue-deep mb-1.5">
            Peran / Status
          </label>
          <input
            id="role"
            name="role"
            type="text"
            required
            value={form.role}
            onChange={handleChange}
            placeholder="mis. Pemilik rumah, Pemilik toko"
            className="w-full rounded-lg border border-brand-line px-4 py-2.5 text-brand-slate focus:outline-none focus:ring-2 focus:ring-brand-gold/50 bg-white/70"
          />
        </div>

        <div>
          <label htmlFor="quote" className="block text-sm font-medium text-brand-blue-deep mb-1.5">
            Testimoni Anda
          </label>
          <textarea
            id="quote"
            name="quote"
            required
            rows={4}
            value={form.quote}
            onChange={handleChange}
            placeholder="Ceritakan pengalaman Anda menggunakan jasa kami..."
            className="w-full rounded-lg border border-brand-line px-4 py-2.5 text-brand-slate focus:outline-none focus:ring-2 focus:ring-brand-gold/50 bg-white/70 resize-none"
          />
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-brand-gold text-brand-blue-deep font-semibold px-6 py-3 rounded-full hover:shadow-lg hover:shadow-brand-gold/30 hover:-translate-y-0.5 transition-all disabled:opacity-60"
        >
          {loading ? 'Mengirim...' : 'Kirim Testimoni'}
          {!loading && <Send className="w-4 h-4" />}
        </button>
      </form>
    </section>
  );
}