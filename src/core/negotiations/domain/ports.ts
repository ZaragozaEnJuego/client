import { Offer } from './model';

export interface IOfferRepo {
  getAllOffers(): Promise<Offer[]>;
  getAllMyOffers(): Promise<Offer[]>;
}