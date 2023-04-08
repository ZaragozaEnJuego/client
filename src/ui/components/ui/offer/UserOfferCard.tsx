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
      return <MedicalIcon style={{ fill: '#2E3440' }} className={'h-full  w-16 px-2'} />;

    case 'Groceries':
      return <GrocerieIcon style={{ fill: '#2E3440' }} className={'h-full  w-16 px-2'} />;

    case 'Education':
      return <SchoolIcon style={{ fill: '#2E3440' }} className={'h-full  w-16 px-2'} />;

    case 'Transport':
      return <TrainIcon style={{ fill: '#2E3440' }} className={'h-full  w-16 px-2'} />;
    default:
      return <></>;
  }
};

const UserOfferCard: FC<Offers> = ({ offer }) => {
    return (
        <div style={{ backgroundColor:'#8FBCBB', color: '#2E3440' }} className='flex justify-between items-center border w-100 rounded-3xl py-2 px-4 my-2 h-auto'>
        <div className='flex flex-col justify-center items-center '>
          <img className='w-10 h-10 object-cover rounded-full' src='https://media.istockphoto.com/id/1151155288/es/foto/close-up-foto-incre%C3%ADble-hermosa-ella-sus-dedos-pulgar-de-la-dama-indican-directamente-pecho.jpg?s=612x612&w=0&k=20&c=NCuogVJLvUYYfMihKzWPAl7OPRQSsQsyWFKi6fyuty4='/>
          <h1 className='text-xs text-nord1 items-center justify-center' >Lucía</h1>
          <h1 className='flex text-lg justify-center font-bold text-primary'>Hospital Quironsalud</h1>
        </div>
        <div className='flex items-center justify-center align-top flex-col'>
          {PropertyIcon('Health')}
          <div className='flex flex-col-2 px-5 py-2 w-full'>
            <button className='font-bold bg-primary text-secondary text-xs py-1 w-20 rounded-lg mx-2'
              onClick={() => { alert('Oferta cancelada');}}>Cancelar</button>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center '>
          <img className='w-10 h-10 object-cover rounded-full' src='https://miro.medium.com/v2/resize:fit:785/0*Ggt-XwliwAO6QURi.jpg'/>
          <h1 className='text-xs text-nord1' >Tú</h1>
          <h1 style={{ color: 'nord0' }} className={ 'font-bold text-2xl' }>{offer.amount}€</h1>
        </div>
      </div>
    );
};
export { UserOfferCard };