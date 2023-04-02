import { IOfferRepo, Offer } from '../../core/negotiations/domain';
import { MemoryOfferRepo } from '../../infraestructure/memory';
import { MainLayout } from '../components/layouts';
import { useEffect, useState } from 'react';
import { OfferList, UserOfferList } from '../components/ui/offer';
import { chooseColor } from '../../utils/kindsSelector';

const NegotiationPage = () => {
  const offerRepo: IOfferRepo = new MemoryOfferRepo(); 
  const [offersList, setOffersList] = useState<Offer[]>([]);
  const [userOffersList, setUserOffersList] = useState<Offer[]>([]);

  useEffect(() => {
    offerRepo.getAllOffers().then((list) => {
      setOffersList(list);
    });
  }, []);
  useEffect(() => {
    offerRepo.getAllMyOffers().then((list) => {
      setUserOffersList(list);
    });
  }, []);
  return (
    <MainLayout>
      <div className='flex-col-2 w-full'>
      <div className='font-bold text-primary text-3xl w-full mx-10 flex flex-col justify-center'>
          <h1>Mis Ofertas</h1>
      </div>
        <div className='w-full h-full md:w-1/2 flex px-6'>
          <UserOfferList list={userOffersList} />
        </div>
        <div className='font-bold text-primary text-3xl w-full pt-10 mx-10 flex flex-col justify-center'>
          <h1>Ofertas sobre mis propiedades</h1>
      </div>
        <div  className='w-full h-full md:w-1/2 flex px-6'>
          <OfferList list={offersList} />
        </div>
      </div>
    </MainLayout>
  );
};

export { NegotiationPage };
