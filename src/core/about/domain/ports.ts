import { WeatherData} from './model';

export interface IPropertieRepo {
    getTemperatureChartData(data: WeatherData[]) : { chartDataValuesTemperature: number[], chartLabelsTemperature: string[] };
    getElectricityChartData(data: WeatherData[]) : { chartDataValuesElectricity: number[], chartLabelsElectricity: string[] };
    getStateChartData(data: WeatherData[]) : { chartDataValuesState: number[], chartLabelsState: string[] };
}