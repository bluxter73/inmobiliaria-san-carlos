interface LogoProps {
  compact?: boolean;
}

/** Espacio reservado para el logotipo definitivo. Reemplazar por <img> cuando exista el archivo. */
export default function Logo({ compact = false }: LogoProps) {
  return (
    <div
      aria-label="Espacio para logotipo"
      className={`flex items-center justify-center rounded-md border border-dashed border-gold/70 bg-white/5 text-[10px] font-semibold uppercase tracking-wider text-gold-light ${
        compact ? 'h-10 w-10' : 'h-28 w-56'
      }`}
    >
      {compact ? 'Logo' : 'Espacio para logotipo'}
    </div>
  );
}
