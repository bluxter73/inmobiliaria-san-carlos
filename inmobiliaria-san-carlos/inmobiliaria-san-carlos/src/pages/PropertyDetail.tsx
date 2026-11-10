import { Link, useParams } from 'react-router-dom';
import Container from '../components/Container';
import DemoBadge from '../components/DemoBadge';
import PropertyPlaceholder from '../components/PropertyPlaceholder';
import ContactForm from '../components/ContactForm';
import { properties } from '../data/properties';
import { formatPrice } from '../utils/format';

export default function PropertyDetail() {
  const { id } = useParams<{ id: string }>();
  const property = properties.find((p) => p.id === id);

  if (!property) {
    return (
      <Container className="py-24 text-center">
        <h1 className="text-3xl font-semibold">Propiedad no encontrada</h1>
        <p className="mt-4 text-forest-dark/70">La ficha que buscas no existe o fue retirada.</p>
        <Link to="/propiedades" className="btn-primary mt-8">Volver a viviendas</Link>
      </Container>
    );
  }

  const specs = [
    { label: 'Tipo', value: property.type },
    { label: 'Operación', value: property.status },
    { label: 'Dormitorios', value: property.bedrooms },
    { label: 'Baños', value: property.bathrooms },
    { label: 'Superficie construida', value: property.areaM2 ? `${property.areaM2} m²` : undefined },
    { label: 'Superficie de terreno', value: property.landM2 ? `${property.landM2} m²` : undefined },
  ].filter((s) => s.value !== undefined);

  return (
    <>
      <section className="bg-forest-dark py-6 text-white">
        <Container>
          <Link to="/propiedades" className="text-sm text-gold-light hover:underline">← Volver a viviendas</Link>
        </Container>
      </section>

      <section className="section">
        <Container className="grid gap-12 lg:grid-cols-3">
          <div className="space-y-10 lg:col-span-2">
            <div className="relative">
              <PropertyPlaceholder type={property.type} className="h-72 w-full rounded-2xl sm:h-96" />
              <div className="absolute right-4 top-4"><DemoBadge /></div>
            </div>

            <div>
              <p className="eyebrow">{property.type} · {property.status}</p>
              <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">{property.title}</h1>
              <p className="mt-2 text-forest-dark/60">{property.location}</p>
              <p className="mt-6 text-2xl font-semibold text-forest">
                {formatPrice(property.price, property.currency)}
                {property.priceSuffix && <span className="text-base font-normal text-forest-dark/60"> {property.priceSuffix}</span>}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Descripción</h2>
              <p className="mt-3 leading-relaxed text-forest-dark/75">{property.description}</p>
            </div>

            <div className="card p-6">
              <h2 className="mb-4 text-xl font-semibold">Características</h2>
              <dl className="grid gap-4 sm:grid-cols-2">
                {specs.map((spec) => (
                  <div key={spec.label} className="flex justify-between border-b border-forest/10 pb-2 text-sm">
                    <dt className="text-forest-dark/60">{spec.label}</dt>
                    <dd className="font-medium">{spec.value}</dd>
                  </div>
                ))}
              </dl>
              {property.features.length > 0 && (
                <ul className="mt-6 flex flex-wrap gap-2">
                  {property.features.map((f) => (
                    <li key={f} className="rounded-full bg-beige-dark px-3 py-1 text-xs font-medium text-forest">{f}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="mb-4 text-xl font-semibold">Me interesa esta propiedad</h2>
            <ContactForm defaultMessage={`Me interesa la propiedad: ${property.title} (${property.id}).`} />
          </aside>
        </Container>
      </section>
    </>
  );
}
