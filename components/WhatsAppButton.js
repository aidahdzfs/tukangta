export default function WhatsAppButton({
  label = 'Hubungi via WhatsApp',
  message = 'Halo, saya ingin bertanya soal jasa instalasi listrik',
}) {
  const phoneNumber = '6281234567890';
  const encodedMessage = encodeURIComponent(message);

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodedMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-brand-gold text-brand-blue-deep font-semibold px-5 py-2 rounded-full hover:shadow-lg hover:shadow-brand-gold/30 hover:-translate-y-0.5 transition-all inline-block text-center"
    >
      {label}
    </a>
  );
}