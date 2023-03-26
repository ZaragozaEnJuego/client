export type Kind = 'Transport' | 'Education' | 'Health' | 'Groceries';

export type Propertie = {
  name: string;
  id: string;
  address: string;
  price: number;
  owner?: string;
  kind: Kind;
  latitude: number;
  longitude: number;
};