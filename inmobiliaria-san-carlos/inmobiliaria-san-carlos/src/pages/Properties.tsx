import { useMemo, useState } from 'react';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import PropertyCard from '../components/PropertyCard';
import DemoBadge from '../components/DemoBadge';
import { properties } from '../data/properties';
import type { PropertyStatus, PropertyType } from '../types/property';

const types: ('Todos' | PropertyType)[] = ['Todos', 'Casa', 'Departamento', 'Terreno', 'Parcela'];
const statuses: ('Todos' | PropertyStatus)[] = ['Todos', 'En venta', 'En arriendo'];

export default function Properties() {
  const [typeFilter, setTypeFilter] = useState<'Todos' | PropertyType>('Todos');
  const [statusFilter, setStatusFilter] = useState<'Todos' | PropertyStatus>('Todos');

  const filtered = useMemo(
    () =>
      properties.filter(
        (p) =>
          (typeFilter === 'Todos' || p.type === typeFilter) &&
          (statusFilter === 'Todos' || p.status === statusFilter),
      ),
    [typeFilter, statusFilter],
  );

  return (
    <>
      <section className="bg-forest py-16 text-white md:py-20">
        <Container>
          <SectionTitle
            light
            eyebrow="Catálogo"
            title="Más viviendas"
            subtitle="Explora nuestras opciones en San Carlos y sus alrededores."
          />
          <div className="mt-6">
            <DemoBadge />
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="mb-10 flex flex-col gap-4 rounded-2xl bg-white p-5 ring-1 ring-forest/10 sm:flex-row sm:items-end">
            <div className="flex-1">
              <label htmlFor="type" className="mb-1 block text-sm font-medium">Tipo</label>
              <select id="type" className="input" value={typeFilter} onChange={(e) => setTypeFilter(e.target.value as 'Todos' | PropertyType)}>
                {types.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div className="flex-1">
              <label htmlFor="status" className="mb-1 block text-sm font-medium">Operación</label>
              <select id="status" className="input" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value as 'Todos' | PropertyStatus)}>
                {statuses.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <p className="text-sm text-forest-dark/60 sm:pb-3">{filtered.length} resultado(s)</p>
          </div>

          {filtered.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {filtered.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <p className="py-16 text-center text-forest-dark/60">No hay viviendas que coincidan con los filtros seleccionados.</p>
          )}
        </Container>
      </section>
    </>
  );
}
