import { useEffect, useState } from 'react';
import { ReactComponent as Logo } from '/src/assets/Logo.svg';
import { ReactComponent as Fondo } from '/src/assets/Fondo.svg';
import { UseAuth } from '../hooks/auth/AuthContext';
import { useNavigate } from 'react-router-dom';

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
            <div className="mb-6 flex">
              <h1 className='text-5xl font-bold text-primary'>{'Zaragoza en juego'}</h1>
            </div>
            <div className="mb-6flex">
              <Logo className="max-w-full"/>
            </div>
            <div>
              <button
                onClick={() => {
                  useAuth.handleLogin();
                  navigate('/', { replace: true });
                }}
                className='px-20 py-4 mt-4 bg-primary text-secondary rounded-lg'
              >
                Iniciar sesión
              </button>
            </div>
          </div>
        </div>
      ) : (
        //Mobile layout
        <div className='w-screen h-screen bg-background '>
          <div className='bg-secondary bg-opacity-80 p-8 rounded-lg w-full h-full flex flex-col justify-center items-center pb-40 px-6'>
            <div className="mb-6 flex">
              <h1 className='text-5xl font-bold text-primary'>{'Zaragoza en juego'}</h1>
            </div>
            <div className="mb-6 flex">
              <Logo className="max-w-full"/>
            </div>
            <div>
              <button
                onClick={() => {
                  useAuth.handleLogin();
                  navigate('/', { replace: true });
                }}
                className='px-20 py-4 mt-4 bg-primary text-secondary rounded-lg'
              >
                Iniciar sesión
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export { LoginPage };
