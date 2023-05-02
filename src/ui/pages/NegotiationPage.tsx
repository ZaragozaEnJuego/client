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
    offerRepo.getOwnerOffers().then((list) => {
      setOffersList(list);
    });
    offerRepo.getOffererOffers().then((list) => {
      setUserOffersList(list);
    });
    //TODO: Modificar este useEffect para que llame a las operaciones que reciben los datos de la api
  }, []);

  const getOwnerOffers = async () => {
    const data = await fetch(''); //Ruta correspondiente
    const offers = await data.json();
    console.log('Ofertas a las propiedades del usuario recibidas');
  };

  const getOffererOffers = async () => {
    const data = await fetch(''); //Ruta correspondiente
    const offers = await data.json();
    console.log('Ofertas del usuario recibidas');
  };

  return (
    <MainLayout>
      <div className='xl:flex flex-col-2 justify-start pb-40 mx-10 w-auto h-full'>
        <div className='font-bold text-primary items-start text-3xl h-full w-full ml-5 flex flex-col'>
          <h1>Mis Ofertas</h1>
          <UserOfferList list={userOffersList} />
        </div>
        <div className='font-bold text-primary items-start text-3xl h-full w-full ml-5 flex flex-col'>
          <h1>Mis propiedades</h1>
          <OfferList list={offersList} />
        </div>
      </div>
    </MainLayout>
  );
};

export { NegotiationPage };
