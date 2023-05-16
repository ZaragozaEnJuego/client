import { User } from './model';

export interface IUserRepo {
  getUserList(): Promise<User[]>
  updateAccess(id: string, access: boolean): Promise<string>
}
