import { UnitsPerDay, User } from './model';

export interface IUserRepo {
  getUserList(): Promise<User[]>
  updateAccess(id: string, access: boolean): Promise<string>
}

export interface IAdminStatsRepo {
  getTransactionsPerDay(): Promise<UnitsPerDay[]>
  getNewUsersPerDay(): Promise<UnitsPerDay[]>
}
