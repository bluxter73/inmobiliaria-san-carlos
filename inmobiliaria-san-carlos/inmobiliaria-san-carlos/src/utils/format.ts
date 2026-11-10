import type { Currency } from '../types/property';

export function formatPrice(amount: number, currency: Currency = 'CLP'): string {
  if (currency === 'UF') {
    return `UF ${amount.toLocaleString('es-CL')}`;
  }
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0,
  }).format(amount);
}
