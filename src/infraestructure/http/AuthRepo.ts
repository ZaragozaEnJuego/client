import { Credentials } from '../../core/auth/domain/model';
import axios from './http';
export class HttpAuthRepo {
  async getToken(): Promise<Credentials> {
    const tokenUrl = '/api/auth/google/login';

    const token = (
      await axios.get<Credentials>(tokenUrl, {
        withCredentials: true,
      })
    ).data;

    return token;
  }
}
