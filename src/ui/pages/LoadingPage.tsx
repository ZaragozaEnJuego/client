/*  Sistemas y Tecnologías Web - Fabra Caro, Francisco
*   Proyecto:                    Zaragoza en Juego 
*   Fichero:                     LoadingPage.tsx
*   Desarrolladores:             Aréjula Aísa, Íñigo                  - 785370              
*                                González Martínez de Apellániz, Ibón - 756878
*                                Ruiz Borao, Juan José                - 756640
*                                Penacho, Ismael                      - 774572
*/

import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import { Navigate, useLocation } from 'react-router-dom';
import axios from '../../infraestructure/http/http';
import { UseAuth } from '../hooks/auth/AuthContext';

const LoadingPage = () => {
  const [loaded, setloaded] = useState(false);
  const useAuth = UseAuth();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const chooseHomePage = () => {
    return useAuth.isAdmin() ? <Navigate to='/admin' replace /> : <Navigate to='/home' replace />;
  };

  useEffect(() => {
    const token = searchParams.get('token');
    const userId = searchParams.get('userId');
    const isAdminStr = searchParams.get('isAdmin');
    const isAdmin = isAdminStr === 'true';
    if (token !== null && userId !== null) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      console.log(location.search);

      useAuth.handleLogin({ isAdmin, token, userId });
    }
    setloaded(true);
  }, []);

  return loaded ? (
    chooseHomePage()
  ) : (
    <div className='flex justify-center items-center h-screen w-screen '>
      <ReactLoading type={'spin'} color={'#2E3440'} height={'20%'} width={'20%'} />
    </div>
  );
};

export { LoadingPage };
