import { Offer } from './model';

export interface IOfferRepo {
  getOwnerOffers(): Promise<Offer[]>;
  getOffererOffers(): Promise<Offer[]>;
}