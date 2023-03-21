import { Kind, Propertie } from '../../core/properties/domain/model';

export class MemoriePropertieRepo {
  getAllProperties(): Promise<Propertie[]> {
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
          },
          {
            name: 'Propiedad 2',
            id: '2',
            address: 'Avenida academia nº12',
            price: 240000,
            owner: 'Juan',
            kind: 'Transport',
          },
          {
            name: 'Propiedad 3',
            id: '3',
            address: 'Avenida academia nº12',
            price: 240000,
            kind: 'Education',
          },
          {
            name: 'Propiedad 4',
            id: '4',
            address: 'Avenida academia nº12',
            price: 240000,
            kind: 'Groceries',
          },
        ];
        resolve(properties);
      }, 100); // Simulando una llamada HTTP que tarda 1 segundo
    });
  }
}
