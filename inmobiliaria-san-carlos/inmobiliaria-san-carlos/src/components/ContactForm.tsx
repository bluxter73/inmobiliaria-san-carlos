import { useState } from 'react';
import type { FormEvent } from 'react';

interface ContactFormProps {
  defaultMessage?: string;
}

/**
 * Formulario de demostración. En esta fase NO envía datos a ningún servicio.
 * La conexión con backend/Supabase se hará en una fase posterior, previa autorización.
 */
export default function ContactForm({ defaultMessage = '' }: ContactFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState(defaultMessage);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-white p-8 text-center ring-1 ring-forest/10">
        <h3 className="text-xl font-semibold text-forest-dark">Formulario de demostración</h3>
        <p className="mt-3 text-sm text-forest-dark/70">
          Esta versión aún no envía mensajes. El envío se habilitará en la siguiente fase del proyecto.
        </p>
        <button type="button" className="btn-outline mt-6" onClick={() => setSubmitted(false)}>
          Volver al formulario
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl bg-white p-6 ring-1 ring-forest/10 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium">Nombre</label>
          <input id="name" className="input" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium">Teléfono</label>
          <input id="phone" type="tel" className="input" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium">Correo electrónico</label>
        <input id="email" type="email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium">Mensaje</label>
        <textarea id="message" rows={4} className="input" value={message} onChange={(e) => setMessage(e.target.value)} required />
      </div>
      <button type="submit" className="btn-primary w-full sm:w-auto">Enviar consulta</button>
    </form>
  );
}
