import { IOfferRepo, Offer } from '../../core/negotiations/domain';
import { MemoryOfferRepo } from '../../infraestructure/memory';
import { MainLayout } from '../components/layouts';
import { useEffect, useState } from 'react';
import { OfferList, UserOfferList } from '../components/ui/offer';

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
      <div className='xl:flex flex-col-2 w-1/2 xs:w-full'>
        <div className='font-bold text-primary text-3xl w-full ml-10 flex flex-col justify-center'>
          <h1>Mis Ofertas</h1>
          <UserOfferList list={userOffersList} />
      </div>
        <div className='font-bold text-primary ml-10 text-3xl w-full flex flex-col justify-center'>
          <h1>Ofertas sobre mis propiedades</h1>
          <OfferList list={offersList} />
      </div>
      </div>
    </MainLayout>
  );
};

export { NegotiationPage };
