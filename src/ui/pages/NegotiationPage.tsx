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
    offerRepo.getAllMyOffers().then((list) => {
      setUserOffersList(list);
    });
  }, []);

  return (
    <MainLayout>
      <div className='xl:flex flex-col-2 justify-start mx-10 w-auto'>
        <div className='font-bold text-primary xl:items-start sm:items-center xs:items-center xxs:items-center md:items-center text-3xl w-full h-1/3 ml-5 flex flex-col'>
          <h1>Mis Ofertas</h1>
          <UserOfferList list={userOffersList} />
        </div>
        <div className='font-bold text-primary text-3xl w-full ml-5 flex flex-col'>
          <h1>Mis propiedades</h1>
          <OfferList list={offersList} />
        </div>
      </div>
    </MainLayout>
  );
};

export { NegotiationPage };
