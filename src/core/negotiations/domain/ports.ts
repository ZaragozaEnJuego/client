import { Offer } from './model';

export interface IOfferRepo {
  getOwnerOffers(id: string): Promise<Offer[]>;
  getOffererOffers(id: string): Promise<Offer[]>;
  createOffer(_property: string, _offerer: string, _amount: number): Promise<string>;
  execOffer(offerId: string): Promise<string>;
  deleteOffer(offerId: string): Promise<string>;
}
