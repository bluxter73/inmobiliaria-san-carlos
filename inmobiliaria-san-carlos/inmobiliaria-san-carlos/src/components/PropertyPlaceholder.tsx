import type { PropertyType } from '../types/property';

interface PropertyPlaceholderProps {
  type: PropertyType;
  className?: string;
}

/** Imagen provisional mientras no existan fotografías reales. */
export default function PropertyPlaceholder({ type, className = '' }: PropertyPlaceholderProps) {
  return (
    <div className={`flex items-center justify-center bg-gradient-to-br from-forest to-forest-light ${className}`}>
      <div className="flex flex-col items-center gap-2 text-beige">
        <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
          <path d="M10 30L32 12l22 18v22H10z" strokeLinejoin="round" />
          <rect x="27" y="36" width="10" height="16" className="text-gold" fill="currentColor" stroke="none" />
        </svg>
        <span className="text-xs uppercase tracking-[0.2em] text-beige/80">{type}</span>
      </div>
    </div>
  );
}
