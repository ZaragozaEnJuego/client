import { TokenJWT } from './model';

export interface IAuthRepo {
  getToken(): Promise<TokenJWT>;
}
