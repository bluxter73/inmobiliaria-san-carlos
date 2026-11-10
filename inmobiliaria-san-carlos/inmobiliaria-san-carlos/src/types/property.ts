export type PropertyType = 'Casa' | 'Departamento' | 'Terreno' | 'Parcela';
export type PropertyStatus = 'En venta' | 'En arriendo';
export type Currency = 'CLP' | 'UF';

export interface Property {
  id: string;
  title: string;
  type: PropertyType;
  status: PropertyStatus;
  price: number;
  currency: Currency;
  priceSuffix?: string;
  location: string;
  bedrooms?: number;
  bathrooms?: number;
  areaM2?: number;
  landM2?: number;
  description: string;
  features: string[];
  featured: boolean;
}
