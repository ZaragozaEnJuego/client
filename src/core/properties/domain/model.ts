export type Kind = 'Transport' | 'Education' | 'Health' | 'Groceries';

export type Propertie = {
  name: string;
  id: string;
  address: string;
  price: number;
  income: number;
  owner?: string;
  kind: Kind;
};

export type KindRestrictions = {
  MaxTemperature: { value: number; modifier: number };
  MinTemperature: { value: number; modifier: number };
  EnergyConsumption: number;
  Weather: { sunny: number; rainy: number; cloudy: number };
};

export const DefaultPropertie = (): Propertie => {
  return { address: '', id: '', kind: 'Education', name: '', price: 0, income: 0 };
};
