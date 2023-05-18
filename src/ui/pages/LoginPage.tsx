/*  Sistemas y Tecnologías Web - Fabra Caro, Francisco
*   Proyecto:                    Zaragoza en Juego 
*   Fichero:                     LoginPage.tsx
*   Desarrolladores:             Aréjula Aísa, Íñigo                  - 785370              
*                                González Martínez de Apellániz, Ibón - 756878
*                                Ruiz Borao, Juan José                - 756640
*                                Penacho, Ismael                      - 774572
*/

import { useEffect, useState } from 'react';
import { FaGoogle, FaGithub, FaDiscord } from 'react-icons/fa';
import { ReactComponent as Logo } from '/src/assets/Logo.svg';
import { Link } from 'react-router-dom';
import { UseAuth } from '../hooks/auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../infraestructure/http/http';

const LoginPage = () => {
  const useAuth = UseAuth();
  const navigate = useNavigate();
  //a md window have 768 pixels
  const md = 768;

  //set html head metadata
  useEffect(() => {
    document.title = '';
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

  return (
    <>
      {windowDimenion.winWidth > md ? (
        //Desktop layout
        <div className='w-screen h-screen bg-primary '>
          <div className='bg-secondary bg-opacity-80 p-8 rounded-lg w-full h-full flex flex-col justify-center items-center pb-40 px-6'>
            <div className='mb-6 flex'>
              <h1 className='text-5xl font-bold text-primary'>{'Zaragoza en juego'}</h1>
            </div>
            <div className='mb-6flex'>
              <Logo className='max-w-full' />
            </div>
            <div className='flex space-x-4'>
              <Link
                to={baseUrl + '/api/auth/google'}
                className='flex items-center justify-center p-2 mt-4 bg-primary text-secondary rounded-lg'
              >
                <FaGoogle className='text-xl' />
              </Link>

              <Link
                to={baseUrl + '/api/auth/github'}
                className='flex items-center justify-center p-2 mt-4 bg-primary text-secondary rounded-lg'
              >
                <FaGithub className='text-xl' />
              </Link>

              <Link
                to={baseUrl + '/api/auth/discord'}
                className='flex items-center justify-center p-2 mt-4 bg-primary text-secondary rounded-lg'
              >
                <FaDiscord className='text-xl' />
              </Link>
            </div>
          </div>
        </div>
      ) : (
        //Mobile layout
        <div className='w-screen h-screen bg-background '>
          <div className='bg-secondary bg-opacity-80 p-8 rounded-lg w-full h-full flex flex-col justify-center items-center pb-40 px-6'>
            <div className='mb-6 flex'>
              <h1 className='text-5xl font-bold text-primary'>{'Zaragoza en juego'}</h1>
            </div>
            <div className='mb-6 flex'>
              <Logo className='max-w-full' />
            </div>
            <div className='flex space-x-4'>
              <Link
                to={baseUrl + '/api/auth/google'}
                className='flex items-center justify-center p-2 mt-4 bg-primary text-secondary rounded-lg'
              >
                <FaGoogle className='text-xl' />
              </Link>

              <Link
                to={baseUrl + '/api/auth/github'}
                className='flex items-center justify-center p-2 mt-4 bg-primary text-secondary rounded-lg'
              >
                <FaGithub className='text-xl' />
              </Link>

              <Link
                to={baseUrl + '/api/auth/discord'}
                className='flex items-center justify-center p-2 mt-4 bg-primary text-secondary rounded-lg'
              >
                <FaDiscord className='text-xl' />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export { LoginPage };
