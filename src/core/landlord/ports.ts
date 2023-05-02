import { Landlord } from './model';

export interface ILandlordRepo {
  getLandlordInfo(): Promise<Landlord>;
}
