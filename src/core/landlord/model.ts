import { Propertie } from '../properties/domain';

export type Landlord = {
  id: string;
  name: string;
  icon?: string;
  mail?: string;
  access: boolean;
  liquidity: number;
  lastDayIncome: number;
  properties: Propertie[];
};
