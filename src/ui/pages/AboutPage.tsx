import { MainLayout } from '../components/layouts';
import { BarChart } from '../components/ui/BarChart';
import { DonutChart } from '../components/ui/DonutChart';
import { useState, useEffect } from 'react';

const AboutPage = () => {

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
          <BarChart data={[12, 19, 3, 5, 2, 3]} labels={['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']} />
          </div>
          <div className="w-1/3 collapse md:visible">
            <BarChart data={[12, 19, 3, 5, 2, 3]} labels={['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']} />
          </div>
          <div className="w-1/3 collapse md:visible">
            <DonutChart data={[12, 19, 3, 5, 2, 3]} labels={['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export { AboutPage };
