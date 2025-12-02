export interface VastuZone {
  id: string;
  name: string;
  startDegree: number;
  endDegree: number;
  color: string;
  meaning?: string;
  description?: string;
  element?: 'Water' | 'Fire' | 'Earth' | 'Air' | 'Space';
  deity?: string;
  suitable?: string[]; // What can be placed here
  avoid?: string[]; // What to avoid here
  benefits?: string; // Benefits of proper usage
}

export const ZONES_16: VastuZone[] = [
  { id: 'N', name: 'North', startDegree: 348.75, endDegree: 11.25, color: '#3b82f6' },
  { id: 'NNE', name: 'NNE', startDegree: 11.25, endDegree: 33.75, color: '#60a5fa' },
  { id: 'NE', name: 'North East', startDegree: 33.75, endDegree: 56.25, color: '#93c5fd' },
  { id: 'ENE', name: 'ENE', startDegree: 56.25, endDegree: 78.75, color: '#bfdbfe' },
  { id: 'E', name: 'East', startDegree: 78.75, endDegree: 101.25, color: '#22c55e' },
  { id: 'ESE', name: 'ESE', startDegree: 101.25, endDegree: 123.75, color: '#4ade80' },
  { id: 'SE', name: 'South East', startDegree: 123.75, endDegree: 146.25, color: '#ef4444' },
  { id: 'SSE', name: 'SSE', startDegree: 146.25, endDegree: 168.75, color: '#f87171' },
  { id: 'S', name: 'South', startDegree: 168.75, endDegree: 191.25, color: '#dc2626' },
  { id: 'SSW', name: 'SSW', startDegree: 191.25, endDegree: 213.75, color: '#fca5a5' },
  { id: 'SW', name: 'South West', startDegree: 213.75, endDegree: 236.25, color: '#fbbf24' },
  { id: 'WSW', name: 'WSW', startDegree: 236.25, endDegree: 258.75, color: '#fcd34d' },
  { id: 'W', name: 'West', startDegree: 258.75, endDegree: 281.25, color: '#e5e7eb' },
  { id: 'WNW', name: 'WNW', startDegree: 281.25, endDegree: 303.75, color: '#d1d5db' },
  { id: 'NW', name: 'North West', startDegree: 303.75, endDegree: 326.25, color: '#9ca3af' },
  { id: 'NNW', name: 'NNW', startDegree: 326.25, endDegree: 348.75, color: '#6b7280' },
];

export const ZONES_32: VastuZone[] = [
  { id: 'N1', name: 'Roga', startDegree: 337.5, endDegree: 348.75, color: '#1e3a8a' },
  { id: 'N2', name: 'Naga', startDegree: 348.75, endDegree: 360, color: '#1e40af' },
  { id: 'N3', name: 'Mukhya', startDegree: 0, endDegree: 11.25, color: '#1d4ed8' },
  { id: 'N4', name: 'Bhallat', startDegree: 11.25, endDegree: 22.5, color: '#2563eb' },
  { id: 'N5', name: 'Soma', startDegree: 22.5, endDegree: 33.75, color: '#3b82f6' },
  { id: 'N6', name: 'Bhujang', startDegree: 33.75, endDegree: 45, color: '#60a5fa' },
  { id: 'N7', name: 'Aditi', startDegree: 45, endDegree: 56.25, color: '#93c5fd' },
  { id: 'N8', name: 'Diti', startDegree: 56.25, endDegree: 67.5, color: '#bfdbfe' },

  { id: 'E1', name: 'Shikhi', startDegree: 67.5, endDegree: 78.75, color: '#14532d' },
  { id: 'E2', name: 'Parjanya', startDegree: 78.75, endDegree: 90, color: '#166534' },
  { id: 'E3', name: 'Jayant', startDegree: 90, endDegree: 101.25, color: '#15803d' },
  { id: 'E4', name: 'Indra', startDegree: 101.25, endDegree: 112.5, color: '#16a34a' },
  { id: 'E5', name: 'Surya', startDegree: 112.5, endDegree: 123.75, color: '#22c55e' },
  { id: 'E6', name: 'Satya', startDegree: 123.75, endDegree: 135, color: '#4ade80' },
  { id: 'E7', name: 'Bhrisha', startDegree: 135, endDegree: 146.25, color: '#86efac' },
  { id: 'E8', name: 'Akash', startDegree: 146.25, endDegree: 157.5, color: '#bbf7d0' },

  { id: 'S1', name: 'Agni', startDegree: 157.5, endDegree: 168.75, color: '#7f1d1d' },
  { id: 'S2', name: 'Poosha', startDegree: 168.75, endDegree: 180, color: '#991b1b' },
  { id: 'S3', name: 'Vitatha', startDegree: 180, endDegree: 191.25, color: '#b91c1c' },
  { id: 'S4', name: 'Grihrakshita', startDegree: 191.25, endDegree: 202.5, color: '#dc2626' },
  { id: 'S5', name: 'Yama', startDegree: 202.5, endDegree: 213.75, color: '#ef4444' },
  { id: 'S6', name: 'Gandharva', startDegree: 213.75, endDegree: 225, color: '#f87171' },
  { id: 'S7', name: 'Bhringraj', startDegree: 225, endDegree: 236.25, color: '#fca5a5' },
  { id: 'S8', name: 'Mriga', startDegree: 236.25, endDegree: 247.5, color: '#fecaca' },

  { id: 'W1', name: 'Pitra', startDegree: 247.5, endDegree: 258.75, color: '#78350f' },
  { id: 'W2', name: 'Dauwarik', startDegree: 258.75, endDegree: 270, color: '#92400e' },
  { id: 'W3', name: 'Sugriva', startDegree: 270, endDegree: 281.25, color: '#b45309' },
  { id: 'W4', name: 'Pushpadanta', startDegree: 281.25, endDegree: 292.5, color: '#d97706' },
  { id: 'W5', name: 'Varuna', startDegree: 292.5, endDegree: 303.75, color: '#f59e0b' },
  { id: 'W6', name: 'Asura', startDegree: 303.75, endDegree: 315, color: '#fbbf24' },
  { id: 'W7', name: 'Shosha', startDegree: 315, endDegree: 326.25, color: '#fcd34d' },
  { id: 'W8', name: 'Papayakshma', startDegree: 326.25, endDegree: 337.5, color: '#fde68a' },
];
