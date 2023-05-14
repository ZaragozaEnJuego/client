import axios from './http';

interface WeatherDataDTO {
  _id: string;
  date: Date;
  temperature: number;
  state: string;
  electricity: number;
  __v: number;
}

interface WeatherData {
  id: string;
  date: Date;
  temperature: number;
  state: string;
  electricity: number;
}

export class StatsRepo {
  async getAllWeatherData(): Promise<WeatherData[]> {
    const response = await axios.get<WeatherDataDTO[]>('/weather', {
      headers: {
        accept: 'application/json',
      },
    });
    if (response.status !== 200) {
      throw new Error('No se pudo obtener los datos del clima');
    }

    return response.data.map((weatherDto) => {
      const weather: WeatherData = {
        id: weatherDto._id,
        date: new Date(weatherDto.date),
        temperature: weatherDto.temperature,
        state: weatherDto.state,
        electricity: weatherDto.electricity,
      };
      return weather;
    });
  }
}