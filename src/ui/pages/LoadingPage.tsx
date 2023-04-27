import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import { Navigate, useNavigate } from 'react-router-dom';

const LoadingPage = () => {
  const [loaded, setloaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      //TODO: request to jwt
      // setloaded(true);
    }, 8000);

    return () => clearTimeout(timer);
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
