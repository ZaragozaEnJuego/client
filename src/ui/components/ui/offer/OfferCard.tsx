import { FC } from 'react'
import { Offer } from '../../../../core/negotiations/domain'
import { chooseColor } from '../../../../utils/kindsSelector'
import { Kind } from '../../../../core/properties/domain'
import { ReactComponent as SchoolIcon } from '/src/assets/graduation-cap-solid.svg'
import { ReactComponent as MedicalIcon } from '/src/assets/suitcase-medical-solid.svg'
import { ReactComponent as GrocerieIcon } from '/src/assets/utensils-solid.svg'
import { ReactComponent as TrainIcon } from '/src/assets/train-solid.svg'
import { User } from '../../../../core/admin/domain'
import { ReactComponent as UndefinedIcon } from 'src/assets/undefined-icon.svg'
import { HTTPOfferRepo } from '../../../../infraestructure/http/OfferRepo'

interface Offers {
  offer: Offer,
  offerer: User,
  owner: User
}

const offerRepo: HTTPOfferRepo = new HTTPOfferRepo()

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

const OfferCard: FC<Offers> = ({ offer, offerer, owner }) => {
  return (
    <div style={{ color: chooseColor('transport') }} 
      className='flex flex-col-3 justify-center items-top border w-full rounded-3xl py-2 px-4 my-4 h-100'>
      <div className='flex flex-col justify-center items-center'>
        { owner.icon !== undefined ? (
          <img className='w-10 h-10 object-cover rounded-full' src={owner.icon}></img>
        ) : (
          <UndefinedIcon style={{ fill: '#2E3440' }} className='w-10 h-10 object-cover rounded-full'/>
        )}
        <h1 className='text-xs text-nord1'>Lucía</h1>
        <h1 style={{ color: chooseColor('transport') }} className={'w-50 font-bold text-xl'}>{offer.amount}€</h1>
      </div>
      <div className='flex items-center justify-top mt-4 mx-4 flex-col'>
        {PropertyIcon('transport')}
        <div className='flex flex-col items-center px-5 py-1 w-full'>
          <button className='items-center text-xs text-primary py-1 my-1 w-20 rounded-lg mx-2 bg-green-nord'
            onClick={() => {
              offerRepo.execOffer(offer, offerer, owner)
              offerRepo.deleteOffer(offer)
            }}>Aceptar</button>
          <button
            className='items-center text-xs text-hover py-1 my-1 w-20 rounded-lg bg-red-nord'
            onClick={() => {
              offerRepo.deleteOffer(offer)
            }}>Rechazar</button>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        { offerer.icon !== undefined ? (
          <img className='w-10 h-10 object-cover rounded-full' src={offerer.icon}></img>
        ) : (
          <UndefinedIcon style={{ fill: '#2E3440' }} className='w-10 h-10 object-cover rounded-full'/>
        )}
        <h1 className='text-xs text-nord1'>Tú</h1>
        <h1 style={{ color: chooseColor('transport') }} className='w-50 text-lg font-bold text-primary'>Estación Delicias</h1>
      </div>
    </div>
  )
}

export { OfferCard }
