import axios from 'axios';
import { Kind, KindRestrictions, Propertie } from '../../core/properties/domain/model';

export class HttpPropertieRepo {
  async getAllProperties(): Promise<Propertie[]> {
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
    const response = await axios.get<PropertieDTO[]>('http://localhost:3000/properties', {
      headers: {
        accept: 'application/json',
      },
    });
    if (response.status !== 200) {
      throw new Error('No se puedo obtener las propiedades');
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
  async getPropertieById(id: string): Promise<Propertie> {
    interface PropertieDTO {
      name: string;
      address: string;
      _id: string;
      price: number;
      baseIncome: number;
      kind: 'transport' | 'education' | 'health' | 'groceries';
      owner?: string;
      stats: {
        date: string;
        baseIncome: number;
      }[];
    }
    const response = await axios.get<PropertieDTO>(`http://localhost:3000/properties/${id}`, {
      headers: {
        accept: 'application/json',
      },
    });
    if (response.status !== 200) {
      throw new Error('No se puedo obtener los datos de la propiedad');
    }
    const propertieRes = response.data;
    const propertie: Propertie = {
      address: propertieRes.address,
      id: propertieRes._id,
      income: propertieRes.baseIncome,
      kind: propertieRes.kind,
      lat: 0,
      lng: 0,
      name: propertieRes.name,
      price: propertieRes.price,
      owner: propertieRes.owner,
    };
    console.log(propertie);
    return propertie;
  }

  async getKindRestrictions(id: string): Promise<KindRestrictions> {
    const response = await axios.get<KindRestrictions>(
      `http://localhost:3000/properties/${id}/kindrules`,
      {
        headers: {
          accept: 'application/json',
        },
      },
    );
    if (response.status !== 200) {
      throw new Error('No se puedo obtener los datos de la propiedad');
    }
    console.log(response.data);

    return response.data;
  }

  async buyById(id: string): Promise<string> {
    const response = await axios.post<{ id: string }>(
      `http://localhost:3000/properties/${id}/buy`,
      {
        ownerId: '644cdc7fdf537c6dac5b2db6',
      },
    );

    if (response.status !== 201) {
      throw new Error('No se puedo obtener los datos de la propiedad');
    }
    console.log(response.data);
    return response.data.id;
  }
}
