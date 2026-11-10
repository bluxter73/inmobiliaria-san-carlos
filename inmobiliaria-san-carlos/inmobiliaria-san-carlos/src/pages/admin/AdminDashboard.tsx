import { Link } from 'react-router-dom';
import { properties } from '../../data/properties';

const stats = [
  { label: 'Propiedades (demo)', value: String(properties.length) },
  { label: 'Consultas recibidas', value: 'Próximamente' },
  { label: 'Propiedades publicadas', value: 'Próximamente' },
];

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-semibold">Resumen</h1>
      <p className="mt-2 text-sm text-forest-dark/60">Vista general del panel. Los datos mostrados son de demostración.</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="card p-6">
            <p className="text-sm text-forest-dark/60">{s.label}</p>
            <p className="mt-2 text-2xl font-semibold text-forest">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <Link to="/admin/propiedades" className="btn-primary">Ir a propiedades</Link>
      </div>
    </div>
  );
}
