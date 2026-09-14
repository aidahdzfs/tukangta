import { ArrowRight } from "lucide-react";

export default function WhatsAppButton({
  label = 'Hubungi via WhatsApp',
  message = 'Halo, saya ingin bertanya soal jasa instalasi listrik',
  showArrow = false,
  className=''
}) {
  const phoneNumber = '62895338547564';
  const encodedMessage = encodeURIComponent(message);

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodedMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-3 bg-brand-gold text-brand-blue-deep font-semibold px-5 py-2 rounded-full hover:shadow-lg hover:shadow-brand-gold/30 hover:-translate-y-0.5 transition-all text-center ${
        showArrow ? 'hover:gap-4 duration-300' : ''
      } ${className}`}
    >
      {label}
      {showArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"/>
      )}
    </a>
  );
}