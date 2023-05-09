import axios from './http'
import { PropertyPurchaseData, User } from '../../core/admin/domain'
import { Kind, Propertie } from '../../core/properties/domain'

export class HTTPAdminStatsRepo {
    async propertyPurchases(data: PropertyPurchaseData): Promise<string> {
        return ''
    }
    async getPropertiesByKind(kind: Kind): Promise<Propertie[]> {
        return []
    }
    async collectPurchaseInfo(idProperty: string, date: Date, kind: Kind): Promise<string> {
        return ''
    }
}