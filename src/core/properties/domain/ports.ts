import { Propertie } from './model';

export interface IPropertieRepo {
  getAllProperties(): Promise<Propertie[]>;
}
