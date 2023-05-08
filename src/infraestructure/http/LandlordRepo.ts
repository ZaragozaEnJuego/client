import { Landlord } from '../../core/landlord/model';
import axios from './http';

export class HttpLandlordRepo {
  async getLandlordInfo(id: string): Promise<Landlord> {
    const response = await axios.get<Landlord>(`/users/${id}`, {
      headers: {
        accept: 'application/json',
      },
    });
    if (response.status !== 200) {
      throw new Error('No se puedo obtener las propiedades');
    }
    return response.data;
  }
}
