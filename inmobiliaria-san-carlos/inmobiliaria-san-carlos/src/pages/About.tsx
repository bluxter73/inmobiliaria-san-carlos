import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';
import { site } from '../config/site';

const values = [
  { title: 'Atención personalizada', text: 'Escucho tus necesidades antes de proponer cualquier opción.' },
  { title: 'Transparencia', text: 'Información clara en cada etapa del proceso, sin letra chica.' },
  { title: 'Conocimiento local', text: 'Trabajo en San Carlos y la Región de Ñuble, con cercanía a su realidad.' },
];

export default function About() {
  return (
    <>
      <section className="bg-forest py-16 text-white md:py-24">
        <Container className="grid items-center gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="flex aspect-square items-center justify-center rounded-3xl border border-gold/40 bg-white/5 text-sm text-white/60">
              Fotografía del agente
            </div>
          </div>
          <div className="md:col-span-3">
            <SectionTitle
              light
              eyebrow="Acerca de mí"
              title={site.agentName}
              subtitle={`${site.agentRole}, ${site.city}, ${site.region}.`}
            />
          </div>
        </Container>
      </section>

      <section className="section">
        <Container className="max-w-3xl space-y-6 text-lg leading-relaxed text-forest-dark/80">
          <h2 className="text-3xl font-semibold text-forest-dark">Quién soy</h2>
          <p>
            [Biografía pendiente. Incluir aquí la presentación personal que el agente quiera compartir: origen, intereses y motivación para dedicarse al sector inmobiliario.]
          </p>
          <h2 className="pt-6 text-3xl font-semibold text-forest-dark">Cómo trabajo</h2>
          <p>
            [Descripción pendiente del proceso de trabajo: primera reunión, búsqueda, visitas, negociación y acompañamiento posterior.]
          </p>
        </Container>
      </section>

      <section className="section bg-beige-dark/50">
        <Container>
          <SectionTitle eyebrow="Valores" title="Lo que guía mi trabajo" align="center" />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="card p-8">
                <div className="mb-4 h-1 w-12 bg-gold" />
                <h3 className="text-xl font-semibold">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-forest-dark/70">{v.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionTitle eyebrow="Contacto" title="¿Hablamos?" subtitle="Escríbeme y coordinamos una conversación." />
          </div>
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
