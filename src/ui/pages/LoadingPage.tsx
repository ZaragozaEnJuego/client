import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import { Navigate, useNavigate } from 'react-router-dom';
import { HttpAuthRepo } from '../../infraestructure/http/AuthRepo';
import { IAuthRepo } from '../../core/auth/domain';
import axios from '../../infraestructure/http/http';
import { UseAuth } from '../hooks/auth/AuthContext';

const LoadingPage = () => {
  const authRepo: IAuthRepo = new HttpAuthRepo();
  const [loaded, setloaded] = useState(false);
  const useAuth = UseAuth();
  useEffect(() => {
    async function fetchData() {
      try {
        const tkn = await authRepo.getToken();
        axios.defaults.headers.common['Authorization'] = `Bearer ${tkn.token}`;
        useAuth.handleLogin(tkn);
      } catch (error) {
        console.log('no server connection');
        console.log(error);
      } finally {
        //  setloaded(true);
      }
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
