import axios from './http'
import { PropertyPurchaseData, User } from '../../core/admin/domain'
import { Kind, Propertie } from '../../core/properties/domain'

export class HTTPAdminStatsRepo {
    async propertyPurchases(): Promise<PropertyPurchaseData[]> {
        interface PurchaseDTO {
            property: string,
            kind: Kind,
            date: Date
        }
        const response = await axios.get<PurchaseDTO[]>('/adminstats/purchases', {
            headers: {
                accept: 'application/json'
            }
        })
        if (response.status !== 200) {
            throw new Error('No se pudo obtener los datos de las compras');
          }
        return response.data.map((purchaseDTO) => {
            const purchase: PropertyPurchaseData = {
                property: purchaseDTO.property,
                kind: purchaseDTO.kind,
                date: purchaseDTO.date
            }
            return purchase
        })
    }

    async getPropertiesByKind(kind: Kind): Promise<Propertie[]> {
        interface PropertieDTO {
            _id: string;
            name: string;
            kind: 'transport' | 'education' | 'health' | 'groceries';
            address: string;
            lng: number;
            lat: number;
            price: number;
            baseIncome: number;
            owener?: string;
        }
        const response = await axios.get<PropertieDTO[]>(`/adminstats/${kind}`, {
            headers: {
                accept: 'application/json'
            }
        })
        if (response.status !== 200) {
            throw new Error('No se pudo obtener los datos de las propiedades');
          }
          console.log(response.data);
          return response.data.map((propertieDto) => {
            const prop: Propertie = {
              address: propertieDto.address,
              id: propertieDto._id,
              income: propertieDto.baseIncome,
              kind: propertieDto.kind,
              lat: propertieDto.lat,
              lng: propertieDto.lng,
              name: propertieDto.name,
              price: propertieDto.price,
              owner: propertieDto.owener,
            };
            return prop;
          });
    }
}