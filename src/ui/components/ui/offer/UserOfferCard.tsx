import { FC } from 'react'
import { Offer } from '../../../../core/negotiations/domain'
import { Kind } from '../../../../core/properties/domain'
import { ReactComponent as SchoolIcon } from '/src/assets/graduation-cap-solid.svg'
import { ReactComponent as MedicalIcon } from '/src/assets/suitcase-medical-solid.svg'
import { ReactComponent as GrocerieIcon } from '/src/assets/utensils-solid.svg'
import { ReactComponent as TrainIcon } from '/src/assets/train-solid.svg'
import { User } from '../../../../core/admin/domain'
import { ReactComponent as UndefinedIcon } from 'src/assets/undefined-icon.svg'

interface Offers {
  offer: Offer,
  offerer: User,
  owner: User
}

const PropertyIcon = (kind: Kind) => {
  switch (kind) {
    case 'health':
      return <MedicalIcon style={{ fill: '#2E3440' }} className={'h-full  w-16 px-2'} />;

    case 'groceries':
      return <GrocerieIcon style={{ fill: '#2E3440' }} className={'h-full  w-16 px-2'} />;

    case 'education':
      return <SchoolIcon style={{ fill: '#2E3440' }} className={'h-full  w-16 px-2'} />;

    case 'transport':
      return <TrainIcon style={{ fill: '#2E3440' }} className={'h-full  w-16 px-2'} />;
    default:
      return <></>;
  }
};

const UserOfferCard: FC<Offers> = ({ offer, offerer, owner }) => {
  return (
    <div
      style={{ background: '#8FBCBB' }}
      className='flex justify-center items-center border w-full rounded-3xl py-2 px-4 my-4 h-100'
    >
      <div className='flex flex-col justify-center items-center'>
        { offerer.icon !== undefined ? (
          <img className='w-10 h-10 object-cover rounded-full' src={offerer.icon}></img>
        ) : (
          <UndefinedIcon style={{ fill: '#2E3440' }} className='w-10 h-10 object-cover rounded-full'/>
        )}
        <h1 className='text-xs text-nord1'>Tú</h1>
        <h1 className='text-xl w-50 font-bold text-primary'>{offer.amount}€</h1>
      </div>
      <div className='flex items-center justify-top mt-4 mx-4 flex-col'>
        {PropertyIcon('transport')}
        <div className='flex flex-col items-bottom px-5 py-1 w-full'>
          <button
            className='items-center text-xs text-hover py-1 my-1 mx-2 w-20 rounded-lg bg-primary'
            onClick={() => {
              alert('Oferta cancelada');
            }}
          >
            Cancelar
          </button>
          <button
            style={{ background: '#8FBCBB', color: '#8FBCBB' }}
            className='items-center text-xs cursor-default py-1 my-1 w-20 rounded-lg mx-2'
          >
            Consultar
          </button>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center '>
        { owner.icon !== undefined ? (
          <img className='w-10 h-10 object-cover rounded-full' src={owner.icon}></img>
        ) : (
          <UndefinedIcon style={{ fill: '#2E3440' }} className='w-10 h-10 object-cover rounded-full'/>
        )}
        <h1 className='text-xs text-nord1'>{offerer.name}</h1>
        <h1 style={{ background: '#8FBCBB' }} className='w-50 font-bold text-lg'>Estación Delicias</h1>
      </div>
    </div>
  );
};
export { UserOfferCard };
