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
            income: 1000,
            kind: 'Health',
          },
          {
            name: 'Propiedad 2',
            id: '2',
            address: 'Avenida academia nº12',
            price: 240000,
            income: 1000,
            owner: 'Juan',
            kind: 'Transport',
          },
          {
            name: 'Propiedad 3',
            id: '3',
            address: 'Avenida academia nº12',
            price: 240000,
            income: 1000,
            kind: 'Education',
          },
          {
            name: 'Propiedad 4',
            id: '4',
            address: 'Avenida academia nº12',
            price: 240000,
            income: 1000,
            kind: 'Groceries',
          },
          {
            name: 'Propiedad 1',
            id: '1',
            address: 'Avenida academia nº12',
            price: 240000,
            income: 1000,
            kind: 'Health',
          },
          {
            name: 'Propiedad 2',
            id: '2',
            address: 'Avenida academia nº12',
            price: 240000,
            income: 1000,
            owner: 'Juan',
            kind: 'Transport',
          },
          {
            name: 'Propiedad 3',
            id: '3',
            address: 'Avenida academia nº12',
            price: 240000,
            income: 1000,
            kind: 'Education',
          },
          {
            name: 'Propiedad 4',
            id: '4',
            address: 'Avenida academia nº12',
            price: 240000,
            income: 1000,
            kind: 'Groceries',
          },
        ];
        const res: Landlord = {
          id: '1',
          name: 'Juan',
          access: 'Active',
          liquidity: 1000,
          properties: properties,
          lastDayIncome: 1000000000,
        };
        resolve(res);
      }, 100); // Simulando una llamada HTTP que tarda 1 segundo
    });
  }
}
