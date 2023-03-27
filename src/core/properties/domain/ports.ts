import { Propertie } from './model';

export interface IPropertieRepo {
  getAllProperties(): Promise<Propertie[]>;
  getPropertieById(id:string):Promise<Propertie>
}
