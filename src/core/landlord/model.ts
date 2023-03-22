import { Propertie } from '../properties/domain';

export type Landlord = {
  liquidity: number;
  lastDayIncome: number;
  properties: Propertie[];
};
