/*  Sistemas y Tecnologías Web - Fabra Caro, Francisco
*   Proyecto:                    Zaragoza en Juego 
*   Fichero:                     AboutPage.tsx
*   Desarrolladores:             Aréjula Aísa, Íñigo                  - 785370              
*                                González Martínez de Apellániz, Ibón - 756878
*                                Ruiz Borao, Juan José                - 756640
*                                Penacho, Ismael                      - 774572
*/

import { MainLayout } from '../components/layouts';
import { BarChart, TemperatureBarChart, ElectricityBarChart } from '../components/ui/BarChart';
import { DonutChart, StateDonutChart } from '../components/ui/DonutChart';
import { useState, useEffect } from 'react';
import { StatsRepo } from '../../infraestructure/http/StatsRepo';
import { MemorieAboutRepo, getTemperatureChartData, getElectricityChartData, getStateChartData } from '../../infraestructure/memory/AboutRepo';
import { WeatherData } from '../../core/about/domain/model';


const AboutPage = () => {
  const [weatherDataList, setWeatherDataList] = useState<WeatherData[]>([]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const statsRepo = new StatsRepo();
      const weatherData = await statsRepo.getAllWeatherData();
      setWeatherDataList(weatherData);
    };

    fetchWeatherData();
  }, []);

  const { chartDataValuesTemperature, chartLabelsTemperature } = getTemperatureChartData(weatherDataList);
  const { chartDataValuesElectricity, chartLabelsElectricity } = getElectricityChartData(weatherDataList);
  const { chartDataValuesState, chartLabelsState } = getStateChartData(weatherDataList);

  return (
    <MainLayout>
      <div className='overflow-y-scroll overflow-x-clip pr-2 h-full '>
        <h1 className="font-bold text-primary text-3xl">Acerca del juego</h1>
        <p className="text-black text-lg mt-4">ZARAGOZA EN JUEGO es el clásico juego de operaciones inmobiliarias, 
        consistente en hacer grandes negocios comprando el mayor número de propiedades posible.<br/><br/>
        Navega sobre el mapa o a través de la lista de propiedades y toma decisiones para comprar propiedades a la 
        banca o negocia para obtener las propiedades de otros jugadores. Tu éxito dependerá de unas inversiones inteligentes 
        y de tus dotes como negociador y, sobretodo, evita la bancarrota a cualquier precio.<br/><br/>
        ¿Serás capaz de convertirte en el propietario más poderoso?<br/><br/>
        </p>
        <div className="flex flex-row collapse md:visible">
          <div className="w-1/3 collapse md:visible">
            <TemperatureBarChart data={chartDataValuesTemperature} labels={chartLabelsTemperature} />
          </div>
          <div className="w-1/3 collapse md:visible">
            <ElectricityBarChart data={chartDataValuesElectricity} labels={chartLabelsElectricity} />
          </div>
          <div className="w-1/3 collapse md:visible">
            <StateDonutChart data={chartDataValuesState} labels={chartLabelsState} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export { AboutPage };
