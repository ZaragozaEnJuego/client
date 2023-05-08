import { FC } from 'react';
import { Offer } from '../../../../core/negotiations/domain';
import { chooseColor } from '../../../../utils/kindsSelector';

interface Offers {
  offer: Offer;
}

const SmallOfferCard: FC<Offers> = ({ offer }) => {
  return (
    <div
      style={{ color: chooseColor('transport') }}
      className='flex flex-col-3 justify-center items-top border w-full rounded-3xl py-2 px-4 my-4 h-100'
    >
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-xs text-nord1'>Lucía</h1>
        <h1 style={{ color: chooseColor('transport') }} className={'w-50 font-bold text-sm'}>
          {offer.amount}€
        </h1>
      </div>
      <div className='flex items-center justify-top mt-4 mx-4 flex-col'>
        <div className='flex flex-col items-center px-5 py-1 w-full'>
          <button
            className='items-center text-xs text-primary py-1 my-1 w-20 rounded-lg bg-green-nord'
            onClick={() => {
              alert('Oferta aceptada');
            }}
          >
            Aceptar
          </button>
          <button
            className='items-center text-xs text-hover py-1 my-1 w-20 rounded-lg bg-red-nord'
            onClick={() => {
              alert('Oferta rechazada');
            }}
          >
            Rechazar
          </button>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-xs text-nord1'>Tú</h1>
        <h1
          style={{ color: chooseColor('transport') }}
          className='w-50 text-sm font-bold text-primary'
        >
          Estación Delicias
        </h1>
      </div>
    </div>
  );
};

export { SmallOfferCard };
