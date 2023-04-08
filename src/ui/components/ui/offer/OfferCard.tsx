import { FC } from 'react';
import { Offer } from '../../../../core/negotiations/domain';
import { chooseColor } from '../../../../utils/kindsSelector';
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
      return <MedicalIcon style={{ fill: chooseColor(kind) }} className={'h-full  w-16 px-2'} />;

    case 'Groceries':
      return <GrocerieIcon style={{ fill: chooseColor(kind) }} className={'h-full  w-16 px-2'} />;

    case 'Education':
      return <SchoolIcon style={{ fill: chooseColor(kind) }} className={'h-full  w-16 px-2'} />;

    case 'Transport':
      return <TrainIcon style={{ fill: chooseColor(kind) }} className={'h-full  w-16 px-2'} />;
    default:
      return <></>;
  }
};

const OfferCard: FC<Offers> = ({ offer }) => {
    return (
        <div style={{ color: chooseColor('Transport') }} className='flex justify-between items-center border w-full rounded-3xl py-2 px-4 my-2 h-auto'>
        <div className='flex flex-col justify-center items-center'>
          <img className='w-10 h-10 object-cover rounded-full 'src='https://media.istockphoto.com/id/1151155288/es/foto/close-up-foto-incre%C3%ADble-hermosa-ella-sus-dedos-pulgar-de-la-dama-indican-directamente-pecho.jpg?s=612x612&w=0&k=20&c=NCuogVJLvUYYfMihKzWPAl7OPRQSsQsyWFKi6fyuty4='/>
          <h1 className='text-xs text-nord1' >Lucía</h1>
          <h1 style={{ color: chooseColor('Transport') }} className={' font-bold text-2xl'}>250000€</h1>
        </div>
        <div className='flex items-center justify-center flex-col'>
          {PropertyIcon('Transport')}
          <div className='flex flex-col-2 px-5 py-2 w-full'>
            <button className='text-sm text-primary py-1 w-20 rounded-lg mx-2 bg-green-nord'
              onClick={() => { alert('Oferta aceptada');}}>Aceptar</button>
            <button className='text-xs text-hover py-1 w-20 rounded-lg bg-red-nord'
              onClick={() => { alert('Oferta rechazada');}}>Rechazar</button>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center '>
          <img className='w-10 h-10 object-cover rounded-full 'src='https://miro.medium.com/v2/resize:fit:785/0*Ggt-XwliwAO6QURi.jpg'/>
          <h1 className='text-xs text-nord1' >Tú</h1>
          <h1 className='text-lg font-bold text-primary'>Estación Delicias</h1>
        </div>
      </div>
    );
};
export { OfferCard };