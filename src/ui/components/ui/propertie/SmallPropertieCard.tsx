import { FC, useEffect, useState } from 'react';
import { ReactComponent as SchoolIcon } from '/src/assets/graduation-cap-solid.svg';
import { ReactComponent as MedicalIcon } from '/src/assets/suitcase-medical-solid.svg';
import { ReactComponent as GrocerieIcon } from '/src/assets/utensils-solid.svg';
import { ReactComponent as TrainIcon } from '/src/assets/train-solid.svg';
import { Kind, Propertie } from '../../../../core/properties/domain';

interface Props {
  propertie: Propertie;
}

const SmallPropertieCard: FC<Props> = ({ propertie }) => {
  const chooseColor = (kind: Kind): string => {
    switch (kind) {
      case 'health':
        console.log(propertie.kind);
        return '#5E81AC';

      case 'groceries':
        console.log(propertie.kind);
        return '#a3be8c';

      case 'education':
        console.log(propertie.kind);
        return '#bf616a';

      case 'transport':
        console.log(propertie.kind);
        return '#b48ead';
      default:
        return '';
    }
  };

  const PropertieIcon = (kind: Kind) => {
    switch (kind) {
      case 'health':
        return (
          <MedicalIcon
            style={{ fill: chooseColor(propertie.kind) }}
            className={'h-full  w-14 px-2 '}
          />
        );

      case 'groceries':
        console.log(propertie.kind);
        return (
          <GrocerieIcon
            style={{ fill: chooseColor(propertie.kind) }}
            className={'h-full  w-14 px-2 '}
          />
        );

      case 'education':
        console.log(propertie.kind);
        return (
          <SchoolIcon
            style={{ fill: chooseColor(propertie.kind) }}
            className={'h-full  w-14 px-2 '}
          />
        );

      case 'transport':
        console.log(propertie.kind);
        return (
          <TrainIcon
            style={{ fill: chooseColor(propertie.kind) }}
            className={'h-full  w-14 px-2 '}
          />
        );
      default:
        return <></>;
    }
  };

  return (
    <div className=' flex  justify-center items-center border-opacity-30 border w-full rounded-3xl border-secondary  py-2 px-4  mt-3 h-28'>
      {PropertieIcon(propertie.kind)}
      <div className='flex flex-col '>
        <h1 className='text-2xl font-bold  text-primary'>{propertie.name}</h1>
        <h2 className='text-lg font-bold text-primary'>{propertie.address}</h2>
      </div>
    </div>
  );
};
export { SmallPropertieCard };
