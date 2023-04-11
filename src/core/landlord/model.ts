import { Propertie } from '../properties/domain';

export type Access = 'Active' | 'Blocked'

export type Landlord = {
  id: string;
  name: string;
  icon?: string;
  access: Access;
  liquidity: number;
  lastDayIncome: number;
  properties: Propertie[];
};
