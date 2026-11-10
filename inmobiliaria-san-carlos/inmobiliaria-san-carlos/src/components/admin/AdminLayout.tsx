import { Link, NavLink, Outlet } from 'react-router-dom';
import { site } from '../../config/site';

const adminLinks = [
  { to: '/admin', label: 'Resumen', end: true },
  { to: '/admin/propiedades', label: 'Propiedades', end: false },
];

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-beige md:flex-row">
      <aside className="bg-forest-dark text-white md:w-60 md:shrink-0">
        <div className="flex items-center justify-between p-6 md:block">
          <Link to="/" className="font-serif text-lg">{site.name}</Link>
          <p className="mt-1 text-xs text-gold-light md:mt-2">Panel administrativo</p>
        </div>
        <nav className="flex gap-2 overflow-x-auto px-4 pb-4 md:flex-col md:px-4 md:pb-0">
          {adminLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `whitespace-nowrap rounded-md px-4 py-2 text-sm ${isActive ? 'bg-white/15 text-gold-light' : 'text-white/80 hover:bg-white/10'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <p className="hidden p-6 text-xs text-white/50 md:block">Diseño inicial · sin funciones reales</p>
      </aside>

      <div className="flex-1 p-4 sm:p-8">
        <div className="mb-6 rounded-md border border-gold/40 bg-gold/10 px-4 py-3 text-sm text-gold-dark">
          Vista de diseño. La autenticación y las funciones de gestión se implementarán en fases posteriores.
        </div>
        <Outlet />
      </div>
    </div>
  );
}
