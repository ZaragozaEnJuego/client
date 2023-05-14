export type Kind = 'transport' | 'education' | 'health' | 'groceries';

export type Propertie = {
  name: string;
  id: string;
  address: string;
  price: number;
  income: number;
  owner?: string;
  kind: Kind;
  lat: number;
  lng: number;
  stats?: {
    date: string;
    baseIncome: number;
  }[];
};

export type KindRestrictions = {
  MaxTemperature: { value: number; modifier: number };
  MinTemperature: { value: number; modifier: number };
  EnergyConsumption: number;
  Weather: { sunny: number; rainy: number; cloudy: number };
};

export const DefaultPropertie = (): Propertie => {
  return {
    address: '',
    id: '',
    kind: 'education',
    name: '',
    price: 0,
    income: 0,
    lat: 0,
    lng: 0,
  };
};
