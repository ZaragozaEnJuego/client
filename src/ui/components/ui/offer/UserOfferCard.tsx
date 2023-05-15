import { FC } from 'react';
import { Offer } from '../../../../core/negotiations/domain';
import { IPropertieRepo, Kind, Propertie } from '../../../../core/properties/domain';
import { ReactComponent as SchoolIcon } from '/src/assets/graduation-cap-solid.svg';
import { ReactComponent as MedicalIcon } from '/src/assets/suitcase-medical-solid.svg';
import { ReactComponent as GrocerieIcon } from '/src/assets/utensils-solid.svg';
import { ReactComponent as TrainIcon } from '/src/assets/train-solid.svg';
import { ReactComponent as UndefinedIcon } from '/src/assets/undefined-icon.svg'
import { User } from '../../../../core/admin/domain';
import { HTTPOfferRepo } from '../../../../infraestructure/http/OfferRepo';
import { HTTPAdminStatsRepo } from '../../../../infraestructure/http/AdminStatsRepo';
import { HttpPropertieRepo } from '../../../../infraestructure/http/PropertieRepo';
import { toast } from 'react-toastify';

interface Offers {
  offer: Offer,
  owner: User
  propertie: Propertie
}

const offerRepo: HTTPOfferRepo = new HTTPOfferRepo()

const PropertyIcon = (kind: Kind) => {
  switch (kind) {
    case 'health':
      return <MedicalIcon style={{ fill: '#2E3440' }} className={'h-full w-10 lg:w-16 px-1 sm:px-2'} />;

    case 'groceries':
      return <GrocerieIcon style={{ fill: '#2E3440' }} className={'h-full w-10 lg:w-16 px-1 sm:px-2'} />;

    case 'education':
      return <SchoolIcon style={{ fill: '#2E3440' }} className={'h-full w-10 lg:w-16 px-1 sm:px-2'} />;

    case 'transport':
      return <TrainIcon style={{ fill: '#2E3440' }} className={'h-full w-10 lg:w-16 px-1 sm:px-2'} />;
    default:
      return <></>;
  }
};

const UserOfferCard: FC<Offers> = ({ offer, owner, propertie }) => {
  return (
    <div style={{ background: '#8FBCBB' }} className='flex justify-center align-middle items-center overflow-x-clip border w-auto rounded-3xl py-2 px-1 sm:px-4 my-4 h-100'>
    <div className='flex flex-col justify-center items-center'>
      <UndefinedIcon style={{ fill: '#2E3440' }} className='w-10 h-10 object-cover rounded-full'/>
      <h1 className='text-xs text-nord1' >Tú</h1>
      <h1 className='text-xs lg:text-lg md:text-base sm:text-sm xl:text-xl w-50 font-bold text-primary text-center'>{offer.amount ?? '0'}€</h1>
    </div>
    <div className='flex items-center justify-top mt-4 mx-1 sm:mx-2 md:mx-4 flex-col'>
      {PropertyIcon(propertie.kind ?? 'education')}
      <div className='flex flex-col items-bottom px-5 py-1 w-full'>
        <button className='items-center text-xs text-hover py-1 my-1 sm:mx-2 mx-1 w-20 rounded-lg bg-primary'
          onClick={() => { 
            try {
              offerRepo.deleteOffer(offer.id)
              toast('Oferta cancelada', {
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
              toast.error('Error al cancelar la oferta', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
              })
            }
          }}
          >Cancelar</button>
        <button style={{ background: '#8FBCBB', color: '#8FBCBB'}} className='items-center text-xs cursor-default py-1 my-1 w-20 rounded-lg mx-2'>Consultar</button>
      </div>
    </div>
    <div className='flex flex-col justify-center items-center '>
      <UndefinedIcon style={{ fill: '#2E3440' }} className='w-10 h-10 object-cover rounded-full'/>
      <h1 className='text-xs text-nord1' >{owner.name ?? ''}</h1>
      <h1 style={{ background: '#8FBCBB' }} className={'w-50 text-center font-bold text-sm lg:text-base md:text-sm xl:text-lg'}>{propertie.name ?? ''}</h1>
    </div>
  </div>
    );
};
export { UserOfferCard };
