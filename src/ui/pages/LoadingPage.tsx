import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { HttpAuthRepo } from '../../infraestructure/http/AuthRepo';
import { IAuthRepo } from '../../core/auth/domain';
import axios from '../../infraestructure/http/http';
import { UseAuth } from '../hooks/auth/AuthContext';

const LoadingPage = () => {
  const [loaded, setloaded] = useState(false);
  const useAuth = UseAuth();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  useEffect(() => {
    async function fetchData() {
      const jwt = searchParams.get('token');
      if (jwt === null) {
        setloaded(true);
      } else {
        console.log(jwt);
        axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
        useAuth.handleLogin({ isAdmin: false, token: jwt });
      }
      //  setloaded(true);
    }
    fetchData();

    // setloaded(true);
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
