import { FC } from 'react'
import { Offer } from '../../../../core/negotiations/domain'
import { chooseColor } from '../../../../utils/kindsSelector'
import { Kind } from '../../../../core/properties/domain'
import { ReactComponent as SchoolIcon } from '/src/assets/graduation-cap-solid.svg'
import { ReactComponent as MedicalIcon } from '/src/assets/suitcase-medical-solid.svg'
import { ReactComponent as GrocerieIcon } from '/src/assets/utensils-solid.svg'
import { ReactComponent as TrainIcon } from '/src/assets/train-solid.svg'
import { User } from '../../../../core/admin/domain'
import { ReactComponent as UndefinedIcon } from '/src/assets/undefined-icon.svg'
import { HTTPOfferRepo } from '../../../../infraestructure/http/OfferRepo'
import { toast } from 'react-toastify'

interface Offers {
  offer: Offer,
  offerer: User,
  owner: User
}

const offerRepo: HTTPOfferRepo = new HTTPOfferRepo()

const PropertyIcon = (kind: Kind) => {
  switch (kind) {
    case 'health':
      return <MedicalIcon style={{ fill: chooseColor(kind) }} className={'h-full lg:w-16 w-10 px-1 sm:px-2'} />;

    case 'groceries':
      return <GrocerieIcon style={{ fill: chooseColor(kind) }} className={'h-full lg:w-16 w-10 px-1 sm:px-2'} />;

    case 'education':
      return <SchoolIcon style={{ fill: chooseColor(kind) }} className={'h-full lg:w-16 w-10 px-1 sm:px-2'} />;

    case 'transport':
      return <TrainIcon style={{ fill: chooseColor(kind) }} className={'h-full lg:w-16 w-10 px-1 sm:px-2'} />;
    default:
      return <></>;
  }
};

const OfferCard: FC<Offers> = ({ offer, offerer, owner }) => {
    return (
      <div>
        <div style={{ color: chooseColor('transport') }} className='flex flex-col-3 justify-center align-middle overflow-x-clip items-top border w-auto rounded-3xl py-2 px-1 sm:px-4 my-4 h-100'>
          <div className='flex flex-col justify-center items-center'>
            { offerer.icon !== undefined ? (
            <img className='w-10 h-10 object-cover rounded-full' src={offerer.icon}></img>
            ) : (
            <UndefinedIcon style={{ fill: '#2E3440' }} className='w-10 h-10 object-cover rounded-full'/>
            )}
            <h1 className='text-xs text-nord1' >{offerer.name}</h1>
            <h1 style={{ color: chooseColor('transport') }} className={'w-50 font-bold text-xs lg:text-lg md:text-base sm:text-sm xl:text-xl text-center'}>{offer.amount}€</h1>
          </div>
          <div className='flex items-center justify-top mt-4 mx-1 sm:mx-2 md:mx-4 flex-col'>
            {PropertyIcon('transport')}
            <div className='flex flex-col items-center px-5 py-1 w-full'>
              <button className='items-center text-xs text-primary py-1 my-1 w-20 rounded-lg sm:mx-2 mx-1 bg-green-nord'
                onClick={() => {
                  try {
                    offerRepo.execOffer(offer.id)
                    offerRepo.deleteOffer(offer.id)
                    toast('Oferta aceptada', {
                      position: 'top-right',
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: 'light',
                    })
                  } catch (error) {
                    toast('Error al aceptar la oferta', {
                      position: 'top-right',
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: 'light',
                    });
                  }
                }}>Aceptar</button>
              <button className='items-center text-xs text-hover py-1 my-1 w-20 rounded-lg bg-red-nord'
                onClick={() => { 
                  try {
                    offerRepo.deleteOffer(offer.id) 
                    toast('Oferta rechazada', {
                      position: 'top-right',
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: 'light',
                    })
                  } catch (error) {
                    toast('Error al rechazar la oferta', {
                      position: 'top-right',
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: 'light',
                    });
                  }
                }}>Rechazar</button>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center'>
            { offerer.icon !== undefined ? (
              <img className='w-10 h-10 object-cover rounded-full' src={offerer.icon}></img>
            ) : (
              <UndefinedIcon style={{ fill: '#2E3440' }} className='w-10 h-10 object-cover rounded-full'/>
            )}
            <h1 className='text-xs text-nord1' >Tú</h1>
            <h1 style={{ color: chooseColor('transport') }} className='w-50 text-center text-sm lg:text-base md:text-sm xl:text-lg font-bold text-primary'>Estación Delicias</h1>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <img className='w-10 h-10 object-cover rounded-full' src='https://miro.medium.com/v2/resize:fit:785/0*Ggt-XwliwAO6QURi.jpg'/>
          <h1 className='text-xs text-nord1'>Tú</h1>
          <h1 style={{ color: chooseColor('transport') }} className='w-50 text-lg font-bold text-primary'>Estación Delicias</h1>
        </div>
      </div>
  );
};

export { OfferCard }
