import { FC, useEffect, useState } from 'react';
import { Offer } from '../../../../core/negotiations/domain';
import { Propertie } from '../../../../core/properties/domain';
import { ReactComponent as SchoolIcon } from '/src/assets/graduation-cap-solid.svg';
import { ReactComponent as MedicalIcon } from '/src/assets/suitcase-medical-solid.svg';
import { ReactComponent as GrocerieIcon } from '/src/assets/utensils-solid.svg';
import { ReactComponent as TrainIcon } from '/src/assets/train-solid.svg';

interface Offers {
    offer: Offer;
}

const PropertyIcon = (property: Propertie) => {
  switch (property.kind) {
    case 'Health':
      return <MedicalIcon style={{ fill: '#2E3440'}} className={'h-full  w-14 px-2'} />;

    case 'Groceries':
      return <GrocerieIcon style={{ fill: '#2E3440' }} className={'h-full  w-20 px-2'} />;

    case 'Education':
      return <SchoolIcon style={{ fill: '#2E3440' }} className={'h-full  w-20 px-2'} />;

    case 'Transport':
      return <TrainIcon style={{ fill: '#2E3440' }} className={'h-full  w-14 px-2'} />;
    default:
      return <></>;
  }
};

const UserOfferCard: FC<Offers> = ({ offer }) => {
    return (
        <div style={{ backgroundColor:'#8FBCBB',   color: '#2E3440' }} className=' flex  justify-between items-center border w-full rounded-3xl  py-2 px-4  mt-3 h-36'>
        <div className='flex flex-col justify-center items-center '>
          <img className='w-10 h-10 object-cover rounded-full 'src='https://media.istockphoto.com/id/1151155288/es/foto/close-up-foto-incre%C3%ADble-hermosa-ella-sus-dedos-pulgar-de-la-dama-indican-directamente-pecho.jpg?s=612x612&w=0&k=20&c=NCuogVJLvUYYfMihKzWPAl7OPRQSsQsyWFKi6fyuty4='/>
          <h1 className='text-xs text-nord1 items-center justify-center' >{offer.property.owner}</h1>
          <h1 className='text-2xl justify-center font-bold text-primary'>{offer.property.name}</h1>
        </div>
        <div className='flex items-center justify-center align-top flex-col'>{PropertyIcon(offer.property)}</div>
        <div className='flex flex-col justify-center items-center '>
          <img className='w-10 h-10 object-cover rounded-full 'src='https://miro.medium.com/v2/resize:fit:785/0*Ggt-XwliwAO6QURi.jpg'/>
          <h1 className='text-xs text-nord1' >Tú</h1>
          <h1 style={{ color: 'nord0' }} className={ 'font-bold text-4xl' }>{offer.amount}€</h1>
        </div>
      </div>
    );
};
export { UserOfferCard };