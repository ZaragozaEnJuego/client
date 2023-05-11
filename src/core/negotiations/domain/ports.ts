import { Offer } from './model';

export interface IOfferRepo {
  getOwnerOffers(): Promise<Offer[]>;
  getOffererOffers(): Promise<Offer[]>;
  createOffer(_property: string, _owner: string, _offerer: string, _amount: number): Promise<string>;
  execOffer(offerId: string): Promise<string>;
  deleteOffer(offerId: string): Promise<string>;
}