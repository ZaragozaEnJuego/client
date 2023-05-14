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

  useEffect(() => {
    const token = searchParams.get('token');
    const userId = searchParams.get('userId');
    const isAdminStr = searchParams.get('admin');
    const isAdmin = isAdminStr === 'true';
    if (token !== null && userId !== null) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      useAuth.handleLogin({ isAdmin, token, userId });
    }
    setloaded(true);
  }, []);

  return loaded ? (
    <Navigate to='/home' replace />
  ) : (
    <div className='flex justify-center items-center h-screen w-screen '>
      <ReactLoading type={'spin'} color={'#2E3440'} height={'20%'} width={'20%'} />
    </div>
  );
};

export { LoadingPage };
