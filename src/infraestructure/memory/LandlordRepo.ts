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
            income:10,
          },
          {
            name: 'Propiedad 2',
            id: '2',
            address: 'Avenida academia nº12',
            price: 240000,
            owner: 'Juan',
            kind: 'Transport',
            income:10,
          },
          {
            name: 'Propiedad 3',
            id: '3',
            address: 'Avenida academia nº12',
            price: 240000,
            kind: 'Education',
            income:10,
          },
          {
            name: 'Propiedad 4',
            id: '4',
            address: 'Avenida academia nº12',
            price: 240000,
            kind: 'Groceries',
            income:10,
          },
          {
            name: 'Propiedad 1',
            id: '1',
            address: 'Avenida academia nº12',
            price: 240000,
            kind: 'Health',
            income:10,
          },
          {
            name: 'Propiedad 2',
            id: '2',
            address: 'Avenida academia nº12',
            price: 240000,
            owner: 'Juan',
            kind: 'Transport',
            income:10,
          },
          {
            name: 'Propiedad 3',
            id: '3',
            address: 'Avenida academia nº12',
            price: 240000,
            kind: 'Education',
            income:10,
          },
          {
            name: 'Propiedad 4',
            id: '4',
            address: 'Avenida academia nº12',
            price: 240000,
            kind: 'Groceries',
            income:10,
          },
        ];
        const res: Landlord = {
          liquidity: 1000,
          properties: properties,
          lastDayIncome: 1000000000,
          id: '12',
          access: true,
          name: 'Lorenzo'
        };
        resolve(res);
      }, 100); // Simulando una llamada HTTP que tarda 1 segundo
    });
  }
}
