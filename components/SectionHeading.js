export default function SectionHeading({ title, subtitle, align = 'left', dark = false }) {
  const isCenter = align === 'center';
  const titleColor = dark ? 'text-white' : 'text-brand-charcoal';
  const subtitleColor = dark ? 'text-white/60' : 'text-brand-charcoal/60';

  return (
    <div className={`mb-12 max-w-xl ${isCenter ? 'mx-auto text-center' : 'text-left'}`}>
      <div className={`h-1 w-10 bg-brand-yellow mb-5 ${isCenter ? 'mx-auto' : ''}`} />
      <h2 className={`text-3xl font-semibold mb-3 leading-tight ${titleColor}`}>
        {title}
      </h2>
      {subtitle && <p className={`leading-relaxed ${subtitleColor}`}>{subtitle}</p>}
    </div>
  );
}