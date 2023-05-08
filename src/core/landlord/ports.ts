import { Landlord } from './model';

export interface ILandlordRepo {
  getLandlordInfo(id: string): Promise<Landlord>;
}
