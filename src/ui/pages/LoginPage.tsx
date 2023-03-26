import { UseAuth } from '../hooks/auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import { LoginLayout } from '../components/layouts/LoginLayout';

const LoginPage = () => {
  const useAuth = UseAuth();
  const navigate = useNavigate();
  return (
    <LoginLayout>
      <button
        onClick={() => {
          useAuth.handleLogin();
          navigate('/', { replace: true });
        }}
        className='px-20 py-4 mt-4 bg-primary text-secondary rounded-lg'
      >
        Iniciar sesión
      </button>      
    </LoginLayout>
  );
};

export { LoginPage };
