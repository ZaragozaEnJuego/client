import { Kind, Propertie } from '../../properties/domain';
import { PropertyPurchaseData, User } from './model';
import { User } from './model';


export interface IUserRepo {
  getUserList(): Promise<User[]>
  updateAccess(access: boolean): Promise<string>
}

export interface IAdminStatsRepo {
  propertyPurchases(data: PropertyPurchaseData): Promise<string>
  getPropertiesByKind(kind: Kind): Promise<Propertie[]>
  collectPurchaseInfo(idProperty: string, date: Date, kind: Kind): Promise<string>
}
