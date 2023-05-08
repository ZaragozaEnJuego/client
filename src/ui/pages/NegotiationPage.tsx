import { Offer } from '../../core/negotiations/domain'
import { MainLayout } from '../components/layouts'
import { useEffect, useState } from 'react'
import { OfferList, UserOfferList } from '../components/ui/offer'
import { HTTPOfferRepo } from '../../infraestructure/http/OfferRepo'
import { UseAuth } from '../hooks/auth/AuthContext'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const NegotiationPage = () => {
  const useAuth = UseAuth()
  const userId = useAuth.getUserId()
  
  const offerRepo: HTTPOfferRepo = new HTTPOfferRepo()
  const [offersList, setOffersList] = useState<Offer[]>([])
  const [userOffersList, setUserOffersList] = useState<Offer[]>([])

  useEffect(() => {
    if (userId !== undefined) {
      try {
        offerRepo.getOwnerOffers(userId).then((list) => {
          setOffersList(list)
        })
    } catch (error) {
        toast('Error al obtener las ofertas al usuario', {
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
    }
  }, []);

  useEffect(() => {
    if (userId !== undefined) {
      try {
        offerRepo.getOffererOffers(userId).then((list) => {
          setUserOffersList(list)
        })
    } catch (error) {
        toast('Error al obtener las ofertas del usuario', {
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
    }
  }, []);

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
