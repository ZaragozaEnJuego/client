import { UseAuth } from '../hooks/auth/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const useAuth = UseAuth();
  const navigate = useNavigate();
  return (
    <div className='w-screen h-screen flex justify-center items-center '>
      <div>
        <h1 className='text-secondary text-4xl font-bold'>INICIAR SESIÓN</h1>

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
  );
};

export { LoginPage };
