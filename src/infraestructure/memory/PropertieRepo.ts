import { Kind, KindRestrictions, Propertie } from '../../core/properties/domain/model';

export class MemoriePropertieRepo {
  list: Propertie[] = [
    {
      name: 'Propiedad 1',
      id: '1',
      address: 'Avenida academia nº12',
      price: 240000,
      kind: 'Health',
      latitude: 41.6488,
      longitude: -0.8891,
      income: 0,
    },
    {
      name: 'Propiedad 2',
      id: '2',
      address: 'Avenida academia nº12',
      price: 240000,
      owner: 'Juan',
      kind: 'Transport',
      latitude: 41.6488,
      longitude: -0.8891,
      income: 0,
    },
    {
      name: 'Propiedad 3',
      id: '3',
      address: 'Avenida academia nº12',
      price: 240000,
      kind: 'Education',
      latitude: 41.6488,
      longitude: -0.8891,
      income: 0,
    },
    {
      name: 'Propiedad 4',
      id: '4',
      address: 'Avenida academia nº12',
      price: 240000,
      kind: 'Groceries',
      latitude: 41.6488,
      longitude: -0.8891,
      income: 0,
    },
    {
      name: 'Propiedad 1',
      id: '1',
      address: 'Avenida academia nº12',
      price: 240000,
      kind: 'Health',
      latitude: 41.6488,
      longitude: -0.8891,
      income: 0,
    },
    {
      name: 'Propiedad 2',
      id: '2',
      address: 'Avenida academia nº12',
      price: 240000,
      owner: 'Juan',
      kind: 'Transport',
      latitude: 41.6488,
      longitude: -0.8891,
      income: 0,
    },
    {
      name: 'Propiedad 3',
      id: '3',
      address: 'Avenida academia nº12',
      price: 240000,
      kind: 'Education',
      latitude: 41.6488,
      longitude: -0.8891,
      income: 0,
    },
    {
      name: 'Propiedad 4',
      id: '4',
      address: 'Avenida academia nº12',
      price: 240000,
      kind: 'Groceries',
      latitude: 41.6488,
      longitude: -0.8891,
      income: 0,
    },
  ];

  

  getAllProperties(): Promise<Propertie[]> {
    return new Promise((resolve, reject) => {
      // Aquí puedes hacer la lógica de la llamada HTTP, por ejemplo:
      setTimeout(() => {
        resolve(this.list);
      }, 100); // Simulando una llamada HTTP que tarda 1 segundo
    });
  }
  getPropertieById(id: string): Promise<Propertie> {
    return new Promise((resolve, reject) => {
      // Aquí puedes hacer la lógica de la llamada HTTP, por ejemplo:
      setTimeout(() => {
        resolve(this.list[1]);
      }, 100); // Simulando una llamada HTTP que tarda 1 segundo
    });
  }

  getKindRestrictions(kind: Kind): Promise<KindRestrictions> {
    const restrictions: KindRestrictions = {
      EnergyConsumption: 300,
      MaxTemperature: { modifier: 10, value: 30 },
      MinTemperature: { modifier: -20, value: 10 },
      Weather: { cloudy: 10, sunny: 20, rainy: -4 },
    };
    return new Promise((resolve, reject) => {
      // Aquí puedes hacer la lógica de la llamada HTTP, por ejemplo:
      setTimeout(() => {
        resolve(restrictions);
      }, 100); // Simulando una llamada HTTP que tarda 1 segundo
    });
  }

  buyById(id: string): Promise<void> {
    return new Promise((resolve, reject) => {
      console.log('Buy propertie ', id);

      // Aquí puedes hacer la lógica de la llamada HTTP, por ejemplo:
      setTimeout(() => {
        resolve();
      }, 100); // Simulando una llamada HTTP que tarda 1 segundo
    });
  }
}
