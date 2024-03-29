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

    const landlord: any = response.data;
    landlord.properties.map((p: any, k: any) => (p.id = p._id));
    return landlord;
  }
}
