import { TokenJWT } from '../../core/auth/domain/model';
import axios from './http';
export class HttpAuthRepo {
  async getToken(): Promise<TokenJWT> {
    const tokenUrl = 'http://localhost:3000/api/auth/google/login';

    const token = (
      await axios.get<TokenJWT>(tokenUrl, {
        withCredentials: true,
      })
    ).data;

    return token;
  }
}