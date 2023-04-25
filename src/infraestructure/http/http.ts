import axios, { AxiosInstance } from "axios";

class AxiosSingleton {
  private static instance: AxiosInstance;

  private constructor() {}

  public static getInstance(): AxiosInstance {
    if (!AxiosSingleton.instance) {
      AxiosSingleton.instance = axios.create({
        // configuración de axios
      });
    }
    return AxiosSingleton.instance;
  }
}

export default AxiosSingleton.getInstance()