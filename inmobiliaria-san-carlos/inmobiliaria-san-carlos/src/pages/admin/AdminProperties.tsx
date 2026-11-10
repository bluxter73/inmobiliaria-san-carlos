import { properties } from '../../data/properties';
import { formatPrice } from '../../utils/format';

export default function AdminProperties() {
  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Propiedades</h1>
          <p className="mt-2 text-sm text-forest-dark/60">Listado de demostración con datos ficticios.</p>
        </div>
        <button type="button" disabled className="btn-primary cursor-not-allowed opacity-50">
          Nueva propiedad (próximamente)
        </button>
      </div>

      <div className="card mt-8 overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-beige-dark/60 text-forest-dark">
            <tr>
              <th className="px-4 py-3 font-semibold">Título</th>
              <th className="px-4 py-3 font-semibold">Tipo</th>
              <th className="px-4 py-3 font-semibold">Operación</th>
              <th className="px-4 py-3 font-semibold">Precio</th>
              <th className="px-4 py-3 font-semibold">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {properties.map((p) => (
              <tr key={p.id} className="border-t border-forest/10">
                <td className="px-4 py-3 font-medium">{p.title}</td>
                <td className="px-4 py-3">{p.type}</td>
                <td className="px-4 py-3">{p.status}</td>
                <td className="px-4 py-3">{formatPrice(p.price, p.currency)}</td>
                <td className="px-4 py-3 text-forest-dark/40">Editar · Eliminar</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
