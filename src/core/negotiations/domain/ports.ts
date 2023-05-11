import { User } from '../../admin/domain';
import { Offer } from './model';

export interface IOfferRepo {
  getOwnerOffers(): Promise<Offer[]>;
  getOffererOffers(): Promise<Offer[]>;
  createOffer(_property: string, _owner: string, _offerer: string, _amount: number): Promise<string>;
  execOffer(offer: Offer, offerer: User, owner: User): Promise<string>;
  deleteOffer(offer: Offer): Promise<string>;
}