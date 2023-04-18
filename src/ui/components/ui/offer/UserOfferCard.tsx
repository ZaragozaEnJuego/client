import { FC } from 'react';
import { Offer } from '../../../../core/negotiations/domain';
import { Kind } from '../../../../core/properties/domain';
import { ReactComponent as SchoolIcon } from '/src/assets/graduation-cap-solid.svg';
import { ReactComponent as MedicalIcon } from '/src/assets/suitcase-medical-solid.svg';
import { ReactComponent as GrocerieIcon } from '/src/assets/utensils-solid.svg';
import { ReactComponent as TrainIcon } from '/src/assets/train-solid.svg';

interface Offers {
    offer: Offer;
}

const PropertyIcon = (kind: Kind) => {
  switch (kind) {
    case 'Health':
      return <MedicalIcon style={{ fill: '#2E3440' }} className={'h-full md:w-10 w-16 px-2'} />;

    case 'Groceries':
      return <GrocerieIcon style={{ fill: '#2E3440' }} className={'h-full md:w-10 w-16 px-2'} />;

    case 'Education':
      return <SchoolIcon style={{ fill: '#2E3440' }} className={'h-full md:w-10 w-16 px-2'} />;

    case 'Transport':
      return <TrainIcon style={{ fill: '#2E3440' }} className={'h-full md:w-10 w-16 px-2'} />;
    default:
      return <></>;
  }
};

const UserOfferCard: FC<Offers> = ({ offer }) => {
  return (
    <div style={{ background: '#8FBCBB' }} className='flex justify-center align-baseline items-center border w-full rounded-3xl py-2 px-4 my-4 h-100'>
    <div className='flex flex-col justify-center items-center'>
      <img className='w-10 h-10 object-cover rounded-full 'src='https://miro.medium.com/v2/resize:fit:785/0*Ggt-XwliwAO6QURi.jpg'/>
      <h1 className='text-xs text-nord1' >Tú</h1>
      <h1 className='text-xl lg:text-lg md:text-base sm:text-sm xs:text-xs w-50 font-bold text-primary'>{offer.amount}€</h1>
    </div>
    <div className='flex items-center justify-top mt-4 mx-4 flex-col'>
      {PropertyIcon('Transport')}
      <div className='flex flex-col items-bottom px-5 py-1 w-full'>
        <button className='items-center text-xs text-hover py-1 my-1 mx-2 w-20 rounded-lg bg-primary'
          onClick={() => { alert('Oferta cancelada');}}>Cancelar</button>
        <button style={{ background: '#8FBCBB', color: '#8FBCBB'}} className='items-center text-xs cursor-default py-1 my-1 w-20 rounded-lg mx-2'>Consultar</button>
      </div>
    </div>
    <div className='flex flex-col justify-center items-center '>
      <img className='w-10 h-10 object-cover rounded-full 'src='https://media.istockphoto.com/id/1151155288/es/foto/close-up-foto-incre%C3%ADble-hermosa-ella-sus-dedos-pulgar-de-la-dama-indican-directamente-pecho.jpg?s=612x612&w=0&k=20&c=NCuogVJLvUYYfMihKzWPAl7OPRQSsQsyWFKi6fyuty4='/>
      <h1 className='text-xs text-nord1' >Lucía</h1>
      <h1 style={{ background: '#8FBCBB' }} className={'w-50 font-bold text-lg lg:text-base md:text-sm xs:text-xs'}>Estación Delicias</h1>
    </div>
  </div>
    );
};
export { UserOfferCard };