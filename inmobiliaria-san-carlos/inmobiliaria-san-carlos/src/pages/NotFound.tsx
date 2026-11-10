import { Link } from 'react-router-dom';
import Container from '../components/Container';

export default function NotFound() {
  return (
    <Container className="py-32 text-center">
      <p className="eyebrow">Error 404</p>
      <h1 className="mt-4 text-4xl font-semibold">Página no encontrada</h1>
      <p className="mt-4 text-forest-dark/70">La dirección que buscas no existe.</p>
      <Link to="/" className="btn-primary mt-8">Volver al inicio</Link>
    </Container>
  );
}
