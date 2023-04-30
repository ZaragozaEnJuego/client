import { Kind, KindRestrictions, Propertie } from './model';

export interface IPropertieRepo {
  getAllProperties(): Promise<Propertie[]>;
  getPropertieById(id: string): Promise<Propertie>;
  getKindRestrictions(id: string): Promise<KindRestrictions>;
  buyById(id: string): Promise<void>;
}
