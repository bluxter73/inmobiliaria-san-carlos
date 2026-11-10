import { Link } from 'react-router-dom';
import type { Property } from '../types/property';
import { formatPrice } from '../utils/format';
import DemoBadge from './DemoBadge';
import PropertyPlaceholder from './PropertyPlaceholder';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const { id, title, type, status, price, currency, priceSuffix, location, bedrooms, bathrooms, areaM2, landM2 } = property;

  return (
    <article className="card group flex flex-col transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative">
        <PropertyPlaceholder type={type} className="h-48 w-full" />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-forest">
          {status}
        </span>
        <div className="absolute right-4 top-4">
          <DemoBadge />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs uppercase tracking-wider text-gold-dark">{type}</p>
        <h3 className="mt-1 text-xl font-semibold text-forest-dark">{title}</h3>
        <p className="mt-1 text-sm text-forest-dark/60">{location}</p>

        <ul className="mt-4 flex flex-wrap gap-3 text-sm text-forest-dark/75">
          {bedrooms !== undefined && <li>{bedrooms} dorm.</li>}
          {bathrooms !== undefined && <li>{bathrooms} baños</li>}
          {areaM2 !== undefined && <li>{areaM2} m² const.</li>}
          {landM2 !== undefined && <li>{landM2} m² terreno</li>}
        </ul>

        <div className="mt-auto flex items-end justify-between pt-6">
          <p className="text-lg font-semibold text-forest">
            {formatPrice(price, currency)}
            {priceSuffix && <span className="text-sm font-normal text-forest-dark/60"> {priceSuffix}</span>}
          </p>
          <Link to={`/propiedades/${id}`} className="text-sm font-semibold text-forest underline-offset-4 hover:text-gold-dark hover:underline">
            Ver detalle →
          </Link>
        </div>
      </div>
    </article>
  );
}
