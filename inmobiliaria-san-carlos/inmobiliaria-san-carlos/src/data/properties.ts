import type { Property } from '../types/property';

/**
 * DATOS FICTICIOS DE DEMOSTRACIÓN.
 * No corresponden a propiedades reales. Reemplazar en fases posteriores
 * por datos gestionados desde el panel administrativo.
 */
export const properties: Property[] = [
  {
    id: 'demo-1',
    title: 'Casa familiar de 3 dormitorios con patio',
    type: 'Casa',
    status: 'En venta',
    price: 98000000,
    currency: 'CLP',
    location: 'San Carlos (ejemplo ficticio)',
    bedrooms: 3,
    bathrooms: 2,
    areaM2: 120,
    landM2: 240,
    description:
      'Casa de ejemplo con living-comedor, cocina equipada, patio amplio y estacionamiento. Esta ficha es solo una demostración de diseño.',
    features: ['Patio amplio', 'Estacionamiento', 'Cocina equipada', 'Cerca de servicios'],
    featured: true,
  },
  {
    id: 'demo-2',
    title: 'Departamento luminoso de 2 dormitorios',
    type: 'Departamento',
    status: 'En arriendo',
    price: 380000,
    currency: 'CLP',
    priceSuffix: '/ mes',
    location: 'Sector céntrico (ejemplo ficticio)',
    bedrooms: 2,
    bathrooms: 1,
    areaM2: 58,
    description:
      'Departamento de ejemplo con buena iluminación natural y cocina integrada. Datos ficticios para revisar el diseño.',
    features: ['Iluminación natural', 'Cocina integrada', 'Bodega'],
    featured: true,
  },
  {
    id: 'demo-3',
    title: 'Terreno urbano de 400 m²',
    type: 'Terreno',
    status: 'En venta',
    price: 45000000,
    currency: 'CLP',
    location: 'San Carlos (ejemplo ficticio)',
    landM2: 400,
    description:
      'Terreno de ejemplo con frente a calle pavimentada y forma regular. Ficha ilustrativa, sin valor comercial real.',
    features: ['Forma regular', 'Calle pavimentada'],
    featured: true,
  },
  {
    id: 'demo-4',
    title: 'Parcela con casa de campo',
    type: 'Parcela',
    status: 'En venta',
    price: 135000000,
    currency: 'CLP',
    location: 'Sector rural (ejemplo ficticio)',
    bedrooms: 2,
    bathrooms: 1,
    areaM2: 80,
    landM2: 5000,
    description:
      'Parcela de ejemplo con casa de campo y amplio espacio exterior. Información ficticia para fines de demostración.',
    features: ['Casa de campo', 'Espacio exterior', 'Acceso vehicular'],
    featured: true,
  },
  {
    id: 'demo-5',
    title: 'Casa de 4 dormitorios con quincho',
    type: 'Casa',
    status: 'En venta',
    price: 150000000,
    currency: 'CLP',
    location: 'San Carlos (ejemplo ficticio)',
    bedrooms: 4,
    bathrooms: 3,
    areaM2: 180,
    landM2: 300,
    description:
      'Casa de ejemplo con quincho, cuatro dormitorios y amplios espacios sociales. Solo para demostración.',
    features: ['Quincho', 'Cuatro dormitorios', 'Tres baños'],
    featured: false,
  },
  {
    id: 'demo-6',
    title: 'Departamento de 1 dormitorio cerca de la plaza',
    type: 'Departamento',
    status: 'En arriendo',
    price: 290000,
    currency: 'CLP',
    priceSuffix: '/ mes',
    location: 'Sector céntrico (ejemplo ficticio)',
    bedrooms: 1,
    bathrooms: 1,
    areaM2: 45,
    description:
      'Departamento de ejemplo ideal para una persona o pareja. Datos ficticios de demostración.',
    features: ['Ubicación céntrica', 'Amoblado (ejemplo)'],
    featured: false,
  },
];
