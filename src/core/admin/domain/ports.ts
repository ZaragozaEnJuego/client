import { User } from './model';

export interface IUserRepo {
  getUserList(): Promise<User[]>
  updateAccess(access: boolean): Promise<string>
}
