import { User } from './model';

export interface IUserRepo {
  getAllUsers(): Promise<User[]>;
}