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
    case 'health':
      return <MedicalIcon style={{ fill: chooseColor(kind) }} className={'h-full  w-16 px-2'} />;

    case 'groceries':
      return <GrocerieIcon style={{ fill: chooseColor(kind) }} className={'h-full  w-16 px-2'} />;

    case 'education':
      return <SchoolIcon style={{ fill: chooseColor(kind) }} className={'h-full  w-16 px-2'} />;

    case 'transport':
      return <TrainIcon style={{ fill: chooseColor(kind) }} className={'h-full  w-16 px-2'} />;
    default:
      return <></>;
  }
};

const OfferCard: FC<Offers> = ({ offer }) => {
    return (
        <div style={{ color: chooseColor('Transport') }} className='flex flex-col-3 justify-center align-middle overflow-x-clip items-top border w-auto rounded-3xl py-2 px-1 sm:px-4 my-4 h-100'>
          <div className='flex flex-col justify-center items-center'>
            <img className='w-10 h-10 object-cover rounded-full 'src='https://media.istockphoto.com/id/1151155288/es/foto/close-up-foto-incre%C3%ADble-hermosa-ella-sus-dedos-pulgar-de-la-dama-indican-directamente-pecho.jpg?s=612x612&w=0&k=20&c=NCuogVJLvUYYfMihKzWPAl7OPRQSsQsyWFKi6fyuty4='/>
            <h1 className='text-xs text-nord1' >Lucía</h1>
            <h1 style={{ color: chooseColor('Transport') }} className={'w-50 font-bold text-xs lg:text-lg md:text-base sm:text-sm xl:text-xl text-center'}>{offer.amount}€</h1>
          </div>
          <div className='flex items-center justify-top mt-4 mx-1 sm:mx-2 md:mx-4 flex-col'>
            {PropertyIcon('Transport')}
            <div className='flex flex-col items-center px-5 py-1 w-full'>
              <button className='items-center text-xs text-primary py-1 my-1 w-20 rounded-lg sm:mx-2 mx-1 bg-green-nord'
                onClick={() => { alert('Oferta aceptada');}}>Aceptar</button>
              <button className='items-center text-xs text-hover py-1 my-1 w-20 rounded-lg bg-red-nord'
                onClick={() => { alert('Oferta rechazada');}}>Rechazar</button>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <img className='w-10 h-10 object-cover rounded-full 'src='https://miro.medium.com/v2/resize:fit:785/0*Ggt-XwliwAO6QURi.jpg'/>
            <h1 className='text-xs text-nord1' >Tú</h1>
            <h1 style={{ color: chooseColor('Transport') }} className='w-50 text-center text-sm lg:text-base md:text-sm xl:text-lg font-bold text-primary'>Estación Delicias</h1>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <img
          className='w-10 h-10 object-cover rounded-full '
          src='https://miro.medium.com/v2/resize:fit:785/0*Ggt-XwliwAO6QURi.jpg'
        />
        <h1 className='text-xs text-nord1'>Tú</h1>
        <h1
          style={{ color: chooseColor('transport') }}
          className='w-50 text-lg font-bold text-primary'
        >
          Estación Delicias
        </h1>
      </div>
    </div>
  );
};

export { OfferCard };
