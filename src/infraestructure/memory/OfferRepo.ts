import { Offer } from '../../core/negotiations/domain'

export class MemoryOfferRepo {
    myOffers: Offer[] = [
        {
            id: '1',
            property: '',
            offerer: '',
            owner: '',
            amount: 150000,
        },
        {
            id: '2',
            property: '',
            offerer: '',
            owner: '',
            amount: 180000,
        },
        {
          id: '10',
          property: '',
          offerer: '',
          owner: '',
          amount: 180000,
        },
        {
          id: '10',
          property: '',
          offerer: '',
          owner: '',
          amount: 180000,
        },
        {
          id: '10',
          property: '',
          offerer: '',
          owner: '',
          amount: 180000,
        },
        {
          id: '3',
          property: '',
          offerer: '',
          owner: '',
          amount: 180000,
        },
        {
          id: '4',
          property: '',
          offerer: '',
          owner: '',
          amount: 180000,
        },
    ];
    offers: Offer[] = [
      {
          id: '5',
          property: '',
          offerer: '',
          owner: '',
          amount: 250000,
      },
      {
          id: '6',
          property: '',
          offerer: '',
          owner: '',
          amount: 128000,
      },
      {
        id: '7',
        property: '',
        offerer: '',
        owner: '',
        amount: 180000,
      },
      {
        id: '8',
        property: '',
        offerer: '',
        owner: '',
        amount: 180000,
      },
      {
        id: '9',
        property: '',
        offerer: '',
        owner: '',
        amount: 180000,
      },
      {
        id: '10',
        property: '',
        offerer: '',
        owner: '',
        amount: 180000,
      },
      {
        id: '10',
        property: '',
        offerer: '',
        owner: '',
        amount: 180000,
      },
      {
        id: '10',
        property: '',
        offerer: '',
        owner: '',
        amount: 180000,
      },
      {
        id: '10',
        property: '',
        offerer: '',
        owner: '',
        amount: 180000,
      },
      {
        id: '10',
        property: '',
        offerer: '',
        owner: '',
        amount: 180000,
      },
  ];

    getOffererOffers(): Promise<Offer[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(this.myOffers);
            }, 100);
          });
    }

    getOwnerOffers(): Promise<Offer[]> {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(this.offers);
          }, 100);
        });
  }
}