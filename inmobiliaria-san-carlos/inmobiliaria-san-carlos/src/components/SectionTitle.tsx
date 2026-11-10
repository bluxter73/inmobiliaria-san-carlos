interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionTitle({ eyebrow, title, subtitle, align = 'left', light = false }: SectionTitleProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : '';
  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow && <p className={`eyebrow ${light ? 'text-gold-light' : ''}`}>{eyebrow}</p>}
      <h2 className={`mt-3 text-3xl font-semibold sm:text-4xl ${light ? 'text-white' : 'text-forest-dark'}`}>{title}</h2>
      {subtitle && <p className={`mt-4 leading-relaxed ${light ? 'text-white/80' : 'text-forest-dark/70'}`}>{subtitle}</p>}
    </div>
  );
}
