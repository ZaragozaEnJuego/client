import { Kind, KindRestrictions, Propertie } from './model';

export interface IPropertieRepo {
  getAllProperties(): Promise<Propertie[]>;
  getPropertieById(id: string): Promise<Propertie>;
  getKindRestrictions(kind: Kind): Promise<KindRestrictions>;
  buyById(id: string): Promise<void>;
}
