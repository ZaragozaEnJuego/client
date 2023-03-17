import { Propertie } from '../../core/properties/domain/model';

export class MemoriePropertieRepo {
  getAllProperties(): Promise<Propertie[]> {
    return new Promise((resolve, reject) => {
      // Aquí puedes hacer la lógica de la llamada HTTP, por ejemplo:
      setTimeout(() => {
        const properties: Propertie[] = [
          { name: 'Propiedad 1', id: '1' },
          { name: 'Propiedad 2', id: '2' },
          { name: 'Propiedad 3', id: '3' },
        ];
        resolve(properties);
      }, 100); // Simulando una llamada HTTP que tarda 1 segundo
    });
  }
}
