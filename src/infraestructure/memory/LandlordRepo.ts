import { Landlord } from '../../core/landlord/model';
import { Kind, Propertie } from '../../core/properties/domain/model';

export class MemorieLandlordRepo {
  getLandlordInfo(): Promise<Landlord> {
    return new Promise((resolve, reject) => {
      // Aquí puedes hacer la lógica de la llamada HTTP, por ejemplo:
      setTimeout(() => {
        const properties: Propertie[] = [
          {
            name: 'Propiedad 1',
            id: '1',
            address: 'Avenida academia nº12',
            price: 240000,
            kind: 'Health',
            latitude: 30.6488,
            longitude: -0.8891
          },
          {
            name: 'Propiedad 2',
            id: '2',
            address: 'Avenida academia nº12',
            price: 240000,
            owner: 'Juan',
            kind: 'Transport',
            latitude: 35.6488,
            longitude: -0.8891
          },
          {
            name: 'Propiedad 3',
            id: '3',
            address: 'Avenida academia nº12',
            price: 240000,
            kind: 'Education',
            latitude: 41.6488,
            longitude: -0.8891
          },
          {
            name: 'Propiedad 4',
            id: '4',
            address: 'Avenida academia nº12',
            price: 240000,
            kind: 'Groceries',
            latitude: 47.6488,
            longitude: -0.8891
          },
          {
            name: 'Propiedad 1',
            id: '1',
            address: 'Avenida academia nº12',
            price: 240000,
            kind: 'Health',
            latitude: 41.6488,
            longitude: -5.8891
          },
          {
            name: 'Propiedad 2',
            id: '2',
            address: 'Avenida academia nº12',
            price: 240000,
            owner: 'Juan',
            kind: 'Transport',
            latitude: 41.6488,
            longitude: -10.8891
          },
          {
            name: 'Propiedad 3',
            id: '3',
            address: 'Avenida academia nº12',
            price: 240000,
            kind: 'Education',
            latitude: 41.6488,
            longitude: 5.8891
          },
          {
            name: 'Propiedad 4',
            id: '4',
            address: 'Avenida academia nº12',
            price: 240000,
            kind: 'Groceries',
            latitude: 41.6488,
            longitude: 10.8891
          },
        ];
        const res: Landlord = {
          liquidity: 1000,
          properties: properties,
          lastDayIncome: 1000000000,
        };
        resolve(res);
      }, 100); // Simulando una llamada HTTP que tarda 1 segundo
    });
  }
}
