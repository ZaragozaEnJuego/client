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
  //a md window have 768 pixels
  const md = 768;

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

  //state of the current windw dimension
  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });

  //detect size of the current browser window
  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  //avoid recurrennt executions of detectSize
  const [mounted, setMounted] = useState(false);

  //run each time the window dimension changes
  useEffect(() => {
    //listed al the window redimensions
    window.addEventListener('resize', detectSize);

    if (!mounted) {
      setMounted(true);
      detectSize();
    }

    return () => {
      window.removeEventListener('resize', detectSize);
    };
  }, [mounted, windowDimenion]);

  const [showOffers, setShowOffers] = useState(false);
  const [buttonText, setButtonText] = useState('Mis propiedades');

  const toggleShowOffers = () => {
    setShowOffers(!showOffers);
    if(!showOffers) {
      setButtonText('Mis ofertas');
    } else {
      setButtonText('Mis propiedades');
    }
  };

  const userComponent = (
    <div className='font-bold text-primary items-start text-3xl h-full md:w-1/2 w-full ml-2 md:ml-5 flex flex-col'>
      <h1>Mis propiedades</h1>
      <OfferList list={offersList} />
    </div>
  );

  const offerComponent = (
    <div className='font-bold text-primary items-start text-3xl h-full w-full md:w-1/2 xs:w-full ml-2 md:ml-5 md:mr-5 flex flex-col'>
      <h1>Mis ofertas</h1>
      <UserOfferList list={userOffersList} />
    </div>
  );

  return (
    <>
      {windowDimenion.winWidth > md ? (
        //Desktop layout
        <MainLayout>
          <div className='overflow-y-scroll overflow-x-clip pr-2 h-full '>
            <div className='sm:flex flex-col-2 justify-start pb-40 mr-2 sm:mr-5 w-auto h-full'>
              <div className='font-bold text-primary items-start text-3xl h-full md:w-1/2 w-full ml-2 md:ml-5 flex flex-col'>
                <h1>Mis ofertas</h1>
                <UserOfferList list={userOffersList} />
              </div>
              <div className='font-bold text-primary items-start text-3xl h-full w-full md:w-1/2 xs:w-full ml-2 md:ml-5 md:mr-5 flex flex-col'>
                <h1>Mis propiedades</h1>
                <OfferList list={offersList} />
              </div>
            </div>
          </div>
        </MainLayout>
      ) : (
        //Mobile layout
        <MainLayout>
          <div className='overflow-y-scroll overflow-x-clip pr-2 h-full '>
            <div className='flex justify-end items-center mb-4'>
              <span className='mr-2 font-bold text-primary'>{buttonText}</span>
              <div className='relative inline-block w-10 mr-2 align-middle select-none'>
                <input
                  type='checkbox'
                  name='toggle'
                  id='toggle'
                  className='toggle-checkbox absolute block w-6 h-6 rounded-full bg-[#5E81AC] border-4 appearance-none cursor-pointer'
                  checked={showOffers}
                  onChange={toggleShowOffers}
                />
                <label
                  htmlFor='toggle'
                  className='toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer'
                ></label>
              </div>
            </div>
            {showOffers ? offerComponent : userComponent}
          </div>
        </MainLayout>
      )}
    </>
  );
};

export { NegotiationPage };
