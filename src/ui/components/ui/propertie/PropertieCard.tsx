import { FC, useEffect, useState } from 'react';
import { ReactComponent as SchoolIcon } from '/src/assets/graduation-cap-solid.svg';
import { ReactComponent as MedicalIcon } from '/src/assets/suitcase-medical-solid.svg';
import { ReactComponent as GrocerieIcon } from '/src/assets/utensils-solid.svg';
import { ReactComponent as TrainIcon } from '/src/assets/train-solid.svg';
import { Kind, Propertie } from '../../../../core/properties/domain';

interface Props {
  propertie: Propertie;
}

const PropertieCard: FC<Props> = ({ propertie }) => {
  const chooseColor = (kind: Kind): string => {
    switch (kind) {
      case 'Health':
        console.log(propertie.kind);
        return '#5E81AC';

      case 'Groceries':
        console.log(propertie.kind);
        return '#a3be8c';

      case 'Education':
        console.log(propertie.kind);
        return '#bf616a';

      case 'Transport':
        console.log(propertie.kind);
        return '#b48ead';
      default:
        return '';
    }
  };

  const PropertieIcon = (kind: Kind) => {
    switch (kind) {
      case 'Health':
        return (
          <MedicalIcon
            style={{ fill: chooseColor(propertie.kind) }}
            className={'h-full  w-24 px-2 '}
          />
        );

      case 'Groceries':
        console.log(propertie.kind);
        return (
          <GrocerieIcon
            style={{ fill: chooseColor(propertie.kind) }}
            className={'h-full  w-20 px-2 '}
          />
        );

      case 'Education':
        console.log(propertie.kind);
        return (
          <SchoolIcon
            style={{ fill: chooseColor(propertie.kind) }}
            className={'h-full  w-24 px-2 '}
          />
        );

      case 'Transport':
        console.log(propertie.kind);
        return (
          <TrainIcon
            style={{ fill: chooseColor(propertie.kind) }}
            className={'h-full  w-20 px-2 '}
          />
        );
      default:
        return <></>;
    }
  };

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
          {propertie.price}
        </h1>
        <h2 className='text-secondary font-bold text-2xl'>
          {propertie.owner === undefined ? 'Disponible' : 'Vendido'}
        </h2>
      </div>
    </div>
  );
};
export { PropertieCard };
