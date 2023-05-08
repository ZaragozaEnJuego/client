import { Credentials } from './model';

export interface IAuthRepo {
  getToken(): Promise<Credentials>;
}
