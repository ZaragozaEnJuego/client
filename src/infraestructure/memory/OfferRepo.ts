import { Offer } from '../../core/negotiations/domain';
import { Propertie } from '../../core/properties/domain/model';
import { Landlord } from '../../core/landlord/model';


export class MemoryOfferRepo {
    propertiesOwner: Propertie[] = [
        {
            name: 'Estación Delicias',
            id: '100',
            address: 'Paseo de las delicias, 6',
            price: 250000,
            owner: 'Lucía',
            kind: 'Transport',
            income: 0,
          },
          {
            name: 'Campus Río Ebro',
            id: '101',
            address: 'Calle María de Luna, 1',
            price: 50000,
            owner: 'Lucía',
            kind: 'Education',
            income: 0,
          },
    ];
    propertiesOfferer: Propertie[] = [
        {
            name: 'Bar Pepe',
            id: '102',
            address: 'Paseo de Sagasta, 8',
            price: 200000,
            owner: 'Tú',
            kind: 'Groceries',
            income: 0,
          },
          {
            name: 'Hospital Quironsalud',
            id: '103',
            address: 'Calle los trineos, 90',
            price: 150000,
            owner: 'Tú',
            kind: 'Health',
            income: 0,
          },
    ];
    landlords: Landlord[] = [
        {
            id: '1',
            name: 'Lucía',
            access: 'Active',
            liquidity: 100000,
            lastDayIncome: 10000,
            properties: this.propertiesOwner,
        },
        {
            id: '2',
            name: 'Juan',
            access: 'Active',
            liquidity: 100000,
            lastDayIncome: 10000,
            properties: this.propertiesOfferer,
        },
    ];
    myOffers: Offer[] = [
        {
            id: '1',
            property: '100',
            offerer: '',
            owner: '',
            amount: 150000,
        },
        {
            id: '2',
            property: '101',
            offerer: '',
            owner: '',
            amount: 180000,
        },
    ];
    offers: Offer[] = [
      {
          id: '3',
          property: '102',
          offerer: '',
          owner: '',
          amount: 250000,
      },
      {
          id: '4',
          property: '103',
          offerer: '',
          owner: '',
          amount: 128000,
      },
  ];

    getAllMyOffers(): Promise<Offer[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(this.myOffers);
            }, 100);
          });
    }

    getAllOffers(): Promise<Offer[]> {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(this.offers);
          }, 100);
        });
  }
}