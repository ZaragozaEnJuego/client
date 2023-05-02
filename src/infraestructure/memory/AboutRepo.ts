import { WeatherData } from '../../core/about/domain/model';
import Chart from 'chart.js';

export class MemorieAboutRepo {
    list: WeatherData[] = [
      {
        date: new Date('2023-03-20T15:30:00Z'),
        temperature: 17,
        state: "Soleado",
        electricity: 160,
      },
      {
        date: new Date('2023-03-21T15:30:00Z'),
        temperature: 12,
        state: "Soleado",
        electricity: 100,
      },
      {
        date: new Date('2023-03-22T15:30:00Z'),
        temperature: 17,
        state: "Lluvia",
        electricity: 200,
      },
      {
        date: new Date('2023-03-23T15:30:00Z'),
        temperature: 2,
        state: "Lluvia",
        electricity: 190,
      },
      {
        date: new Date('2023-03-24T15:30:00Z'),
        temperature: 8,
        state: "Lluvia",
        electricity: 30,
      },
      {
        date: new Date('2023-03-25T15:30:00Z'),
        temperature: 12,
        state: "Nublado",
        electricity: 120,
      },
      {
        date: new Date('2023-03-26T15:30:00Z'),
        temperature: 17,
        state: "Nublado",
        electricity: 140,
      },
      {
        date: new Date('2023-03-27T15:30:00Z'),
        temperature: 1,
        state: "Soleado",
        electricity: 120,
      },
    ];
}

export function getTemperatureChartData(data: WeatherData[]) : { chartDataValuesTemperature: number[], chartLabelsTemperature: string[] } {
    const labels = data.map((item) => item.date.toLocaleDateString());
    const temperatures = data.map((item) => item.temperature);
  
    const chartDataValuesTemperature: number[] = temperatures;
    const chartLabelsTemperature: string[] = labels;
  
    return { chartDataValuesTemperature, chartLabelsTemperature };
  }

  export function getElectricityChartData(data: WeatherData[]) : { chartDataValuesElectricity: number[], chartLabelsElectricity: string[] } {
    const labels = data.map((item) => item.date.toLocaleDateString());
    const electricities = data.map((item) => item.electricity);
  
    const chartDataValuesElectricity: number[] = electricities;
    const chartLabelsElectricity: string[] = labels;
  
    return { chartDataValuesElectricity, chartLabelsElectricity };
  }

  export function getStateChartData(data: WeatherData[]) : { chartDataValuesState: number[], chartLabelsState: string[] } {
    let sunnyCount = 0;
    let cloudyCount = 0;
    let rainCount = 0;

    for (const item of data) {
        switch (item.state) {
            case "Soleado":
                sunnyCount++;
                break;
            case "Nublado":
                cloudyCount++;
                break;
            case "Lluvia":
                rainCount++;
                break;
        }
    }

    const chartDataValuesState: number[] = [sunnyCount, cloudyCount, rainCount];
    const chartLabelsState: string[] = ['Soleado', 'Nublado', 'Lluvia'];
  
    return { chartDataValuesState, chartLabelsState };
    
  }