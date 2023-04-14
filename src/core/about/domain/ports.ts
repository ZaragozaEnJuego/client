import { WeatherData} from './model';

export interface IPropertieRepo {
    getTemperatureChartData(data: WeatherData[]);
    getElectricityChartData(data: WeatherData[]);
    getStateChartData(data: WeatherData[]);
}