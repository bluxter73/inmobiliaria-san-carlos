import { Link } from 'react-router-dom';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import PropertyCard from '../components/PropertyCard';
import ContactForm from '../components/ContactForm';
import DemoBadge from '../components/DemoBadge';
import Logo from '../components/Logo';
import { properties } from '../data/properties';
import { site } from '../config/site';

export default function Home() {
  const featured = properties.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-forest text-white">
        <Container className="relative grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
          <div>
            <div className="mb-8">
              <Logo />
            </div>
            <p className="eyebrow text-gold-light">{site.region}</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              Encuentra el lugar que quieres llamar hogar
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              Asesoría inmobiliaria independiente y cercana en {site.city}. Acompañamiento claro y personalizado en cada paso.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link to="/propiedades" className="btn-gold">Ver viviendas</Link>
              <a href="#contacto" className="btn-outline border-white text-white hover:bg-white hover:text-forest">
                Contactar
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex aspect-[4/5] items-center justify-center rounded-3xl border border-gold/40 bg-white/5 text-sm text-white/60">
              Espacio para fotografía destacada
            </div>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container className="grid items-center gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="flex aspect-square items-center justify-center rounded-3xl bg-beige-dark text-sm text-forest-dark/60 ring-1 ring-forest/10">
              Fotografía del agente
            </div>
          </div>
          <div className="md:col-span-3">
            <SectionTitle
              eyebrow="Tu agente"
              title={site.agentName}
              subtitle={`${site.agentRole} en ${site.city}, ${site.region}. Trabajo con dedicación, transparencia y un conocimiento cercano del mercado local.`}
            />
            <p className="mt-6 leading-relaxed text-forest-dark/70">
              [Texto de presentación pendiente: completar con la trayectoria y el enfoque profesional que el agente desee compartir.]
            </p>
            <Link to="/acerca-de-mi" className="mt-8 inline-block text-sm font-semibold text-forest underline-offset-4 hover:underline">
              Conocer más sobre mí →
            </Link>
          </div>
        </Container>
      </section>

      <section className="section bg-beige-dark/50">
        <Container>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionTitle
              eyebrow="Destacadas"
              title="Viviendas destacadas"
              subtitle="Las siguientes fichas son datos ficticios de demostración, no corresponden a propiedades reales."
            />
            <DemoBadge />
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {featured.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/propiedades" className="btn-outline">Ver todas las viviendas</Link>
          </div>
        </Container>
      </section>

      <section id="contacto" className="section scroll-mt-24">
        <Container className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionTitle
              eyebrow="Contacto"
              title="Conversemos"
              subtitle="Cuéntame qué estás buscando y te responderé a la brevedad."
            />
            <ul className="mt-8 space-y-4 text-sm text-forest-dark/80">
              <li><span className="font-semibold text-forest">Teléfono:</span> {site.phone}</li>
              <li><span className="font-semibold text-forest">Correo:</span> {site.email}</li>
              <li><span className="font-semibold text-forest">Dirección:</span> {site.address}</li>
              <li><span className="font-semibold text-forest">Atención:</span> {site.schedule}</li>
            </ul>
          </div>
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
