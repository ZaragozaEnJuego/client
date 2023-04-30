import axios from 'axios';
import { Kind, KindRestrictions, Propertie } from '../../core/properties/domain/model';

export class HttpPropertieRepo {
  async getAllProperties(): Promise<Propertie[]> {
    const response = await axios.get<Propertie[]>('http://localhost:3000/properties', {
      headers: {
        accept: 'application/json',
      },
    });
    if (response.status !== 200) {
      throw new Error('No se puedo obtener las propiedades');
    }
    console.log(response.data);

    return response.data;
  }
  getPropertieById(id: string): Promise<Propertie> {
    throw Error('not implemented');
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
