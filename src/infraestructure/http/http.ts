import axios, { AxiosInstance } from 'axios';

export const baseUrl = import.meta.env.VITE_SERVER_URL ?? 'http://localhost:3000';

class AxiosSingleton {
  private static instance: AxiosInstance;

  private constructor() {}

  public static getInstance(): AxiosInstance {
    const baseUrl = import.meta.env.VITE_SERVER_URL ?? 'http://localhost:3000';
    if (!AxiosSingleton.instance) {
      AxiosSingleton.instance = axios.create({
        baseURL: baseUrl,
        // configuración de axios
      });
    }
    return AxiosSingleton.instance;
  }
}

export default AxiosSingleton.getInstance();
