import { Link } from 'react-router-dom';
import { site } from '../config/site';

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <p className="font-serif text-xl text-white">{site.name}</p>
          <p className="mt-3 text-sm leading-relaxed">{site.tagline}</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-gold-light">Navegación</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link className="hover:text-gold-light" to="/">Inicio</Link></li>
            <li><Link className="hover:text-gold-light" to="/propiedades">Más viviendas</Link></li>
            <li><Link className="hover:text-gold-light" to="/acerca-de-mi">Acerca de mí</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-gold-light">Contacto</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>{site.phone}</li>
            <li>{site.email}</li>
            <li>{site.address}</li>
            <li>{site.schedule}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} {site.name}. {site.city}, {site.region}, {site.country}.
      </div>
    </footer>
  );
}
