/*  Sistemas y Tecnologías Web - Fabra Caro, Francisco
*   Proyecto:                    Zaragoza en Juego 
*   Fichero:                     PropertieCard.tsx
*   Desarrolladores:             Aréjula Aísa, Íñigo                  - 785370              
*                                González Martínez de Apellániz, Ibón - 756878
*                                Ruiz Borao, Juan José                - 756640
*                                Penacho, Ismael                      - 774572
*/

import { FC, useEffect, useState } from 'react';
import { ReactComponent as SchoolIcon } from '/src/assets/graduation-cap-solid.svg';
import { ReactComponent as MedicalIcon } from '/src/assets/suitcase-medical-solid.svg';
import { ReactComponent as GrocerieIcon } from '/src/assets/utensils-solid.svg';
import { ReactComponent as TrainIcon } from '/src/assets/train-solid.svg';
import { Kind, Propertie } from '../../../../core/properties/domain';
import { chooseColor, PropertieIcon } from '../../../../utils/kindsSelector';

interface Props {
  propertie: Propertie;
}

const PropertieCard: FC<Props> = ({ propertie }) => {
  return (
    <div className=' flex  justify-between items-center border-opacity-30 border w-full rounded-3xl border-secondary  py-2 px-4  mt-3 h-36'>
      <div className='flex items-center justify-between '>
        {PropertieIcon(propertie.kind)}
        <div className='flex flex-col '>
          <h1 className='text-4xl font-bold  text-primary'>{propertie.name}</h1>
          <h2 className='text-xl font-bold text-primary'>{propertie.address}</h2>
        </div>
      </div>
      <div className='flex flex-col collapse xl:visible justify-center items-center '>
        <h1 style={{ color: chooseColor(propertie.kind) }} className={' font-bold text-6xl'}>
          {propertie.price}€
        </h1>
        <h2 className='text-secondary font-bold text-2xl'>
          {propertie.owner === undefined ? 'Disponible' : 'Vendido'}
        </h2>
      </div>
    </div>
  );
};
export { PropertieCard };
